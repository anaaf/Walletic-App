/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/Screens/QrGeneration';
import Scanner from './src/Screens/QrScanner'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Scanner); 
