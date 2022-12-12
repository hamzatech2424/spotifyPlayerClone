import { StyleSheet,Animated, Easing,TouchableOpacity } from 'react-native'
import React, { useRef,useState } from 'react'
import HeartSvg from '../PlayerSvgs/heartSvg'

const HeartShaking = () => {

    const [liked, setLiked] = useState(false)
    const heartValue = useRef(new Animated.Value(0)).current

    const rotateTransformInterpolated = heartValue.interpolate({
        inputRange: [0, 5, 10, 15, 20, 25, 30, 35, 40],
        outputRange: ["0deg", "20deg", "40deg", "20deg", "0deg", "-20deg", "-40deg", "-20deg", "0deg"],
        extrapolate: "clamp"
    })

    const onPressHeart = () => {
        heartValue.setValue(0)
        Animated.timing(heartValue, {
            toValue: 40,
            duration: 300,
            // friction: 8,
            // tension:20,
            easing: Easing.linear,
            useNativeDriver: true
        }).start()
        setLiked((prev) => !prev)
    }

    return (
        <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPressHeart}
    >
        <Animated.View
            style={{ transform: [{ rotate: rotateTransformInterpolated }] }}
        >
            <HeartSvg liked={liked} />
        </Animated.View>

    </TouchableOpacity>
    )
}

export default HeartShaking

const styles = StyleSheet.create({})