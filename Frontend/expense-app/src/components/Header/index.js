import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

// Component created to store the back arrow, passing with parameter the navigavion and the page, where when using this component 
// it is necessary to specify which screen you want to redirect and the navigation will be returned.
export default function Header({ navigation, page }) {

    
    function Back() {
        navigation.navigate(page);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={Back}>
            <Image source={require('../../assets/Icon-metro-arrow-left.png')} style={styles.iconHeader} />
        </TouchableOpacity>
    );

}