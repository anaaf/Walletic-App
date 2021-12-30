import React from "react";
import { View, Text,StyleSheet, } from "react-native";
import LottieView from 'lottie-react-native';



const Animation=()=>{
    return(
        <View style={styles.spinnerStyling}>
        <LottieView source={require('../Animations/42879-lottery-display-logo.json')}
          autoPlay loop
        />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})
export default Animation;