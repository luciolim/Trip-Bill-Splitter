import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        
        backgroundColor: '#39AB63',
        alignItems: 'center',
        justifyContent:'flex-start'
        
    },
    content :{
        flex: 1,
        backgroundColor: '#39AB63',
      
    },

    icon :{
        width: 60,
        height: 60,
        marginTop: 0
       

    },
    titulo:{
        paddingTop: 10,
        fontSize: 25,
        fontWeight:'bold',
        color: '#39AB63'
    },


    closeTrip: {
        marginTop: 35,
        backgroundColor: '#c70101',
        width:290,
        height:50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 0,
        borderColor:'#fff',
        shadowColor:'#707070'
        
 

    },
    textCloseTrip: {
        fontSize: 18,
        color:'#fff',
        textAlign:'center',
        alignContent: 'center',
        fontWeight:'bold',
    },

    iconPlus: {
        marginBottom: 50,
        marginTop: 50,
        width: 60,
        height: 60,
        marginLeft: 230
    },
    cardSingUp: {
        marginTop: 0,
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
        fontSize: 10,
        color:'#fff',
        textAlign:'center',
        alignContent: 'center',
        fontWeight:'bold',
    }
   
    
});

export default styles;