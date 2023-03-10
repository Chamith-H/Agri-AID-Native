import React from 'react';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import Request from '../../../API_Callings/Request';

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    KeyboardAvoidingView
} from 'react-native';

import LongButton from '../../../components/buttons/LongButton';
import LoginHeader from '../../../components/headers/LoginHeader';
import CredentialField from '../../../components/inputs/CredentialField';
import PasswordField from '../../../components/inputs/PasswordField';
import LoginWarning from '../../../components/popups/LoginWarning';
import AppUser from '../../../StaticData/AppUser';

const FarmerLogin =( { navigation } )=> {

    const route = useRoute()
    const [header, setHeader] = useState('')

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [warning, setWarning] = useState(false)
    const [error, setError] = useState('')

    const [stage, setStage] = useState(['_DEFAULT'])

    const logic_Handler =( job, current, error, id, name, email )=> {
        if(job == current) {
            switch (route.params) {
                case 0: {
                            const app_user = new AppUser
                            app_user.AppUser(id, name, email)
                            navigation.navigate('Home'); 
                            break; 
                        }

                case 1: {
                            const app_user = new AppUser
                            app_user.AppUser(id, name, email)
                            navigation.navigate('CropAdvisory'); 
                            break;
                        }

                case 2: {
                            const app_user = new AppUser
                            app_user.AppUser(id, name, email)
                            navigation.navigate('Management'); 
                            break;
                        }
                
            } 
        }

        else {
            setWarning(true)
            setError(error)

            const _solver = [job, current]
            setStage(_solver)
        }
    }

    const submit_Values = async()=> {
        const user = {email: userEmail, password: userPassword}
        const request = new Request

        try {
            const response = await request.Login(user)

            if(response.data == 0 || response.data == 2) {
                setWarning(true)
                setError(response.data)
            }

            else {
                switch (route.params) {
                    case 0: logic_Handler(response.data[0], 'Farmer', 500, response.data[1], response.data[2], response.data[3]); break;
                    case 1: logic_Handler(response.data[0], 'Professional', 500, response.data[1], response.data[2], response.data[3]); break;
                    case 2: logic_Handler(response.data[0], 'Admin', 500, response.data[1], response.data[2], response.data[3]); break;
                }        
            }
        }

        catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {

        if(route.params == 0) {
            setHeader('Farmer Log In');
        }
            else if(route.params == 1) {
                setHeader('Agricultural Professional Log In');
            }
                else if(route.params == 2) {
                    setHeader('Site Administrator Log In');
                }
                    else {
                        console.log('_ERROR')
                    }

    }, []);
   
    return (
        <View style={styles.body}>
            <LoginHeader Title={header}></LoginHeader>

            {warning && <LoginWarning Error={error} Job={stage} Close={()=>setWarning(false)}></LoginWarning>}
            
            <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <ScrollView>

                    <View style={styles.logoBox}>
                        <Image
                            style={styles.logo}
                            source={require('../../../Assets/Logo/LoginLogo.png')}
                        />
                    </View>

                    <View style={styles.fields}>
                        <View style={styles.singleField} >
                            <CredentialField Label='Email Address' Placeholder='example@gmail.com' Change={ (value) => setUserEmail(value) } />
                        </View>

                        <View style={styles.singleField} >
                            <PasswordField Label='Password' Placeholder='Your password' Change={ (value) => setUserPassword(value) } />
                        </View>
                    </View>

                    <View style={styles.button}>
                        <LongButton Title='Log In' press_Action={submit_Values}></LongButton> 
                    </View>
                </ScrollView> 
            </KeyboardAvoidingView>             
        </View>
    )
}

const styles = StyleSheet.create({
    body : {
        backgroundColor: 'white',
        height:'100%',
    },

    logoBox : {
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        marginTop:40,
        height:250,
        width:250
    },

    container: {
        flex: 1,

    },

    singleField: {
        marginVertical:'2.5%'
    },

    fields: {
        marginTop:'8%',
    },

    button: {
        marginTop:'10%',
        marginBottom:'15%'
    }
})

export default FarmerLogin;