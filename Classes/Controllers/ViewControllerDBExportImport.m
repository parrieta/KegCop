//
//  ViewControllerDBExportImport.m
//  KegCop
//
//  Created by Chris on 10/13/15.
//
//

#import "ViewControllerDBExportImport.h"


@interface ViewControllerDBExportImport ()

@property (nonatomic, retain) UINavigationBar *navBar;
@property(nonatomic, retain) UIButton *import;
@property(nonatomic, retain) UIButton *exportBtn;

@property (strong, nonatomic) NSManagedObjectContext *context;

@end

@implementation ViewControllerDBExportImport

- (void)addUIElements {
    // need to add a title bar with a "done" button to dismiss the scene
    
    _navBar = [[UINavigationBar alloc] init];
    // the below line allows the _navBar to work with both iPhone and iPad.
    [_navBar setFrame:CGRectMake(0,0,CGRectGetWidth([[UIScreen mainScreen]bounds]),60)];
    
    UINavigationItem *titleItem = [[UINavigationItem alloc] initWithTitle:@"Export User Accounts"];
    
    //_navBar.items = @[titleItem];
    
    _navBar.barTintColor = [UIColor colorWithRed:100.0f/255.0f
                                           green:83.0f/255.0f
                                            blue:0.0f/255.0f
                                           alpha:1.0f];
    _navBar.titleTextAttributes = @{NSForegroundColorAttributeName: [UIColor colorWithRed:255.0f/255.0f
                                                                                    green:239.0f/255.0f
                                                                                     blue:160.0f/255.0f
                                                                                    alpha:1.0f]};
    _navBar.translucent = NO;
    
    
    // Done btn
    UIBarButtonItem *doneBtn = [[UIBarButtonItem alloc] initWithTitle:@"Done"
                                                                style:UIBarButtonItemStyleDone
                                                               target:self
                                                               action:@selector(dismissScene)];
    UINavigationItem *item = [[UINavigationItem alloc] initWithTitle:@"Export Users"];
    item.leftBarButtonItem = doneBtn;
    item.hidesBackButton = YES;
    
    _navBar.items = @[titleItem,item];
    
    [self.view addSubview:_navBar];
    
    // add import btn
    _import = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    [_import addTarget:self
                      action:@selector(importUsers)
            forControlEvents:UIControlEventTouchUpInside];
    [_import setTitle:@"Import Users"  forState:UIControlStateNormal ];
    _import.frame = CGRectMake(10, 500.0, 130.0, 60.0); // x, y, width, height
    
    [_import setBackgroundColor: [UIColor colorWithRed:(221/255.0)
                                                       green:(183/255.0)
                                                        blue:(0/255.0)
                                                       alpha:(1.0f)]];
    
    [_import setTitleColor:[UIColor colorWithRed:255/255.0
                                                 green:239/255.0
                                                  blue:160/255.0
                                                 alpha:1.0f] forState:UIControlStateNormal];
    
    // turn off AutoLayout for signInButton
    [_import setTranslatesAutoresizingMaskIntoConstraints:NO];
    // round corners of signInButton
    _import.layer.cornerRadius = 5;
//    [self.view addSubview:_import];
    
    
    // add export btn
    _exportBtn = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    [_exportBtn addTarget:self
                action:@selector(exportUsers)
      forControlEvents:UIControlEventTouchUpInside];
    [_exportBtn setTitle:@"Export Users"  forState:UIControlStateNormal ];
    _exportBtn.frame = CGRectMake(10, 500.0, 130.0, 60.0); // x, y, width, height
    
    [_exportBtn setBackgroundColor: [UIColor colorWithRed:(221/255.0)
                                                 green:(183/255.0)
                                                  blue:(0/255.0)
                                                 alpha:(1.0f)]];
    
    [_exportBtn setTitleColor:[UIColor colorWithRed:255/255.0
                                           green:239/255.0
                                            blue:160/255.0
                                           alpha:1.0f] forState:UIControlStateNormal];
    
    // turn off AutoLayout for signInButton
    [_exportBtn setTranslatesAutoresizingMaskIntoConstraints:NO];
    // round corners of signInButton
    _exportBtn.layer.cornerRadius = 5;
    [self.view addSubview:_exportBtn];
}

- (void)addConstraintsToUIElements {
    
    // add constraints for import btn, bottom / left
    NSLayoutConstraint *pullImportToBottom = [NSLayoutConstraint constraintWithItem:_import attribute:NSLayoutAttributeBottom relatedBy:NSLayoutRelationEqual toItem:self.view attribute:NSLayoutAttributeBottom multiplier:1.0 constant:-15.0];
    
    NSLayoutConstraint *pullImporttToLeft = [NSLayoutConstraint constraintWithItem:_import attribute:NSLayoutAttributeLeft relatedBy:NSLayoutRelationEqual toItem:self.view attribute:NSLayoutAttributeLeft multiplier:1.0 constant:15.0];
    
    [_import addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"H:[_import(==130)]" options:0 metrics:nil views:NSDictionaryOfVariableBindings(_import)]];
    
    [_import addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"V:[_import(==60)]" options:0 metrics:nil views:NSDictionaryOfVariableBindings(_import)]];
    
    [_import.superview addConstraints:@[pullImportToBottom, pullImporttToLeft]];
    
    // add constraints for export btn, bottom / right
    NSLayoutConstraint *pullExportToBottom = [NSLayoutConstraint constraintWithItem:_exportBtn attribute:NSLayoutAttributeBottom relatedBy:NSLayoutRelationEqual toItem:self.view attribute:NSLayoutAttributeBottom multiplier:1.0 constant:-15.0];
    
    NSLayoutConstraint *pullExportToRight = [NSLayoutConstraint constraintWithItem:_exportBtn attribute:NSLayoutAttributeRight relatedBy:NSLayoutRelationEqual toItem:self.view attribute:NSLayoutAttributeRight multiplier:1.0 constant:-15.0];
    
    [_exportBtn addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"H:[_exportBtn(==130)]" options:0 metrics:nil views:NSDictionaryOfVariableBindings(_exportBtn)]];
    
    [_exportBtn addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"V:[_exportBtn(==60)]" options:0 metrics:nil views:NSDictionaryOfVariableBindings(_exportBtn)]];
    
    [_exportBtn.superview addConstraints:@[pullExportToBottom, pullExportToRight]];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    _context = [[AccountsDataModel sharedDataModel]mainContext];
#ifdef DEBUG
    NSLog(@"context is %@",_context);
#endif

    [self addUIElements];
    [self addConstraintsToUIElements];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)dismissScene {
    [self dismissViewControllerAnimated:YES completion:nil];
}

- (void)importUsers {
    // leave empty because import func moved to VCAbout, this method will suppress the "warning" in the btn creation above.
}

- (void)exportUsers {
#ifdef DEBUG
    NSLog(@"exportUsers method reached");
#endif
    
    // get a password
    NSString *idfv = [SSKeychain passwordForService:@"com.chrisrjones.KegCop.idfv" account:@"com.chrisrjones.KegCop"];
    
    NSLog(@"uniqueIDFV = %@",idfv);
    
    NSString *documents = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0];
    
    // write array to CSV file
    CHCSVWriter *csvWriter=[[CHCSVWriter alloc]initForWritingToCSVFile:[documents stringByAppendingPathComponent:[NSString stringWithFormat:@"KegCop-users-%@.csv",idfv]]];
    
    NSFetchRequest *request = [[NSFetchRequest alloc] init];
    [request setEntity:[NSEntityDescription entityForName:@"Account" inManagedObjectContext:_context]];
    NSError *error = nil;
    
    NSArray *objectsForExport = [_context executeFetchRequest:request error:&error];
    NSArray *exportKeys = [NSArray arrayWithObjects:@"username", @"pin", @"credit", @"email", @"lastLogin", @"rfid", @"phoneNumber", nil];
    
    for (NSManagedObject *object in objectsForExport) {
        NSMutableArray *csvObjects = [NSMutableArray arrayWithCapacity:[objectsForExport count]];

//        NSMutableArray *anObjectArray = [NSMutableArray arrayWithCapacity:[exportKeys count]];
        for (NSString *key in exportKeys) {
            id value = [object valueForKey:key];
            if (!value) {
                value = @"";
            }
            [csvObjects addObject:[value description]];
        }
//        [csvObjects addObject:anObjectArray];
        [csvWriter writeLineOfFields:csvObjects];
        [csvWriter finishLine];
    }
#ifdef DEBUG
//    NSLog(@"The output:%@",csvObjects);
#endif
    
    [csvWriter closeStream];
    
    [self uploadCSV];
}

- (void) uploadCSV {
#ifdef DEBUG
    NSLog(@"inside uploadCSV method");
#endif
    NSString *idfv = [SSKeychain passwordForService:@"com.chrisrjones.KegCop.idfv" account:@"com.chrisrjones.KegCop"];
    
    NSString *documents = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0];
    
    // the below string will include the entire path, not just the file name
    NSString *filename = [documents stringByAppendingPathComponent:[NSString stringWithFormat:@"KegCop-users-%@.csv",idfv]];
    
    NSURL *url;
#ifdef DEBUG
    // want to use this variable on DEBUG build
    url = [NSURL URLWithString:@"http://localhost:3000/api/"];
#else
    // want to use this variable on RELEASE build
    url = [NSURL URLWithString:@"http://kegcop.chrisrjones.com/api/"];
#endif
    
    // begin uploading CSV file using AFNetworking
    AFHTTPClient *httpClient = [[AFHTTPClient alloc] initWithBaseURL:url];
    
    NSData *data = [NSData dataWithContentsOfFile:filename];
    
    NSMutableURLRequest *request = [httpClient multipartFormRequestWithMethod:@"POST" path:@"csv_files" parameters:nil constructingBodyWithBlock: ^(id <AFMultipartFormData>formData) {
        [formData appendPartWithFileData:data name:[NSString stringWithFormat:@"csv_file"] fileName:[NSString stringWithFormat:@"KegCop-users-%@.csv",idfv] mimeType:@"application/octet-stream"];
    }];
    
    AFHTTPRequestOperation *operation = [[AFHTTPRequestOperation alloc] initWithRequest:request];
    
    [operation setUploadProgressBlock:^(NSUInteger bytesWritten, long long totalBytesWritten, long long totalBytesExpectedToWrite) {
        NSLog(@"Sent %lld of %lld bytes", totalBytesWritten, totalBytesExpectedToWrite);
    }];
    [httpClient enqueueHTTPRequestOperation:operation];
}

#pragma mark - delegate methods for CHCSVParser
-(void) parserDidBeginDocument:(CHCSVParser *)parser {

}

-(void) parserDidEndDocument:(CHCSVParser *)parser {
    
}

- (void) parser:(CHCSVParser *)parser didFailWithError:(NSError *)error {
    
}

-(void)parser:(CHCSVParser *)parser didBeginLine:(NSUInteger)recordNumber {
    
}

-(void)parser:(CHCSVParser *)parser didReadField:(NSString *)field atIndex:(NSInteger)fieldIndex {
    
}

- (void) parser:(CHCSVParser *)parser didEndLine:(NSUInteger)lineNumber {
    
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end