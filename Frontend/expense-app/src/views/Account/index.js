import React, {useState} from 'react';
import { Text, Image, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import logo from '../../assets/Icon-awesome-user-alt.png';
import InputText from '../../components/InputText';
import InputTextPassword from '../../components/InputTextPassword';
import Header from '../../components/Header';
import api from '../../services/api';


//Responsible for registering users
export default function Account({navigation}) {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   
//Function responsible for redirecting to the Login screen, using navigation

    function OpenLogin() {
        navigation.navigate('Login');
    }

//Function responsible for validating the fields if they are not empty, and also for calling the API that saves the data
    async function NewAccount () {
    
        if(!name)
         return Alert.alert('Defines the name');
        if(!email)
         return Alert.alert('Defines the email');
        if(!password)
        return Alert.alert('Defines the password');
           
        await api.post('user', {
          
           name,
           email,
           password

        }).then(()=> {

            Alert.alert('Registered successfully')
            OpenLogin();
        });

         
      }


  return (

      <LinearGradient colors={['#d4fc79', '#96e6a1']} style={styles.container}>
            <Header navigation={navigation} page='Login'/>       
            <Image source={logo} style={styles.icon} />
            <InputText tag="Name:" onChangeText={(text) =>setName(text)} value={name}/>
            <InputText tag="E-mail:" onChangeText={(text) =>setEmail(text)} value={email}/>
            <InputTextPassword tag="Password:" onChangeText={(text) =>setPassword(text)} value={password}/>
          
          <TouchableOpacity style={styles.cardSingUp} onPress={NewAccount}>
              <Text style={styles.textCardSingUp}>SING UP</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardAccount} onPress={OpenLogin}>
              <Text style={styles.textCardAccount}>Do you have an account ? Login</Text>
          </TouchableOpacity>
        
      </LinearGradient>
  
  );
}