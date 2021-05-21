import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import NumberFormat from 'react-number-format';

import styles from './styles';

//Component created to display the summary of all trips created
export default function Summary({ total_amount, expense_quantity, lower_expense, biggest_expense, average_expense}) {

    return(  
      <View>
 
          <TouchableOpacity style={styles.card}>
          <Text style={styles.textCard}>Total Amount: {total_amount}</Text>
              <Text style={styles.textCard}>Expense quantity: {expense_quantity}</Text>
              <Text style={styles.textCard}>Lower expense: {lower_expense}</Text>
              <Text style={styles.textCard}>Biggest expense: {biggest_expense}</Text>
              <Text style={styles.textCard}>Average_expense: {average_expense}</Text>
    
      
   
          </TouchableOpacity>


    </View>
      
      );
  }

