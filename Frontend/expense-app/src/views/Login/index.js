import React, {useState} from 'react';
import { Text, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import logo from '../../assets/Icon-open-account-login.png';
import InputText from '../../components/InputText';
import InputTextPassword from '../../components/InputTextPassword';



//Login screen with email and password fields
export default function Login({navigation}) {
const[email, setEmail] = useState();
const[senha, setSenha] = useState();

//Function responsible for redirecting the user to the Home screen
    function OpenLogin(){
        navigation.navigate('Home');
    }
//Role responsible for redirecting the user to the Account screen
    function OpenAccount(){
        navigation.navigate('Account');
    }


  return (

      <LinearGradient colors={['#d4fc79', '#96e6a1']} style={styles.container}>
                      
            <Image source={logo} style={styles.icon} />
            <InputText tag="E-mail:" onChangeText={(text) => setEmail(text)} value={email}/>
            <InputTextPassword tag="Password:" onChangeText={(text) => setSenha(text)} value={senha}/>
          
          <TouchableOpacity style={styles.cardSingUp} onPress={OpenLogin}>
              <Text style={styles.textCardSingUp}>SING UP</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardAccount} onPress={OpenAccount}>
              <Text style={styles.textCardAccount}>Create New Account</Text>
          </TouchableOpacity>
        
      </LinearGradient>
  
  );
}