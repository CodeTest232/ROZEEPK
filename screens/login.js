import React, { useState } from 'react';
import { Text, View,Button,TouchableOpacity,StyleSheet, TextInput,Dimensions,Platform, Alert,StatusBar } from 'react-native';
import { globalStyles } from '../styles/global';
import SignUp from './signup';
import Home from './home';

import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function Login({ navigation }) {
    
    const [text, onChangeText]= React.useState();
    const [number, onChangeNumber] = React.useState();

    const [cnicfeild, setCnicFeild] = React.useState({
            cnic_arid:"",
            password:""
    });

     let [num, setnum] = useState('');
    let [username , setname]=useState('');
    let [pass , setpass]=useState('');
    let [loginusername,setloginusername]=useState('');
    let [loginuserid,setloginuserid]=useState('');



    const onloginPress = async ()=> {
         fetch(
           'http://172.20.10.2/LoginSignUp/api/lgsp/LoginUser?Email=' +
             username +
             '&Password=' +
             pass,
         )
           .then(res => res.json())
           .then(data => {
             console.log({data});
             if (data == 'User Not Found') {
               Alert.alert('User Not found');
             } else {
               setname('');
               setpass('');
               Alert.alert('Login Successfully!');
               navigation.navigate('home');
             }
           });
    }
    const [data,setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if(val.length != 0)
        setData({
            ...data,
            email: val,
            check_textInputChange: true,
        });
        else{
        setData({
            ...data,
            email: val,
            check_textInputChange: false,
        });
        }
    }

    const handlePasswordChange = (val)=> {
        setData({
            ...data,
            password:val,
        });
    }

    const updateSecureTextEntry = () =>
    {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    return(
        <View style={globalStyles.containerLogin}>
        <StatusBar barStyle="light-content" backgroundColor="#009387"/>
            <View style={globalStyles.headerLogin}>
                <Text style={globalStyles.text_headerLogin}>Welcome!</Text>
            </View>
            <Animatable.View style={globalStyles.footerLogin} animation="fadeInUpBig">
                <Text style={globalStyles.text_footerLogin}>Email</Text>
                <View style={globalStyles.actionLogin}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />           
                    <TextInput 
                        placeholder="Enter Email"
                        //onChangeText={(val)=> textInputChange(val)}
                        onChangeText={event => setname(event)}
                        //val={text}
                        style={globalStyles.textInputLogin}
                        autoCapitalize="none"
                    />     
                    {data.check_textInputChange ? 
                <Animatable.View name="bounceIn">
                    <Feather 
                        name="check-circle"
                        color="grey"
                        size={20}
                    />
                </Animatable.View> 
                    : null }
                </View>
                <Text style={[globalStyles.text_footerLogin,{marginTop: 35}]}>Password</Text>
                <View style={globalStyles.actionLogin}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={21}
                    />           
                    <TextInput
                        placeholder="Enter Password"
                        style={globalStyles.textInputLogin}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        autoCapitalize="none"
                        //val={number}
                        //onChangeText={(val)=> handlePasswordChange(val)}
                        onChangeText={event => setpass(event)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="gray"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="gray"
                        size={20}
                    /> 
                    }
                    </TouchableOpacity>        
                </View>
                <View style={globalStyles.buttonLogin}>
                    <LinearGradient
                        colors={['#08d5c4','#01ab9d']}
                        style={globalStyles.login_login}
                    >
                    <TouchableOpacity 
                    onPress={()=> onloginPress()}>
                    <Text style={[globalStyles.textLogin],{color:'#fff'}}>Sign In</Text>
                    </TouchableOpacity>
                    </LinearGradient>


                    <TouchableOpacity 
                        onPress={()=> navigation.navigate('signup')}
                        style={{width:'100%',height:50,justifyContent:'center',alignItems:'center',borderRadius:10, borderWidth: 1, borderColor: '#009387', marginTop: 15}}
                        >
                    <Text style={[globalStyles.textLogin],{color:'#009387',fontWeight:'bold'}}>Sign Up</Text>
                    
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}