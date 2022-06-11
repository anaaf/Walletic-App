// import React from 'react';
// import {Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/Auth';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  BackHandler, 
  Alert
} from 'react-native';
import color from '../../colors/colors';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-ionicons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import HomeFeatures from '../../Components/HomeFeatures';
import { useBackHandler, exitApp } from '@react-native-community/hooks'
import {fetchBlanceInfo} from "../../redux/actions/blanceInfoActions"
const HomeScreen = props => {
  // for testing purpose
  const [userId, setUserId]=useState('');
  const [token, setToken]=useState('');
  const state = useSelector(state => state);


  const accountAllData =useSelector(state=>state.AccountInfo.accountData)

  

  console.log("finally blance is :",accountAllData)
  // actual

  const nav = useNavigation();
  const dispatch = useDispatch();
  const log_out = async () => {
    dispatch(logout());
    await AsyncStorage.clear();
    // nav.navigate('Login', {
    //    screen: 'PhoneScreen',
    // });
    // setting a stack [auth]
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Auth'}],
      }),
    );
  };

  ///////////////////////Back handler to handler back button press///////////////////
  const backActionHandler = () => {
    Alert.alert('Are You Sure!', 'Do you want to exit App?', [
      {
        text: 'No',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };
  useBackHandler(backActionHandler);
  //////////////////////////////////////////CALL API TO FETCH BLANCE ////////////////////////////////////////////////
 /* AsyncStorage.getItem('user_data')
  .then(jsonValue => {
    if (jsonValue != null) {
      jsonValue = JSON.parse(jsonValue);
      setUserId(jsonValue.user_id);
      setToken(jsonValue.token);
     console.log(jsonValue)
     
    }}
    )
 
  
  useEffect(()=>{
    const blanceHandler= async ()=>{
      await dispatch(fetchBlanceInfo(userId, token));
    
    }
    blanceHandler();
  },
  [])*/

  return (
    <View style={styles.container}>
      {/* <Button onPress={log_out} title="logout" /> */}
      <View style={styles.header}>
        <View style={{flex: 3}}>
          <View style={styles.topMenuContainer}>
            <TouchableOpacity>
              <Icon
               
                name="menu"
                type="font-awesome"
                size={RFValue(20, 580)}
                color="white"
                padding={10}
              />
            </TouchableOpacity>
            <Image
              source={require('../../images/logo1.png')}
              // source={require('../../images/send.png')}
              style={styles.logo}
            />

            <TouchableOpacity onPress={()=> props.navigation.navigate('notifications')} >
              <Icon
               
                name="notifications"
                type="font-awesome"
                size={RFValue(20, 580)}
                color="white"
                padding={10}
              />
            </TouchableOpacity>



            <TouchableOpacity onPress={log_out}>
              <Icon
               
                name="log-out"
                type="font-awesome"
                size={RFValue(20, 580)}
                color="white"
                padding={10}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.blanceContainer}>
            <View style={styles.blanceSubContainer}>

              <Text style={styles.blanceText}>{accountAllData?accountAllData.fullname: null}</Text>
             
              <View style={{flexDirection:'row'}}>
           
              <Text style={styles.RSText}>Rs </Text> 

              <Text style={styles.totalAmount}>{accountAllData?accountAllData.balance: null}</Text>             
              </View>
            </View>
            <View style={styles.statementContainer}>
              <View style={styles.acccountDetailsContainer}>
                <TouchableOpacity style={styles.infoButtons}>
                  <Text style={styles.cartButtonText}>Share Account Info</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.transactionContainer}>
              <TouchableOpacity onPress={()=> props.navigation.navigate('statements')} style={styles.infoButtons}>
                  <Text style={styles.cartButtonText}>View Statements</Text>
                </TouchableOpacity>
              </View>

            </View >
          
          </View>
        </View>
      </View>
      <View style={styles.featuresContainer}>
        <HomeFeatures
          onTransferPress={() => props.navigation.navigate('transferForm')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#F5F8F8',
    backgroundColor:'white'

},
header: {
    flex: 2,
    backgroundColor: color.primary,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20

},
topMenuContainer: {
    flex: 1.5,
    flexDirection: 'row',
    //backgroundColor: "pink",
    justifyContent: 'space-between',
    margin: 20,

},
blanceContainer: {
    flex: 6,
    backgroundColor:color.primary,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 20,
   // width: "90%",
    shadowColor: 'white',
   
    shadowOffset: {
        width: 4,
        height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.54,

    elevation: 1,


},
blanceSubContainer: {
  flex:4,
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center',
  borderTopRightRadius:5,
  borderTopStartRadius:5,
 
     backgroundColor: 'white',
  //  marginBottom: 10,
    width: '100%'

},

statementContainer:{
   flex:2,
   flexDirection:'row',
  
},
acccountDetailsContainer:{
  flex:1, 
  backgroundColor:'#5403AB',
  borderWidth:2,
  borderRightWidth:0,
  borderLeftWidth:0,
  borderBottomWidth:0,
  borderColor:'silver'

},
transactionContainer:{
  flex:1, 
  backgroundColor:'#5403AB',
  borderWidth:2,
  borderRightWidth:0,
  borderBottomWidth:0,
  borderColor:'silver'
  
},
infoButtons:{
  height:"100%",
  width:"100%",
  justifyContent:'center',
  alignItems:"center",
  alignSelf: 'center'

},
cartButtonText:{
  color:"white",
  fontSize: RFValue(16)

},
RSText:{
color:color.primary,
alignSelf:'center',
fontWeight:'500', 
fontSize: RFValue(16)
},
featuresContainer: {
    flex: 4,
    flexDirection: 'row',
    //  backgroundColor: 'white',
  },
 
blanceText: {
    fontSize: RFValue(18),
    fontWeight: '800',
    color: 'black',

},
totalAmount: {
    fontSize: RFValue(20),
    color: 'black',
   // marginTop: 20,
    fontWeight: '600',
   // width: "70%"

},
addContainer: {
    backgroundColor: '#F99815',
    borderTopRightRadius:30,
    justifyContent: 'center',
    width: '20%',
    alignItems: "center",

   
},

logo: {
    width: RFValue(120),
    height: RFValue(40),
},
userName:{
  fontSize: RFValue(16, 580),
  color: 'white',
 // width: "80%",
  marginVertical:5
}
});

export default HomeScreen;
