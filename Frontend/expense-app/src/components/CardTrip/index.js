import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

//Component created to display posted expenses
export default function CardTrip({ tripId, amount, description, username }) {

    return(  
      <View>
 
          <TouchableOpacity style={styles.card}>
              <Text style={styles.textCard}>Tag Trip: {tripId}</Text>
              <Text style={styles.textCard}>Amount: {amount}</Text>
              <Text style={styles.textCard}>Desc.: {description}</Text>
              <Text style={styles.textCard}>User: {username}</Text>
          </TouchableOpacity>
  
    </View>
      
      );
  }

