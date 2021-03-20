import React from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';
import Home from './home';
import {baseUrl} from '../settings/baseUrl';
import Login from './login';

import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



const SignUp = ({navigation}) => {

    const [first, onChangeText1] = React.useState();
    const [last, onChangeText2] = React.useState();
    const [email,onChangeText3] = React.useState();
    const [no, onChangeNumbe4] = React.useState();
    const [pass, onChangeNumbe5] = React.useState();

    const onSignup = async () => {
       try {
         let result = await fetch("http://172.20.10.2/LoginSignUp/api/lgsp/AddData",{
          method:'POST',
          body:JSON.stringify({
              FirstName:first,
              LastName:last,
              Email:email,
              Phone_No:no,
              Password:pass,
          }),
          headers:{
              Accept:'application/json',
              'Content-Type':'application/json'
          }
      })
      const resJson = await result.json();
      if(resJson)
      {
          onChangeText1("");
          onChangeText2("");
          onChangeText3("");
          onChangeNumbe4(null);
          onChangeNumbe5(null);
      }
      console.log(resJson)
        if (result.status===200) {
               alert("Successfully SignUp!")
           }
           else alert("Plz Try Again!")
        } 
        catch (error) {
            console.log(error.message);
        }
    }
    return(
        <View style={globalStyles.containerLogin}>
            <View style={globalStyles.headerLogin}>
                <Text style={globalStyles.text_headerLogin}>Register Now!</Text>
            </View>
            <View style={globalStyles.footerRegister}>
            <Text style={globalStyles.text_footerRegister}>First Name</Text>
                 <View style={globalStyles.actionLogin}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />           
                    <TextInput 
                        placeholder="First Name"
                        onChangeText={onChangeText1}
                        value={first}
                        style={globalStyles.textInputLogin}
                        autoCapitalize="none"
                    />      
                <Animatable.View name="bounceIn">
                    <Feather 
                        name="check-circle"
                        color="grey"
                        size={20}
                    />
                </Animatable.View>
                </View>
                <Text style={globalStyles.text_footerRegister}>Last Name</Text>
                <View style={globalStyles.actionLogin}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />           
                    <TextInput 
                        placeholder="Last Name"
                        onChangeText={onChangeText2}
                        value={last}
                        style={globalStyles.textInputLogin}
                        autoCapitalize="none"
                    />      
                <Animatable.View name="bounceIn">
                    <Feather 
                        name="check-circle"
                        color="grey"
                        size={20}
                    />
                </Animatable.View>
                </View>
                <Text style={globalStyles.text_footerRegister}>Email</Text>
                   <View style={globalStyles.actionLogin}>
                    <Feather 
                        name="mail"
                        color="#05375a"
                        size={20}
                    />           
                    <TextInput 
                        placeholder="Email"
                        onChangeText={onChangeText3}
                        value={email}
                        style={globalStyles.textInputLogin}
                        autoCapitalize="none"
                        keyboardType='email-address'
                    />      
                <Animatable.View name="bounceIn">
                    <Feather 
                        name="check-circle"
                        color="grey"
                        size={20}
                    />
                </Animatable.View>
                </View>
                <Text style={globalStyles.text_footerRegister}>Contact Number</Text>
                <View style={globalStyles.actionLogin}>
                    <FontAwesome 
                        name="phone"
                        color="#05375a"
                        size={20}
                    />           
                    <TextInput 
                        placeholder="Contact Number"
                        onChangeText={onChangeNumbe4}
                        value={no}
                        style={globalStyles.textInputLogin}
                        autoCapitalize="none"
                        keyboardType='numeric'
                    />      
                <Animatable.View name="bounceIn">
                    <Feather 
                        name="check-circle"
                        color="grey"
                        size={20}
                    />
                </Animatable.View>
                </View>
                <Text style={globalStyles.text_footerRegister}>Password</Text>
                   <View style={globalStyles.actionLogin}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />           
                    <TextInput 
                        placeholder="Password"
                        onChangeText={onChangeNumbe5}
                        value={pass}
                        style={globalStyles.textInputLogin}
                        autoCapitalize="none"
                    
                    />      
                <Animatable.View name="bounceIn">
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                </Animatable.View>
                </View>
                 <View style={globalStyles.buttonLogin}>
                    <LinearGradient
                        colors={['#08d5c4','#01ab9d']}
                        style={globalStyles.login_login}
                    >
                    <TouchableOpacity 
                    onPress={() => onSignup()}>
                    <Text style={[globalStyles.textLogin],{color:'#fff'}}>Sign Up</Text>
                    </TouchableOpacity>
                    </LinearGradient>


                    <TouchableOpacity 
                        onPress={()=> navigation.navigate('login')}
                        style={{width:'100%',height:50,justifyContent:'center',alignItems:'center',borderRadius:10, borderWidth: 1, borderColor: '#009387', marginTop: 15}}
                        >
                    <Text style={[globalStyles.textLogin],{color:'#009387',fontWeight:'bold'}}>Sign In</Text>
                    
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export default SignUp;