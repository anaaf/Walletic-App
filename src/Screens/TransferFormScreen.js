import React, {useRef, useState} from "react";
import { View, Text,StyleSheet,TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, Image } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-ionicons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import color from "../colors/colors";
import LottieView from 'lottie-react-native';
import {Picker} from '@react-native-picker/picker';



const TransferFormScreen=(props)=>{
    const [purpose, setPurpose] = useState('Select');
    const pickerRef = useRef();

    function open() {
      pickerRef.current.focus();
    }
  
    function close() {
      pickerRef.current.blur();
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <View  style={styles.headerContainer}>
         
         <TouchableOpacity  onPress={()=>props.navigation.navigate("Home")}>
                       <Icon  name='arrow-back'  size={RFValue(30, 580)} color="white" style={styles.icon} />                
                   </TouchableOpacity>
                  
                   <View style={{justifyContent:'center', width:'100%'}}>
               <Text style={styles.headerText}>Transfer Details</Text>
               </View>
         </View>


            <View style={styles.formContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.inputLabel}>Receiver Account  Number</Text>
            <View style={styles.inputView}>
                               
                            <TextInput
                                style={styles.input}
                                placeholder='03XX-XXXXXXX'
                                textContentType='password'
                                autoFocus={true}
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
               <View style={styles.dropDownStyle}>
               <Picker
                ref={pickerRef}
                mode='dropdown'
                selectedValue={purpose}
                onValueChange={(itemValue, itemIndex) => setPurpose(itemValue)}>
                <Picker.Item label="Select" value="Select"  color="gray" paddingHorizontal={20}/>
                <Picker.Item label="Education" value="Education" />
                <Picker.Item label="Business" value="Business" />
                <Picker.Item label="Loan" value="Loan" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
                            
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
       
      backgroundColor: color.primary,
      justifyContent: 'space-between',
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
       paddingRight:20,
       paddingHorizontal:20,
       paddingVertical:20
    
  

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
        fontSize: RFValue(18),
       
        width:'100%',
        fontWeight:'bold',
        alignSelf:'center',
        color: 'white',
        textAlign: 'center',
      },

  
    
    inputView:{
        width: '90%',
        height: RFValue(45),
        flexDirection: 'row',
        justifyContent: 'space-between',
      // justifyContent: 'flex-start',
        marginTop: 10,
        backgroundColor: 'white',
        marginHorizontal:20,
        //borderWidth:1,
        //borderColor: color.primary,
        borderRadius: 4,

        
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8.84,
      
        elevation: 10,


       
    },
    dropDownStyle:{
        height: RFValue(45),
        justifyContent: 'center',
      // justifyContent: 'flex-start',
        marginTop: 10,
        backgroundColor: 'white',
        marginHorizontal:20,
        //borderWidth:1,
        //borderColor: color.primary,
        borderRadius: 4,

        
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8.84,
      
        elevation: 10,


    },
    inputLabel: {
        fontSize: RFValue(16),
        marginTop: 6,
        marginHorizontal:20,
        fontWeight: '600',
        color: 'black'
    },
    input: {
        fontSize:RFValue(16),
        height: RFValue(45),
        paddingHorizontal: 20,
        color:"black",

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
       // borderWidth:1,
       // borderColor: color.primary,
        marginTop: 10,
       // backgroundColor: '#E1E1F5',
        marginHorizontal:20,
        paddingBottom:50,
        marginBottom:30,
       // marginVertical:30,
       // height:'30%',
      
       
        borderRadius: 4,
        shadowColor: 'gray',

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8.84,
      
        elevation: 2,


    },
    logo: {
        width: '80%',
        height: '70%',
      },
  
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: RFValue(45),
        backgroundColor:color.primary,
        marginTop: 20,

        marginHorizontal:20,
       
        paddingVertical: 10,
       
        borderRadius: 5,


        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8.84,
      
        elevation: 8,
    },
    sendText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: RFValue(14),
        fontWeight: 'bold',
    },
})
export default TransferFormScreen;