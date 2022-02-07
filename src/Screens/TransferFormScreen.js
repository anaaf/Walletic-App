import React from "react";
import { View, Text,StyleSheet,TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, Image } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-ionicons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import color from "../colors/colors";
import LottieView from 'lottie-react-native';



const TransferFormScreen=(props)=>{
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
            <TouchableOpacity style={{padding:20}} onPress={()=>props.navigation.goBack(null)}>
                        <Icon color='#333' name='arrow-back'  size={RFValue(30, 580)} color="white" style={styles.icon} />                
                    </TouchableOpacity>
                    <Image source={require('../images/logo1.png')} style={styles.logo} />
            </View>


            <View style={styles.formContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.inputLabel}>Recever Contact</Text>
            <View style={styles.inputView}>
                               
                            <TextInput
                                style={styles.input}
                                placeholder='03XX-XXXXXXX'
                                textContentType='password'
                                keyboardType='numeric'
                            />
                             <TouchableOpacity 
                                        style={styles.contactButton}
                                         onPress={()=>{
                                       
                                    }}>
                                        

                                      <Icon name='contact' type='font-awesome-5' size={RFValue(40, 580)} color="white"/>
                                       

                                  </TouchableOpacity>
                            </View>
                      
                     
                            <Text style={styles.inputLabel}>Amount</Text>
                            <View style={styles.inputView}>
                            <TextInput
                                style={styles.input}
                               
                                placeholder='Enter Amount in PKR'
                                keyboardType='numeric'
                               
                               
                            />
                            
               </View>
               <Text style={styles.inputLabel}>Purpose</Text>
               <View style={styles.purposeInput}>
                            <TextInput
                                style={styles.input}
                                secureTextEntry={true}
                                placeholder=' Sending purpose..'
                                multiline={true}
                            />
                            
               </View>
                       
                         <TouchableOpacity style={styles.sendButton}>
                            <Text style={styles.sendText}>Send</Text>
                        </TouchableOpacity>
             </ScrollView>           
            </View>
        
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:4,
       backgroundColor: color.primary,
       
       
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
    formContainer:{
        flex:3,
      //  marginHorizontal: 20,
     // marginVertical:30,
       backgroundColor: 'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent: 'center',
       paddingVertical:20,
      
      
      
     
    },
    headerText:{
      fontSize: RFValue(20, 580),
      fontWeight:'bold',
      color: '#8F490F',
      textAlign: 'center',
    },

  
    
    inputView:{
        width: '90%',
        height: RFValue(45, 580),
        flexDirection: 'row',
        justifyContent: 'space-between',
      // justifyContent: 'flex-start',
        marginTop: 10,
        backgroundColor: 'white',
        marginHorizontal:20,
        borderWidth:1,
        borderColor: color.primary,
        borderRadius: 4,
       
    },
    inputLabel: {
        fontSize: RFValue(16, 580),
        marginTop: 6,
        marginHorizontal:20,
        fontWeight: 'bold',
        color: 'black'
    },
    input: {
        fontSize:RFValue(18, 580),
        height: RFValue(45, 580),
        paddingHorizontal: 20,

    },
   
    contactButton:{
        justifyContent: 'center',
         alignItems: 'center',
         paddingHorizontal:10,
         backgroundColor: '#EF862F',  
         height: '100%',
    },
    purposeInput:{
        width: '90%',
      
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth:1,
        borderColor: color.primary,
        marginTop: 10,
        backgroundColor: '#E1E1F5',
        marginHorizontal:20,
        paddingBottom:50,
        marginBottom:30,
       // marginVertical:30,
       // height:'30%',
      
       
        borderRadius: 4,

    },
    logo: {
        width: '80%',
        height: '70%',
      },
  
    sendButton: {
        height: RFValue(45, 580),
        backgroundColor: 'green',
        marginTop: 20,

        marginHorizontal:20,
       
        paddingVertical: 10,
       
        borderRadius: 5,
    },
    sendText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
})
export default TransferFormScreen;