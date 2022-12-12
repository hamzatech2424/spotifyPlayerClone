import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeartShaking from './heartShaking'
import { playerColors } from '../playerTheme'
import { TrackProgressBar } from './trackProgressBar'
import SquareButton from './squareButton'
import ShuffleSvg from "../PlayerSvgs/shuffleSvg"
import RepeatSvg from "../PlayerSvgs/repeatSvg"
import ScreenCastSvg from "../PlayerSvgs/screenCastSvg"
import ShareSvg from "../PlayerSvgs/shareSvg"
import { PlayPauseButtonMainPlayer } from './playPauseButtonMainPlayer'

const DetailsAndControls = ({ title, artist }) => {

    const defaultTile = title ? title : "text"
    const defaultArtist = artist ? artist : "text"

    return (
        <View>

            <View style={styles.viewOne}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.textOne}>{defaultTile}</Text>
                    <Text style={styles.textTwo}>{defaultArtist}</Text>
                </View>
                <View style={{paddingRight:5}}>
                    <HeartShaking />
                </View>
            </View>

            <View>
                <TrackProgressBar />
            </View>


            <View style={[styles.viewTwo,{marginTop:20}]}>

                <View style={styles.viewTwoA} >
                <SquareButton svg={()=><ShuffleSvg />} />
                </View>

                <View style={styles.viewTwoB} >
                    <PlayPauseButtonMainPlayer />
                </View>

                <View style={styles.viewTwoC} >
                <SquareButton svg={()=><RepeatSvg />} />
                </View>

            </View>

            <View style={{marginTop:5,flexDirection:'row',justifyContent:'space-between'}}>
                <SquareButton svg={()=><ScreenCastSvg color={"white"} size={21} />} />
                <SquareButton svg={()=><ShareSvg />} />
            </View>
        </View>
    )
}

export default DetailsAndControls

const styles = StyleSheet.create({
    viewOne: {
        width: '100%',
        height: 40,
        // backgroundColor:'red',
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 20
    },
    textOne: {
        fontWeight: '700',
        fontSize: 17,
        color: playerColors.whitePrimary
    },
    textTwo: {
        fontWeight: '400',
        fontSize: 14,
        color: playerColors.whitePrimary,
        lineHeight: 30
    },
    viewTwo: {
        width: "100%",
        // backgroundColor:'red',
        flexDirection: "row",
        height:70,
        alignItems:'center'
    },
    viewTwoA: {
        width: "10%",
        // backgroundColor: 'red',
    },
    viewTwoB: {
        width: "80%",
        // backgroundColor: 'pink',
    },
    viewTwoC: {
        width: "10%",
        // backgroundColor: 'red',
    },
})