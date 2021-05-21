import React, { Component } from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './styles';


//Component created to customize and style the TextInput components on the screen 
function  InputText ({tag, value, onChangeText}) {


    return (
        <View style={styles.container} >
            <Text style={styles.tagInput} >{tag}</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} value={value} />
        </View>);
    }
 



export default InputText;