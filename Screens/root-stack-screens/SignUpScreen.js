import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    Dimensions,
    Image,
    Platform,
    TouchableOpacity,
    TextInput,
    StatusBar
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const SignUpScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confPassword: ''
    })
    const [validEmail, setVaidEmail] = React.useState(false);
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [confSecureTextEntry, setConfSecureTextEntry] = React.useState(true);

    const handleEmailChange = (val) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(reg.test(val)){
            setVaidEmail(true);
        }else{
            setVaidEmail(false)
        }
        setData(prev=>({...prev, email: val}))
    }

    const formSubmitHandler = () => {
        if(validEmail && data && data.email && data.password && data.confPassword && data.confPassword == data.password ){
            navigation.navigate('Feed')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                        />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        value={data.email}
                        onChangeText={(val)=>handleEmailChange(val)}
                        autoCapitalize="none"
                        />
                    {validEmail && <Feather
                        name="check-circle"
                        color="green"
                        size={20}
                        />}
                </View>
                <Text style={[styles.text_footer,{
                    marginTop: 35
                }]}>New Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                        />
                    <TextInput
                        placeholder="New Password"
                        value={data.password}
                        secureTextEntry={secureTextEntry}
                        style={styles.textInput}
                        autoCapitalize="none"
                        />
                    <TouchableOpacity
                        onPress={()=>setSecureTextEntry(p=>!p)}
                        >
                        <Feather
                            name={secureTextEntry ? "eye-off" : "eye"}
                            color="grey"
                            size={20}
                            />
                        </TouchableOpacity>
                </View>
                <Text style={[styles.text_footer,{
                    marginTop: 35
                }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                        />
                    <TextInput
                        placeholder="Confirm Password"
                        value={data.confPassword}
                        secureTextEntry={confSecureTextEntry}
                        style={styles.textInput}
                        autoCapitalize="none"
                        />
                    <TouchableOpacity
                        onPress={()=>setConfSecureTextEntry(p=>!p)}
                        >
                        <Feather
                            name={confSecureTextEntry ? "eye-off" : "eye"}
                            color="grey"
                            size={20}
                            />
                        </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <LinearGradient
                        colors={['#08d4c4', '#01ab94']}
                        style={styles.signIn}
                        >
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={formSubmitHandler}>
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity
                        style={[styles.signIn,{
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                        onPress={()=>navigation.goBack()}
                        >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -4,
        paddingLeft: 10,
        color: '#05375a',
        width:'100%'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    helper_icon: {
        marginLeft: 'auto'
    }
  });