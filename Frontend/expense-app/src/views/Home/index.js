import React, {useEffect, useState} from 'react';
import { Text, Image, TouchableOpacity, FlatList, ScrollView, ActivityIndicator, Alert  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import Header from '../../components/Header';
import CardTrip from '../../components/CardTrip';
import Summary from '../../components/Summary';
import api from '../../services/api';
import icon from '../../assets/Icon-metro-airplane.png';
import buttonPlus from '../../assets/Icon-feather-plus-circle.png';


import InputText from '../../components/InputText';


//Screen used to search and list expenses posted by a specific TAG
export default function Home({ navigation }) {

  const [expenses, setExpenses] = useState([]);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState();
  const [sumaries, setSumaries] = useState([]);


//Displays an alert window, to allow to close or not to close a Tag,
//If you choose yes, it will no longer be possible to post expenses in the same
  const confirmClose = () =>
    Alert.alert(
      "Warning",
      "User you like to closed this trip?",
      [
        {
          text: "cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          closeTrip()
          setSearch('')
          setExpenses([])
          Alert.alert('Trip Closed')
        } }
      ]
    );

//Function responsible for calling the GET API that returns the expenses by passing a tag that was passed by the user
  async function loadExpense(){
    setLoad(true);
    await api.get(`${search}`).then(response =>{
    // await api.get('Portugal').then(response =>{
        setExpenses(response.data.data)
        setLoad(false);
        
    } );

  }

  //Function responsible for calling the POST API that closes a tag that was passed by the user, making it impossible to post new expenses
  async function closeTrip(){

    await api.post(`${search}/close`);

  }

  //Function used to load and display on the screen a summary of all posted expenses
  async function loadSummary(){
    setLoad(true);
await api.get(`${search}/summary`).then(response =>{
        setSumaries(response.data) 
        setLoad(false);
   
    } );

  }

//Function used to load methods as soon as the page is loaded or updated
  useEffect(()=>{
    loadExpense();
    loadSummary();
   
  }, [search]);

    function addExpense(){
      navigation.navigate('Expense');

    }

    

   


    return (
<ScrollView style={styles.content}>
      <LinearGradient colors={['#d4fc79', '#96e6a1']} style={styles.container}>
           <Header navigation={navigation} page='Login'/>
            {/* <Image source={icon} style={styles.icon} /> */}
            <Text style={styles.titulo}>EXPENSES</Text>

            <InputText tag="TripId:" onChangeText={(text) =>setSearch(text)} value={search}/>

  

        

        
        
      

          
            { 
              load 
              ? 
              <ActivityIndicator color='#39AB63' size={50} />
              :

            expenses.map(e => 
              (
                
              <CardTrip tripId={e.tripId} amount={e.amount} description={e.description} username={e.username} />
                
              ))
            } 
         
  
            {

            load 
            ? 
            <Text></Text>
      
            :

            <Summary total_amount={sumaries.total_amount} expense_quantity={sumaries.expense_quantity} lower_expense={sumaries.lower_expense} biggest_expense={sumaries.biggest_expense} average_expense={sumaries.average_expense}/>
            }

            <TouchableOpacity onPress={confirmClose} style={styles.closeTrip}> 
            <Text style={styles.textCloseTrip}>Close Trip</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={addExpense}> 
            <Image source={buttonPlus} style={styles.iconPlus} />
            </TouchableOpacity>
           
      </LinearGradient>
      </ScrollView>
  
  );
  }

