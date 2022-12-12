import { SafeAreaView, StyleSheet, Text, View, StatusBar, Dimensions, ScrollView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomBarMode from './BottomBarMode'
import { QueueInitialTracksService, SetupService } from './Services'
import TrackPlayer from 'react-native-track-player'
import { useCurrentTrack } from './Hooks'
import BottomSheet from './Components/bottomSheet'
import MainPlayerMode from './MainPlayerMode'
import { SheetManager } from 'react-native-actions-sheet'

const BOTTOM_SHEET_ONE = "bottomSheetOne"
const SW = Dimensions.get('window').width
const SH = Dimensions.get('window').height

const SpotifyMusicPlayer = () => {

    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const track = useCurrentTrack();

    useEffect(() => {
        const run = async () => {
            const isSetup = await SetupService();
            setIsPlayerReady(isSetup);

            const queue = await TrackPlayer.getQueue();
            if (isSetup && queue.length <= 0) {
                await QueueInitialTracksService();
            }
        }
        run();
    }, []);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'lightgrey' }}>
            <StatusBar barStyle={"light-content"} translucent={true} backgroundColor={Platform.OS == "android" ? "#646464" : 'transparent'} />

            <BottomBarMode track={track} isPlayerReady={isPlayerReady} onPress={() => SheetManager.show(BOTTOM_SHEET_ONE)} />

            <BottomSheet id={BOTTOM_SHEET_ONE}
            >
                <View style={{ height: SH, width: SW }}>
                    <MainPlayerMode track={track} />
                </View>
            </BottomSheet>

        </SafeAreaView>
    )
}

export default SpotifyMusicPlayer

const styles = StyleSheet.create({})