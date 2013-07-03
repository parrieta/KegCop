//
//  ViewControllerUsers.m
//  KegCop
//
//  Created by capin on 6/25/13.
//
//

#import "ViewControllerUsers.h"
#import "NSData+AES256.h"

@interface ViewControllerUsers ()

@end

@implementation ViewControllerUsers

// Core Data
@synthesize managedObjectContext = _managedObjectContext;

@synthesize uiPickerViewUsers = _uiPickerViewUsers;

@synthesize usernames = _usernames;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
    
    // Core Data
    if (_managedObjectContext == nil)
    {
        _managedObjectContext = [(AppDelegate *)[[UIApplication sharedApplication] delegate] managedObjectContext];
        NSLog(@"After _managedObjectContext: %@",  _managedObjectContext);
    }

    NSFetchRequest *request = [NSFetchRequest fetchRequestWithEntityName:@"Account"];
    
    NSEntityDescription *entity = [NSEntityDescription entityForName:@"Account" inManagedObjectContext:_managedObjectContext];
    request.resultType = NSDictionaryResultType;
    request.propertiesToFetch = [NSArray arrayWithObject:[[entity propertiesByName] objectForKey:@"username"]];
    request.returnsDistinctResults = YES;

    _usernames = [_managedObjectContext executeFetchRequest:request error:nil];
   
    NSLog (@"names: %@",_usernames);
}


-(NSInteger)numberOfComponentsInPickerView:(UIPickerView *)pickerView
{
    // One column
    return 1;
}

-(NSInteger)pickerView:(UIPickerView *)pickerView numberOfRowsInComponent:(NSInteger)component
{
    // set number of rows
    return _usernames.count;
}

-(NSString *)pickerView:(UIPickerView *)pickerView titleForRow:(NSInteger)row forComponent:(NSInteger)component
{
    // set item per row
    // changed statment below per this SO thread,
    // http://stackoverflow.com/questions/17331293/populate-uipicker-view-with-results-from-core-data-db-using-an-nsarray
    return _usernames[row][@"username"];
}

//-(NSInteger)selectedRowInComponent:(NSInteger)component
//{
//    NSLog(@"%d",[_uiPickerViewUsers selectedRowInComponent:0]);
//}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)viewDidUnload {
    [self setBtnDone:nil];
    [self setUiPickerViewUsers:nil];
    [self setBtnChangePin:nil];
    [super viewDidUnload];
}
- (IBAction)dismissScene:(id)sender {
    
    [self dismissModalViewControllerAnimated:YES];
}

- (IBAction)changePin:(id)sender {
    
    // get currently selected username in pickerview and store it as a NSString variable
    NSInteger row;
    
    row = [_uiPickerViewUsers selectedRowInComponent:0];
    strSelectedUN = _usernames[row][@"username"];
    NSLog(@"The currently selected row is %@",strSelectedUN);
    
    // create a compound string for title
    NSString *title = [NSString stringWithFormat:@"Change pin for %@",strSelectedUN];
    
    // display a UIAlertBox with a textfield (change tf to just have numbers)
    alertview = [[UIAlertView alloc] initWithTitle:title message:@"Input new pin" delegate:self cancelButtonTitle:@"Cancel" otherButtonTitles:@"Save", nil];
    
    [alertview setAlertViewStyle:UIAlertViewStyleLoginAndPasswordInput];
    
    // set the delegate for the UIAlertView textfield
    //[alertview textFieldAtIndex:0].delegate = self;
    [[alertview textFieldAtIndex:0] setPlaceholder:@"New pin"];
    [[alertview textFieldAtIndex:1] setPlaceholder:@"Confirm new pin"];
    [[alertview textFieldAtIndex:0] setKeyboardType:UIKeyboardTypeNumberPad];
    [[alertview textFieldAtIndex:1] setKeyboardType:UIKeyboardTypeNumberPad];
    [[alertview textFieldAtIndex:0] setSecureTextEntry:YES];
    
    // keep this line at the bottom
    [alertview show];
    
    
}

- (void)saveNewPin{
    
    // check for empty tf's
    [self checkTextFieldCharLength];
    
    // get selected username from uiPickerView
    NSInteger row;
    
    row = [_uiPickerViewUsers selectedRowInComponent:0];
    strSelectedUN = _usernames[row][@"username"];
    NSLog(@"The selected username is %@",strSelectedUN);
    
    // get text from textfield's in UIAlertView, compare them, then store them in DB.
    pin = [alertview textFieldAtIndex:0].text;
    repin = [alertview textFieldAtIndex:1].text;
    
    // compare if pins are equal
    if([pin isEqualToString: repin])
    {
        NSLog(@"pins are equal");
        
        
        key = @"donkey balls";
        
        // need to set pin in tf to pin in DB for correct user
        NSString *secret;
        secret = [alertview textFieldAtIndex:0].text;
        
        // password - convert string to NSData
        NSData *plain = [secret dataUsingEncoding:NSUTF8StringEncoding];
        
        // password - encrypt string
        NSData *cipher = [plain AES256EncryptWithKey:key];
        printf("%s\n", [[cipher description] UTF8String]);
        
        // convert NSData to Base64 encoded NSString
        NSString *cipherB64 = [self base64forData:cipher];
        
        // Core Data - shit
        NSFetchRequest *request = [[NSFetchRequest alloc] init];
        
        // define our table / entity to use
        NSEntityDescription *entity = [NSEntityDescription entityForName:@"Account" inManagedObjectContext:_managedObjectContext];
        [request setEntity:entity];
        
        // Fetch the records and handle an error
        NSError *error;
        NSMutableArray *mutableFetchResults = [[_managedObjectContext executeFetchRequest:request error:& error] mutableCopy];
        
        if (!mutableFetchResults) {
            // handle error.
            // should advise user to restart
        }
        
        // compare text field text / string with results in an array
        for (Account *pinAccount in mutableFetchResults) {
            if([pinAccount.username isEqualToString:strSelectedUN]) {
                NSLog(@"username found.");
                
                NSLog(@"pinAccount = %@",pinAccount.username);
                
                [pinAccount setValue:cipherB64 forKey:@"pin"];
                
                // save the managed object context / save to DB
                [_managedObjectContext save:&error];
            }
        }
    }
    else {
        NSLog(@"pins are not equal");
    }
}

- (void)checkTextFieldCharLength
{
    if([alertview textFieldAtIndex:0].text.length == 0) {
        [alertview setMessage:@"No new pin was inputted."];
    }
}

- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex {
    
    if (buttonIndex ==0) {
        [alertView dismissWithClickedButtonIndex:0 animated:YES];
    }
    if (buttonIndex == 1) {
        
        NSLog(@"btn 1 tapped");
        
        [self saveNewPin];
    }
}

//from: http://www.cocoadev.com/index.pl?BaseSixtyFour
- (NSString*)base64forData:(NSData*)theData {
    
    const uint8_t* input = (const uint8_t*)[theData bytes];
    NSInteger length = [theData length];
    
    static char table[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    
    NSMutableData* data = [NSMutableData dataWithLength:((length + 2) / 3) * 4];
    uint8_t* output = (uint8_t*)data.mutableBytes;
    
    NSInteger i;
    for (i=0; i < length; i += 3) {
        NSInteger value = 0;
        NSInteger j;
        for (j = i; j < (i + 3); j++) {
            value <<= 8;
            
            if (j < length) {
                value |= (0xFF & input[j]);
            }
        }
        
        NSInteger theIndex = (i / 3) * 4;
        output[theIndex + 0] =                    table[(value >> 18) & 0x3F];
        output[theIndex + 1] =                    table[(value >> 12) & 0x3F];
        output[theIndex + 2] = (i + 1) < length ? table[(value >> 6)  & 0x3F] : '=';
        output[theIndex + 3] = (i + 2) < length ? table[(value >> 0)  & 0x3F] : '=';
    }
    
    return [[NSString alloc] initWithData:data encoding:NSASCIIStringEncoding];
}

@end