// import React from 'react';
// import {Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/Auth';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// const HomeScreen = () => {
//   const state = useSelector(state => state);
//   console.log(state);
//   const nav = useNavigation();
//   const dispatch = useDispatch();
//   const log_out = async () => {
//     dispatch(logout());
//     await AsyncStorage.clear();
//     nav.navigate('Login');
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Button onPress={log_out} title="logout" />
//       <Text>HomeScreen</Text>
//     </View>
//   );
// };

// export default HomeScreen;
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import color from '../../colors/colors';
import Icon from 'react-native-ionicons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import HomeFeatures from '../../Components/HomeFeatures';



const HomeScreen = props => {

  // for testing purpose

  const state = useSelector(state => state)
  console.log(state)


  // actual 

  const nav = useNavigation();
  const dispatch = useDispatch();
  const log_out = async () => {
    dispatch(logout());
    await AsyncStorage.clear();
    nav.navigate('Auth', {
      screen: 'PhoneScreen',
    });
  };
  return (
    <View style={styles.container}>
      {/* <Button onPress={log_out} title="logout" /> */}
      <View style={styles.header}>
        <View style={{flex: 3}}>
          <View style={styles.topMenuContainer}>
            <TouchableOpacity>
              <Icon
                color="#333"
                name="menu"
                type="font-awesome"
                size={30}
                color="white"
                padding={10}
              />
            </TouchableOpacity>
            <Image
              source={require('../../images/logo1.png')}
              // source={require('../../images/send.png')}
              style={styles.logo}
            />
            <TouchableOpacity onPress={log_out}>
              <Icon
                color="#333"
                name="log-out"
                type="font-awesome"
                size={30}
                color="white"
                padding={10}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.blanceContainer}>
            <View style={styles.blanceSubContainer}>
              <Text style={styles.blanceText}>Balance</Text>
              <Text style={styles.totalAmount}>$ 129343343.007</Text>
            </View>
            <View style={styles.addContainer}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  color="#333"
                  name="add"
                  type="font-awesome"
                  size={30}
                  color="white"
                  padding={10}
                />
              </TouchableOpacity>
            </View>
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
  },
  header: {
    flex: 2,
    backgroundColor: color.primary,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  topMenuContainer: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: "pink",
    justifyContent: 'space-between',
    margin: 20,
  },
  blanceContainer: {
    flex: 2,
    backgroundColor: '#8e00eb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  blanceSubContainer: {
    // backgroundColor: 'blue',
    margin: 20,
  },
  featuresContainer: {
    flex: 4,
    //  flexDirection: 'row'
    //  backgroundColor: 'gray',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  blanceText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#C8C8C8',
  },
  totalAmount: {
    fontSize: RFValue(20, 580),
    color: 'white',
    marginTop: 20,
    fontWeight: '900',
  },
  addContainer: {
    backgroundColor: '#F99815',
    justifyContent: 'center',
    width: '20%',
    alignItems: 'center',
  },

  logo: {
    width: '70%',
    height: '80%',
  },
});

export default HomeScreen;
