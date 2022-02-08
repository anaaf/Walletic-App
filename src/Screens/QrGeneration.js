
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

import Share from 'react-native-share';
import QRCode from 'react-native-qrcode-svg';
import {useSelector, useDispatch} from 'react-redux';



const App = () => {

  Share.open(options)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err && console.log(err);
  });
 
 const qrDataState = useSelector(state => state.QRCodeGenerationReducer.orderDetails)

 console.log(qrDataState)

 const qrData = JSON.stringify(JSON.stringify(qrDataState)) 
    
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 10 }}>
          <View style={{...styles.qrCodeStyle, ...styles.header}}> 
            <Text style={styles.sectionTitle}>Scan QRCode and Pay</Text> 
          </View>
          <View style = {styles.qrCodeStyle}>
            <QRCode 
            value= {qrData}
            size={300}
            />
          </View>
      

      </View>
      
    );
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
