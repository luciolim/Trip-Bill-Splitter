import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card: {
        marginTop: 10,
        backgroundColor: 'rgba(255,255,255,0.5)',
        width:290,
        height:150,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
       
 

    },
    
    textCard: {
       
        fontSize: 15,
        textAlign:'center',
        paddingTop: 0,
        lineHeight:20
    },

    textDateCard: {
  
        fontSize: 10,
        textAlign:'right',
        paddingRight:0
    }
    
});

export default styles;