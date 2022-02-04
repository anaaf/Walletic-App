
import {View,  Text,  StyleSheet, Dimensions, Button, Modal, Pressable} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {onReadSuccess, ModalToggle} from  '../redux/actions/QrActions' 
import React from 'react';

const QrDataScreen = () => {

    const dispatch = useDispatch();

    // const qrScannerState = useSelector(state => state.QrScannerReducer)

    const qrDataState  = useSelector(state => state.QrScannerReducer.qrData)

    const data = JSON.parse(JSON.parse(qrDataState));

    return (
        <View style = {styles.main}>
            <View style= {styles.details}>
                <Text> Order Id:  {data.orderID}</Text>
                <Text> Wallet Id:  {data.walletID}</Text>
                <Text> Invoice Amount: {data.invoiceAmount}</Text>
            </View>
            <View style= {styles.btnView}>
                <Button 
                    title="Pay Now"
                />
            </View>
        </View>
    )
} 

export default QrDataScreen


const styles = StyleSheet.create({
    main: {
        alignContent: 'center',
        flex: 1,
      },
      details: {
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderColor: '#000000',
          flex: 0.5,
          marginTop: '50%',
      }, 
      btnView: {
        marginTop: '10%'
      }

})