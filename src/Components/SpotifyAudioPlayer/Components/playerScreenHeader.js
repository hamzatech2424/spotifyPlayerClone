import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { playerColors } from '../playerTheme'
import { goBack } from '../../../mainNavigation'
import HideSvg from '../PlayerSvgs/hideSvg'
import OptionsSvg from '../PlayerSvgs/optionsSvg'
import { SheetManager } from 'react-native-actions-sheet'

const PlayerScreenHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        // onPress={() => goBack()}
        onPress={() => SheetManager.hideAll()}
        style={styles.viewOne}>
        <HideSvg />
      </TouchableOpacity>

      <View style={styles.viewTwo}>
        <Text style={styles.textOne}>PLAYING FROM YOUR LIBRARY</Text>
        <Text style={styles.textTwo}>Liked Songs</Text>

      </View>

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.viewThree}>
       <OptionsSvg />
      </TouchableOpacity>

    </View>
  )
}

export default PlayerScreenHeader

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: 40,
    // backgroundColor: 'red',
    flexDirection: 'row'
  },
  viewOne: {
    width: '10%',
    height: '100%',
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: "flex-start",
  },
  viewTwo: {
    width: '80%',
    height: '100%',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewThree: {
    width: '10%',
    height: '100%',
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: "flex-end"
  },
  textOne: {
    fontWeight: '400',
    fontSize: 11,
    color: playerColors.whitePrimary
  },
  textTwo: {
    fontWeight: '700',
    fontSize: 11,
    color: playerColors.whitePrimary
  }
})