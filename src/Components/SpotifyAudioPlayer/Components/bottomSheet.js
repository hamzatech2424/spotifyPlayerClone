import React, { useEffect, useRef, useState } from 'react';
import ActionSheet, {
  useScrollHandlers,
  ActionSheetRef,
  SheetProps,
} from 'react-native-actions-sheet';
import { View } from 'react-native'

const CustomHeaderComponent = () => {
  return (
    <View />
  )
}


const BottomSheet = ({ id, children,gestureEnabled }) => {

  const defaultGestureEnabled = gestureEnabled ? gestureEnabled : false

  return (
    <ActionSheet
      id={id}
      // containerStyle={{borderTopRightRadius:20,borderTopLeftRadius:20}}
      initialOffsetFromBottom={1}
      statusBarTranslucent={true}
      bounceOnOpen={false}
      bounciness={10}
      gestureEnabled={defaultGestureEnabled}
      keyboardShouldPersistTaps="always"
      overlayColor={'grey'}
      defaultOverlayOpacity={0.4}
      CustomHeaderComponent={<CustomHeaderComponent />}
    >
        {children}
    </ActionSheet>
  )
};
export default BottomSheet;
