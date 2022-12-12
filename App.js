import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SpotifyMusicPlayer from './src/Components/SpotifyAudioPlayer/index'

const App = () => {
  return (
    <View style={styles.mainContainer}>
       <SpotifyMusicPlayer />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  }
})