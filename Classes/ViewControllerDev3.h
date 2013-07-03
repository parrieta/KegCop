//
//  ViewControllerDev3.h
//  KegCop
//
//  Created by capin on 7/2/13.
//
//

#import <UIKit/UIKit.h>
#import "JailbrokenSerial.h"
#import "KBKegboardCommand.h"
#import "KBKegProcessing.h"

@interface ViewControllerDev3 : UIViewController <JailbrokenSerialDelegate> {
    
    
    JailbrokenSerial *jbserial;
    
    KBKegProcessing *kegProcessing;
    
    
}

@property (weak, nonatomic) IBOutlet UIBarButtonItem *btnDone;
@property (weak, nonatomic) IBOutlet UIButton *btnJBSerialOpen;
@property (weak, nonatomic) IBOutlet UIButton *btnJBSerialClose;
@property (weak, nonatomic) IBOutlet UIButton *btnKBSerialOpen;
@property (weak, nonatomic) IBOutlet UIButton *btnKBSerialClose;

@property (weak, nonatomic) IBOutlet UIButton *btnOpenValveKBCommand;
@property (weak, nonatomic) IBOutlet UIButton *btnOpenValveRawHex;
@property (weak, nonatomic) IBOutlet UIButton *btnOpenValveKBProcessing;



- (IBAction)dismissScene:(id)sender;

- (IBAction)jbSerialOpen:(id)sender;

- (IBAction)jbSerialClose:(id)sender;

- (IBAction)kbSerialOpen:(id)sender;

- (IBAction)kbSerialClose:(id)sender;

- (IBAction)openValveKBCommand:(id)sender;

- (IBAction)openValveRawHex:(id)sender;

- (IBAction)openValveKBProcessing:(id)sender;
@end
