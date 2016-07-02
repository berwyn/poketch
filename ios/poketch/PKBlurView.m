//
//  PKBlurView.m
//  poketch
//
//  Created by berwyn on 11/05/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RCTConvert.h"
#import "PKBlurView.h"

@implementation PKBlurView {
  UIVisualEffectView* _visualEffectView;
  UIColor* _tint;
}

-(void) setBlurType:(NSString*)blurType
{
  if(_visualEffectView) {
    [_visualEffectView removeFromSuperview];
  }
  
  UIBlurEffect* blurEffect;
  if([blurType isEqualToString:@"xlight"]) {
    blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleExtraLight];
  } else if([blurType isEqualToString:@"light"]) {
    blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleLight];
  } else {
    blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleDark];
  }
  
  _visualEffectView = [[UIVisualEffectView alloc] initWithEffect:blurEffect];
}

-(void) setTintColor:(NSNumber*)tintColor
{
  _tint = [RCTConvert UIColor:tintColor];
}

-(void) layoutSubviews
{
  [super layoutSubviews];
  _visualEffectView.frame = self.bounds;
  _visualEffectView.backgroundColor = [_tint colorWithAlphaComponent:0.4];
  [self insertSubview:_visualEffectView atIndex:0];
}

@end