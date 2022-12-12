import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import SpotifyMusicPlayer from '../Components/SpotifyAudioPlayer'

const MainScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <SpotifyMusicPlayer />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})