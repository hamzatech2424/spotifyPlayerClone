import React from 'react';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import { useOnTogglePlayback } from '../Hooks/index';
import { useDebouncedValue } from '../Hooks/index';
import PauseSvg from '../PlayerSvgs/pauseSvg';
import PlaySvg from '../PlayerSvgs/playSvg';
import PreviousSvg from '../PlayerSvgs/previousSvg';
import NextSvg from '../PlayerSvgs/nextSvg';

import { Button } from './Button';
import SquareButton from './squareButton';
import { playerColors } from '../playerTheme';

export const PlayPauseButtonMainPlayer = () => {
    const state = usePlaybackState();
    const isPlaying = state === State.Playing;
    // const isLoading = useDebouncedValue(
    //     state === State.Connecting || state === State.Buffering,
    //     250
    // );

    const onTogglePlayback = useOnTogglePlayback();

    // if (isLoading) {
    //     return (
    //         <View style={styles.statusContainer}>
    //             {isLoading && <ActivityIndicator />}
    //         </View>
    //     );
    // }

    return (
        <View style={styles.mainContainer}>

            <View style={{ marginRight: 20 }}>
                <SquareButton svg={() => <PreviousSvg />}
                    onPress={() => {
                        TrackPlayer.skipToPrevious()
                            .then(() => {
                                console.log("Previous Song Plays")
                            })
                            .catch((error) => {
                                Alert.alert("No Previous Song")
                            })
                    }} />
            </View>

            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.playPauseView}
                onPress={onTogglePlayback}
            >
                {isPlaying ?
                    <View>
                        <PauseSvg color={"black"} />
                    </View>
                    :
                    <View style={{ paddingLeft: 5 }}>
                        <PlaySvg color={"black"} />
                    </View>
                }
            </TouchableOpacity>

            <View style={{ marginLeft: 20 }}>
                <SquareButton svg={() => <NextSvg />} onPress={() => {
                    TrackPlayer.skipToNext()
                    .then(() => {
                        console.log("Next Song Plays")
                    })
                    .catch((error) => {
                        Alert.alert("No Next Song")
                    })
                    }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    playPauseView: {
        width: 70,
        height: 70,
        borderRadius: 70,
        backgroundColor: playerColors.whitePrimary,
        justifyContent: 'center',
        alignItems: "center"
    }
});