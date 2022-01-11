import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Rect } from 'react-native-svg';
import React from 'react';
import {View,  Text,  StyleSheet} from 'react-native'
 
export default class QRCodeScannerComp extends React.Component {

    constructor(props) {
        super(props)
        this.topContent = this.topContent.bind(this)
       this.state = {
           isQrCode: false,
           qrData: "",
       }
    }

    onSuccess = e => {
        this.setState({
            isQrCode : true,
            data: e.data
        })
        console.log(e.data)
      };

      topContent() {
        if(this.state.isQrCode) return (<Text>{this.state.qrData}</Text>) 
        else 
        return (
            <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
          )
      }

    render() {

    
        return (
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 10 }}>
     <QRCodeScanner
        onRead={this.onSuccess}
        showMarker={true}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={this.topContent()} />
        
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