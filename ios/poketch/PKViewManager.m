//
//  PKViewManager.m
//  poketch
//
//  Created by berwyn on 11/05/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//


#import "RCTViewManager.h"
#import "PKBlurView.h"

@interface PKBlurViewManager : RCTViewManager
@end

@implementation PKBlurViewManager

RCT_EXPORT_MODULE()

-(UIView*)view
{
  return [[PKBlurView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(blurType, NSString);
RCT_EXPORT_VIEW_PROPERTY(tintColor, NSNumber);

@end
