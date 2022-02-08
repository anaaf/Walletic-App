import React from 'react';
import {Text, View, StyleSheet , TouchableOpacity} from 'react-native';
import color from '../../colors/colors';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-ionicons';

const UserAccountScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', alignItems: 'center' }}>
      <TouchableOpacity style={{paddingVertical:20,  paddingHorizontal:90}} onPress={()=>props.navigation.goBack(null)}>
                        <Icon color='#333' name='arrow-back'  size={RFValue(20, 580)} color="white" style={styles.icon} />                
                    </TouchableOpacity>
                   
            
      <Text style={styles.userProfile}>User Profile</Text>


      
      <TouchableOpacity style={{paddingVertical:20, paddingHorizontal:90}} >
                        <Icon color='#333' name='more'  size={RFValue(20, 580)} color="white" style={styles.icon} />                
                    </TouchableOpacity>

      </View>
      <View style={styles.userImgContainer}>
      <Icon
                color="#333"
                name="person"
               // style={styles.userImg}
                type="font-awesome"
                size={RFValue(50, 580)}
                color="white"
                padding={10}
              />

     
       </View>
       <Text style={styles.userName}>Navid Anjum</Text>
      </View>
      <View style={styles.infoContainer}>

      <Text style={styles.textTitle}>Email</Text>
      <Text style={styles.text}>Naveedsawan7@gmail.com</Text>
      <Text style={styles.textTitle}>Phone Number</Text>
      <Text style={styles.text}>(+92)3130547655</Text>
      <Text style={styles.textTitle}>Role</Text>
      <Text style={styles.text}>Business</Text>
</View>
    </View>
  );
};


const styles=StyleSheet.create({
  container:{
    flex:5,
    
  },
  headerContainer:{
    flex:2,
   //justifyContent: 'center',
 //flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.primary,
   // marginHorizontal: RFValue(15, 580),
   borderBottomEndRadius:30,
   borderBottomLeftRadius:30
  },
  infoContainer:{
    flex:3,
    marginHorizontal: RFValue(15, 580),
    //backgroundColor: 'gray',
   // marginHorizontal:40
    //
  

  },
  userImgContainer:{
    borderWidth:3,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding:6,
   // borderRadius:1000,
    borderColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 70,
    alignItems:'center',
    backgroundColor: 'gray'
  },
  userName:{
    fontSize:  RFValue(15, 580),
    fontWeight: '900',
    marginVertical:20,
    color: 'white'
  },
  userProfile:{
   // justifyContent: 'center',
   // alignSelf: 'center',
    
    textAlign: 'center',
    fontSize:  RFValue(15, 580),
    fontWeight: '900',
    marginVertical:20,
    color: 'white'

  },
  textTitle:{
    marginVertical:10,
    fontSize:  RFValue(13, 580),
    fontWeight: '900',
    color: 'black'
  },
  text:{
    fontSize: RFValue(13, 580),
    backgroundColor: 'white',
    paddingVertical:10,
    paddingHorizontal:5,
    borderRadius:4,
   fontWeight: '500',
    shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,

  }

})

export default UserAccountScreen;
