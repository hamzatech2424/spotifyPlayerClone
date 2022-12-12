import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import { playerColors } from '../playerTheme'
import ScreenCastSvg from '../PlayerSvgs/screenCastSvg'
import { PlayPauseButtonBottomMode } from '../Components/playPauseButtonBottomMode'
import { TrackProgressBar } from '../Components/trackProgressBar'
import SpotifyBottomModeTrackProgress from '../Components/spotifyBottomModeTrackProgress'
import { navigate } from '../../../mainNavigation'
import HeartShaking from '../Components/heartShaking'

const BottomBarMode = ({ track,isPlayerReady,onPress }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={[styles.mainContainer, { justifyContent: isPlayerReady ? "center" : "flex-end" }]}>

            {!isPlayerReady
                ?
                <View>
                    {/* <ActivityIndicator color={playerColors.greenPrimary} size={'small'} /> */}
                </View>
                :
                <View style={styles.viewOne}>

                    <View style={styles.viewOneA}>

                        <View style={styles.viewTwoA}>
                            <View style={styles.avatarView}>
                                <Image style={styles.avatarView} source={{ uri: track?.artwork }} />
                            </View>

                            <View style={{ paddingLeft: 12 }}>
                                <View>
                                    <Text style={styles.textOne}>{track?.title}</Text>
                                </View>
                                <View>
                                    <Text style={styles.textTwo}>{track?.artist}</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewTwoB}>

                            <TouchableOpacity
                                activeOpacity={0.9}
                            >
                                <ScreenCastSvg />
                            </TouchableOpacity>

                            <HeartShaking />
                            <PlayPauseButtonBottomMode />
                            
                        </View>
                    </View>


                    {/* <TrackProgressBar live={track?.isLiveStream} /> */}


                    {/* trackLoading */}
                    <View style={styles.viewOneB}>
                        <SpotifyBottomModeTrackProgress live={track?.isLiveStream} />
                    </View>


                </View>
            }
        </TouchableOpacity>
    )
}

export default BottomBarMode

const styles = StyleSheet.create({
    mainContainer: {
        width: "95%",
        height: 60,
        borderRadius: 6,
        backgroundColor: playerColors.greyPrimary,
        position: "absolute",
        bottom: 30,
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "flex-end"
    },
    viewOne: {
        width: '95%',
        height: '90%',
        // backgroundColor: 'red'
    },
    viewOneA: {
        width: '100%',
        height: "90%",
        // backgroundColor:'pink',
        flexDirection: "row"
    },
    viewOneB: {
        width: '100%',
        height: "10%",
        // backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        // alignItems:'center'
    },
    viewTwoA: {
        width: '67%',
        height: "100%",
        // backgroundColor: 'pink',
        flexDirection: "row",
        alignItems: 'center'
    },
    viewTwoB: {
        width: '33%',
        height: "100%",
        // backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 8
    },
    avatarView: {
        width: 44,
        height: 44,
        backgroundColor: "grey",
        borderRadius: 5
    },
    textOne: {
        fontSize: 11,
        fontWeight: "700",
        color: playerColors.whitePrimary
    },
    textTwo: {
        fontSize: 11,
        fontWeight: "400",
        color: playerColors.whitePrimary
    }
})