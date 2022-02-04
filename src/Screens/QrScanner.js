import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Rect } from 'react-native-svg';
import React from 'react';
import {View,  Text,  StyleSheet, modal} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {onReadSuccess, QrDataSave, ModalToggle} from  '../redux/actions/QrActions' 
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
 
   const QRCodeScannerScreen = () => { 

    const dispatch = useDispatch()

    const nav = useNavigation();

    const state = useSelector(state => state.QrScannerReducer );

    // console.log(state.qrData)

    const onSuccess = e => {
      dispatch(onReadSuccess(e.data))
      // setTimeout(() => {
        // console.log("state", state)
        nav.navigate("QrDataScreen");
      // }, 1000)
      };



      // Scanner screen styling and content, currently a placeholder

    const topContent = () => {
      state.qrCodeStatus == "success" ?  
      (<Text>{state.qrCodeStatus}</Text>) :
            <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
          
      }

    
        return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 10 }}>
     <QRCodeScanner
        reactivate={true}
        reactivateTimeout={2000}
        onRead={onSuccess}
        showMarker={true}
        topContent={topContent()} />
          </View>
          
        );
      }


    export default QRCodeScannerScreen;


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


      // axios({
      //   method: 'post',
      //   url: "http://34.239.113.17:3000/saveQrData/",
      //   data:{
      //     qrData: e.data,
      //     qrStatus: "Success",
      //     qrHeight: e.bounds.height,
      //     qrWidth: e.bounds.width
      //   }
      // })
      // .then(() => {
      //   dispatch(QrDataSave("Data Saved Successfully"))
      //   dispatch(ModalToggle())
      //   nav.navigate("QrDataScreen")
      // })
      // .catch(err => {
      //   console.log("error")
      //   dispatch(QrDataSave("Failed to save data " + err))
      // })