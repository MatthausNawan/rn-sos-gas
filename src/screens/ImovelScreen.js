import React from 'react';
import { connect} from 'react-redux';
import { View,Text,StyleSheet} from 'react-native';

const ImovelScreen = (props) => {
  
  return <View style={styles.container}>
      <Text>3. Imovel</Text>
      <Text>{props.name}</Text>
      <Text>{props.email}</Text>    
      
  </View>;
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:250,
        padding:10,
        fontSize:15,
        backgroundColor:'#DDD',                
    }
})

const mapStatetoProps = (state) =>{
    return {
        name:state.userReducer.name,
        email:state.userReducer.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // setName: (name) => dispatch({type:"SET_NAME",payload:{name}}),
        // setName: (email) => dispatch({type:"SET_EMAIL",payload:{email}})
    };
}

export default connect(mapStatetoProps,mapDispatchToProps)(ImovelScreen);