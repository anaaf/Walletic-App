
import {View,  Text,  StyleSheet, Dimensions, Button, Modal, Pressable,Image, TouchableOpacity} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {onReadSuccess, ModalToggle} from  '../redux/actions/QrActions' 
import React from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Icon from "react-native-ionicons";
import color from "../colors/colors";
const QrDataScreen = (props) => {

    const dispatch = useDispatch();

    // const qrScannerState = useSelector(state => state.QrScannerReducer)

    const qrDataState  = useSelector(state => state.QrScannerReducer.qrData)

    const data = JSON.parse(JSON.parse(qrDataState));

    return (
        <View style = {styles.container}>
            <View style={styles.headerContainer}>
            <TouchableOpacity style={{padding:20}} onPress={()=>props.navigation.goBack(null)}>
                        <Icon color='#333' name='arrow-back'  size={RFValue(30, 580)} color="white" style={styles.icon} />                
                    </TouchableOpacity>
                    <Image source={require('../images/logo1.png')} style={styles.logo} />
            </View>
            <View style={styles.detailContainer}>
            <View style= {styles.details}>
                <Text style={styles.inputLabel}> Order Id</Text>
                <Text style={styles.text}>{data.orderID}</Text>
                <Text style={styles.inputLabel}> Wallet Id</Text>
                <Text  style={styles.text}>{data.walletID}</Text>
                <Text style={styles.inputLabel}>Invoice Amount</Text>
                <Text  style={styles.text}>{data.invoiceAmount}</Text>
            </View>
            <View style= {styles.btnView}>
                
            <TouchableOpacity style={styles.sendButton}>
                            <Text style={styles.sendText}>Pay Now</Text>
                        </TouchableOpacity>
            </View>
            </View>
        </View>
    )
} 

export default QrDataScreen


const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        flex: 7,
        backgroundColor: color.primary,
        
      },
      details: {
         // backgroundColor:'blue',
          alignItems: 'center',
         
          //justifyContent: 'center',
         // borderWidth: 2,
         // borderColor: '#000000',
          flex: 0.5,
          marginVertical: '10%',

      }, 
     
    headerContainer:{
        flex: 1,
        backgroundColor: color.primary,
        justifyContent: 'space-between',
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
         paddingRight:20,
      
       
       // width: '100%',
      
  

    },
    btnView:{
        marginVertical:20

    },
    detailContainer:{
        flex:5,
       borderTopEndRadius:30,
       borderTopLeftRadius:30,
      // marginHorizontal:"2%",
       backgroundColor: 'white'
      
    },
      sendButton: {
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        height: RFValue(45, 580),
        backgroundColor: 'green',
        marginVertical: 30,
        width: "80%",
      //  marginHorizontal:20,
       
        paddingVertical: 10,
       
        borderRadius: 5,

    },
    inputLabel: {
        fontSize: RFValue(14, 580),
        marginTop: 6,
        marginHorizontal:20,
        fontWeight: 'bold',
        color: 'black',marginVertical:10
    },
    text:{
        fontSize: RFValue(13, 580),
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical:10,
        paddingHorizontal:5,
        width: "80%",
        borderRadius:4,
       fontWeight: '500',
        shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    
      elevation: 5,
    
      },
      sendText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: RFValue(14, 580),
        fontWeight: 'bold',
    },
    logo: {
        width: '80%',
        height: '70%',
      },

  
})