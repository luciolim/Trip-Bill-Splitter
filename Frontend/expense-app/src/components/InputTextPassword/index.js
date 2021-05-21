import React from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './styles';


//Component created to customize and style the InputTextPassword components on the screen 
function InputTextPassword ({tag, onChangeText, value}) {

    return (
        <View style={styles.container} >
            <Text style={styles.tagInput}>{tag}</Text>
            <TextInput style={styles.input} secureTextEntry onChangeText={onChangeText} value={value}/>
        </View>);
    }
 



export default InputTextPassword;