import * as React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import logo from '../../assets/expense.png';


//Option screen that redirects the user to the login screen if they already have an account or the Account screen to create a new account
export default function OptionLogin({ navigation }) {

  //Function that redirects the user to the Login screen
  function LoginPress(){

    navigation.navigate('Login');
  
  
  }

  //Function that redirects the user to the Account screen
  function AccountPress(){

    navigation.navigate('Account');
  
  
  }

  


  return (

  
      <LinearGradient colors={['#d4fc79', '#96e6a1']} style={styles.container}>
                      
            <Image source={logo} style={styles.icon} />

            <TouchableOpacity style={styles.cardLogin} onPress={LoginPress}>
              <Text style={styles.textCardLogin}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardSingUp} onPress={AccountPress}>
              <Text style={styles.textCardSingUp}>SING UP</Text>
          </TouchableOpacity>
        
      </LinearGradient>
  
  );
}