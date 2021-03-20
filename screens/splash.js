import React from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity, 
    Alert, StatusBar,Image} from 'react-native';
import {globalStyles} from '../styles/global';

import Login from './login';
import SignUp from './signup'

import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Splash = ({navigation}) => {
    return(
        <View style={globalStyles.containerSplash}>
        <StatusBar barStyle="dark-content" backgroundColor="#009387"/>
            <View style={globalStyles.headerSplash}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/build.png')}
                    style={globalStyles.logoSplash}
                />
            </View>
            <Animatable.View style={globalStyles.footerSplash} animation="fadeInUpBig">
                <Text style={globalStyles.titleSplash}>Stay Connected With everyone!</Text>
                <Text style={globalStyles.textSplash}>Sign in with account</Text>
                <View style={globalStyles.buttonSplash}>
                <TouchableOpacity onPress={()=> navigation.navigate('login')}>
                    <LinearGradient
                        colors={['#08d4c4','#01ab9d']}
                        style={globalStyles.signInSplash}
                    >
                    <Text style={globalStyles.textSignSplash}>Get Started</Text>
                    <Animatable.View animation="bounceInLeft" duraton="3500000">
                    <MaterialIcons
                        name="navigate-next"
                        color="#fff"
                        size={25}
                    />
                    </Animatable.View>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default Splash;