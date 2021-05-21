import  React, {useEffect, useState} from 'react';
import { Text, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import save from '../../assets/Icon-feather-check.png';
import api from '../../services/api';


//Class responsible for assembling the screen that adds expenses
export default function Expense({ navigation }) {
  const [tripId, setTripId] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [username, setUsername] = useState();


//Function used to create a new expense and validating the fields if they are not empty, 
//and so it calls the POST api that saves the data captured on the screen
  async function New () {
    
    if(!tripId)
     return Alert.alert('Define a TripId');
    if(!amount)
     return Alert.alert('Define a amount');
    if(!description)
    return Alert.alert('Define a descrption');
    if(!username)
    return Alert.alert('Define a username ');

    await api.post(`${tripId}/expense`, {
      tripId,
	    amount,
	    description,
	    username
    }).then(()=> {
      navigation.navigate('Home');
    });
     
  }

  return (

      <LinearGradient colors={['#d4fc79', '#96e6a1']} style={styles.container}>
            <Header navigation={navigation} page="Home"/>
            <Text style={styles.titulo}>TRIPS MADE</Text>

            <InputText tag="TripId:" onChangeText={(text) =>setTripId(text)} value={tripId}/>
            <InputText tag="Amount:" onChangeText={(text) =>setAmount(text)} value={amount}/>
            <InputText tag="Desc.:" onChangeText={(text) =>setDescription(text)} value={description}/>
            <InputText tag="User.:" onChangeText={(text) =>setUsername(text)} value={username}/>

            <TouchableOpacity onPress={New}> 
            <Image source={save} style={styles.iconSave} />
            </TouchableOpacity>
           
      </LinearGradient>
  
  );
}