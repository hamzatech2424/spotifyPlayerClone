// import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import {Slider} from '@miblanchard/react-native-slider';

const SpotifyBottomModeTrackProgress = () => {
    const progress = useProgress();

 
  return (
    <View>
   <Slider
        containerStyle={styles.container}
        value={progress.position}
        minimumValue={0}
        maximumValue={progress.duration}
        // thumbTintColor="#FFD479"
        thumbTouchSize={{height:0,width:0}}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="rgba(255,255,255,0.2)"
        onSlidingComplete={TrackPlayer.seekTo}
        renderThumbComponent={()=><View/>}
        trackClickable={false}
      />
    </View>
  )
}

export default SpotifyBottomModeTrackProgress

const styles = StyleSheet.create({
    container: {
        height:3,
        width: "100%",
        position:'absolute',
        bottom:-2
      },
})
