import { StyleSheet, Text, View, NativeModules, ScrollView, Image, Dimensions } from 'react-native'
import React, { useEffect,useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import PlayerScreenHeader from "../Components/playerScreenHeader";
import DetailsAndControls from '../Components/detailsAndControls';
import { playerColors } from '../playerTheme';
import TrackPlayer from 'react-native-track-player';

const { StatusBarManager } = NativeModules;
const SW = Dimensions.get('window').width
const SH = Dimensions.get('window').height

const MainPlayerMode = ({ track }) => {

    // const [firstTimeTrack,setFirstTimeTrack] = useState({})

    //Then main player is setup in the spotifyPlayerComponent yeh first time track get krnay k liye because yeh aik aledha screen mae laga hai
    // useEffect(() => {
    //     if(track === undefined){
    //         const run = async () => {
    //             const trackIndex = await TrackPlayer.getCurrentTrack();
    //             const trackObj = await TrackPlayer.getTrack(trackIndex);
    //             setFirstTimeTrack(trackObj)
    //             // console.log(track,'tracktracktracktracktracktrack')
    //         }
    //         run();
    //     }
    // }, []);

    return (
        <View style={[styles.mainContainer]}>
            <View style={{ ...StyleSheet.absoluteFillObject }}>
                <LinearGradient colors={['#646464', '#121212']} style={{ flex: 1 }} />
            </View>

            <View style={{ ...StyleSheet.absoluteFillObject }}>
                <View style={{ height: StatusBarManager.HEIGHT }} />

                <View style={{ width: '86%', alignSelf: 'center', flex: 1 }}>
                    <PlayerScreenHeader />


                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={[styles.artWorkView, { marginVertical: 50 }]}>
                            <Image style={styles.artWorkView} source={{ uri:track?.artwork }} />
                        </View>

                        <DetailsAndControls 
                        title={track?.title}
                         artist={track?.artist}
                          />

                        <View style={{ height: 50 }} />

                    </ScrollView>

                </View>
            </View>

        </View>
    )
}

export default MainPlayerMode

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    artWorkView: {
        width: '100%',
        height: 364,
    },
    lyricsView: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        backgroundColor: playerColors.greenPrimary
    }
})