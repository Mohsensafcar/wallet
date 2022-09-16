import React from 'react';
import { Dimensions } from 'react-native';
import { BottomSheetScrollView as DefaultSheetScrollView } from '@gorhom/bottom-sheet';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { 
  BottomSheetScrollViewProps, 
  BottomSheetScrollViewMethods 
} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types';
import { isAndroid, statusBarHeight } from '../../../../../utils';
import { useSheetInternal } from './SheetsProvider';

const screenHeight = Dimensions.get('window').height;

export type SheetScrollViewProps = BottomSheetScrollViewProps;
export type SheetScrollViewRef = BottomSheetScrollViewMethods;

export const SheetScrollView = React.forwardRef<
  SheetScrollViewRef, 
  SheetScrollViewProps
>((props, ref) => {
  const { children, ...rest } = props;
  const { measureContent, contentHeight, footerHeight } = useSheetInternal();
  const safeArea = useSafeAreaInsets();

  const containerStyle = useAnimatedStyle(() => {
    const topOffset = isAndroid ? statusBarHeight : safeArea.top;
    const maxHeight = (screenHeight - topOffset) - footerHeight.value;

    return { height: Math.min(contentHeight.value, maxHeight) };
  });
  
  return (
    <Animated.View style={containerStyle}>
      <DefaultSheetScrollView ref={ref} {...rest}> 
        <Animated.View onLayout={measureContent}>
          {children}
        </Animated.View>
      </DefaultSheetScrollView>
    </Animated.View>
  );
});
