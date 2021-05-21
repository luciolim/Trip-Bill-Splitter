import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
        
    },

    icon :{
        width: 290,
        height: 290,
        


    },

    cardLogin: {
        marginTop: 20,
        backgroundColor: 'rgba(255,255,255,0.0)',
        width:290,
        height:50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 2,
        borderColor:'#fff',
        shadowColor:'#707070'
 

    },
    textCardLogin: {
        fontSize: 18,
        color:'#fff',
        textAlign:'center',
        alignContent: 'center',
        fontWeight:'bold',
    },

    cardSingUp: {
        marginTop: 35,
        backgroundColor: '#39AB63',
        width:290,
        height:50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 0,
        borderColor:'#fff',
        shadowColor:'#707070'
        
 

    },
    textCardSingUp: {
        fontSize: 18,
        color:'#fff',
        textAlign:'center',
        alignContent: 'center',
        fontWeight:'bold',
    }
   
    
});

export default styles;