//
//  PKBlurView.h
//  poketch
//
//  Created by berwyn on 11/05/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#ifndef PKBlurView_h
#define PKBlurView_h

#import <UIKit/UIKit.h>

@interface PKBlurView: UIView

@property (nonatomic, copy) NSString* blurType;
@property (nonatomic, copy) NSNumber* tintColor;

@end

#endif /* PKBlurView_h */
