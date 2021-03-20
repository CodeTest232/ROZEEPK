import { Dimensions, StyleSheet,Platform } from 'react-native';

const {height} = Dimensions.get("screen");
const height_logo= height * 0.28;

export const globalStyles = StyleSheet.create({
  containerSplash: {
    flex:1,
    backgroundColor: '#009387',
  },
  headerSplash: {
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  footerSplash: {
    flex:1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  textSignSplash: {
    color: 'white',
    fontWeight: 'bold',
  },
  signInSplash: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  buttonSplash: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  textSplash: {
    color: 'grey',
    marginTop: 5,
  },
  titleSplash: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logoSplash: {
    height: height_logo,
    width: height_logo,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  containerLogin: {
    flex:1,
    backgroundColor:'#009387'
  },
  headerLogin: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footerLogin: {
    flex:3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,

  },
  text_headerLogin: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footerLogin: {
    color: '#05375a',
    fontSize: 18,
  },
  actionLogin: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 2,
  },
  textInputLogin: {
    flex:1,
    marginTop: Platform.OS == 'ios' ? 0: -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  buttonLogin: {
    alignItems: 'center',
    marginTop: 40,
  },
  login_login: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textLogin: {
    fontSize: 18,
    fontWeight: 'bold',
  },
   text_footerRegister: {
    color: '#05375a',
    fontSize: 17,
    marginTop: 5,
  },
   footerRegister: {
    flex:5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});