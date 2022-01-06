import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import color from '../colors/colors';

//<Icon color='#333' name='send' type='font-awesome' size={RFValue(40, 580)} color="white" padding={10} />

const HomeFeatures = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.featureSubContainer}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../images/send.png')}
                // source={require('../images/signin.png')}
                style={styles.featureImg}
              />
            </View>
            <Text style={styles.featureText}>Send Money</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.featureSubContainer}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.iconContainer}>
              <Icon
                color="#333"
                name="bank"
                type="font-awesome"
                size={RFValue(35, 580)}
                color="#7ADAE0"
                style={styles.icon}
              />
            </View>
            <Text style={styles.featureText}>Transfer To Bank Account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.featureSubContainer}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.iconContainer}>
              <Icon
                color="#333"
                name="qrcode"
                type="font-awesome"
                size={RFValue(35, 580)}
                color="#7ADAE0"
                style={styles.icon}
              />
            </View>
            <Text style={styles.featureText}>Generate QR Code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.featureSubContainer}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.iconContainer}>
              <Icon
                color="#333"
                name="list"
                type="font-awesome"
                size={RFValue(35, 580)}
                color="#7ADAE0"
                style={styles.icon}
              />
            </View>
            <Text style={styles.featureText}>Send Bills/invoices</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',

    // backgroundColor: 'red',
  },
  featureSubContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
    paddingVertical: 10,
    width: '40%',
    height: '70%',
    borderRadius: 10,
    borderColor: color.primary,
    opacity: 1,
    borderWidth: 1,

    shadowColor: color.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  featureText: {
    fontSize: RFValue(12, 580),
    fontWeight: '600',
    color: 'black',

    textAlign: 'center',
    marginTop: 10,
  },
  iconContainer: {
    backgroundColor: color.primary,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 300,
    // borderBottomEndRadius:30,
    //borderTopLeftRadius:30
  },
  featureImg: {},
  icon: {
    padding: 10,
  },
});

export default HomeFeatures;
