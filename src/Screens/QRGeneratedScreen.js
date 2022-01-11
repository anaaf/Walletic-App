
import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';



class App extends React.Component {
  qrData = JSON.stringify({
    orderID: "2000",
    walletID: "hsjay37",
    invoiceAmount: 1500
  }) 


  render() {

    
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 10 }}>
        <View style={{...styles.qrCodeStyle, ...styles.header}}> 
          <Text style={styles.sectionTitle}>Scan QRCode and Pay</Text> 
        </View>
        <View style = {styles.qrCodeStyle}>
          <QRCode 
          value= {JSON.stringify(this.qrData)}
          size={300}
          />
        </View>
      

      </View>


      
    );
  }
}



const styles = StyleSheet.create({

  qrCodeStyle: {
    justifyContent:'center',
    alignContent: 'center',
    flexDirection: 'row'
  }, 
  header: {
    marginVertical: '5%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
