import React from 'react';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity } from 'react-native';
import { State, usePlaybackState } from 'react-native-track-player';
import { useOnTogglePlayback } from '../Hooks/index';
import { useDebouncedValue } from '../Hooks/index';
import PauseSvg from '../PlayerSvgs/pauseSvg';
import PlaySvg from '../PlayerSvgs/playSvg';

import { Button } from './Button';

export const PlayPauseButtonBottomMode = () => {
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
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onTogglePlayback}
        >
            {isPlaying ?
                <PauseSvg />
                :
                <PlaySvg />
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    playPause: {
        width: 120,
        textAlign: 'center',
    },
    statusContainer: {
        height: 40,
        width: 120,
        marginTop: 20,
        marginBottom: 60,
    },
});