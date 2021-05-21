import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'flex-start'
        
    },

    icon :{
        width: 100,
        height: 100,
        marginTop: 20
        


    },

    cardSingUp: {
        marginTop: 35,
        backgroundColor: '#EEBA3E',
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
    },

    cardAccount: {
        marginTop: 20,
        backgroundColor: 'rgba(255,255,255,0.0)',
        width:290,
        height:50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        shadowColor:'#707070'
 

    },
    textCardAccount: {
        fontSize: 14,
        color:'#39AB63',
        textAlign:'center',
        alignContent: 'center'
    }
   
    
});

export default styles;