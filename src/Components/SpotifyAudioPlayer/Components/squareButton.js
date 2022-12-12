import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SquareButton = ({ svg, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={styles.mainContainer}
        >
            {svg ? svg() : false}
        </TouchableOpacity>
    )
}

export default SquareButton

const styles = StyleSheet.create({
    mainContainer: {
        padding: 5
    }
})