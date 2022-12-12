/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from "./App";
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import { PlaybackService } from './src/Components/SpotifyAudioPlayer/Services/index';


AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
