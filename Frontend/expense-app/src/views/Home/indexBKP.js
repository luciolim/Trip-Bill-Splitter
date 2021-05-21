import React, {Component} from 'react';
import { Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import Header from '../../components/Header';
import CardTrip from '../../components/CardTrip';

import icon from '../../assets/Icon-metro-airplane.png';
import buttonPlus from '../../assets/Icon-feather-plus-circle.png';
import api from '../../service/api';



class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      trips: []
    };
  }

  async componentDidMount(){
    try {
     
    const response = await api.get('Portugal?page=0&size=100');
    console.log(response.data);
    this.setState({
      trips: response.data.data
    });
  } catch(error){
    console.log(error)
  }
  }

  render(){

    function addExpense(){
      navigation.navigate('Expense');

    }
     

    return (

      <LinearGradient colors={['#d4fc79', '#96e6a1']} style={styles.container}>
           <Header/>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.titulo}>TRIPS MADE</Text>
            <FlatList
            data={this.state.trips} 
            keyExtractor={item => item.tripId }
            renderItem={({item})=><CardTrip data={item} />}
           />

            <TouchableOpacity onPress={addExpense}> 
            <Image source={buttonPlus} style={styles.iconPlus} />
            </TouchableOpacity>
           
      </LinearGradient>
  
  );
  }
}
export default Home;