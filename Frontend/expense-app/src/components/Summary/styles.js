import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card: {
        marginTop: 20,
        width:290,
        height:150,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },
    
    textCard: {
    
        fontSize: 15,
        textAlign:'center',
        paddingTop: 0,
        alignContent: 'center',
        lineHeight:25
    },

    textDateCard: {
  
        fontSize: 10,
        textAlign:'right',
        paddingRight:10
    }
    
});

export default styles;