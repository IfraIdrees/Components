import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {useState} from 'react';

import { View, Image, StyleSheet,Text, TextInput } from 'react-native';


const  Output  =(props)=> {
    return (
      <View style={styles.container}>
  
           <Text  style={{fontSize:20}}>
             {props.data}     
        </Text>
                
      </View>
    );
}

const Input  = () =>{

    const [getText,setText]=useState('');

    return (
      <View style={styles.container}>

        <TextInput  
        style={styles.inputbg}
        placeholder='Enter text here'
        onChangeText={ text =>setText(text)}
        />

        <Output  data={getText}/>

      </View>
  );

 

 
  
 
  
}

class DisplayInputOutput extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Input/>
          <Output/>
      </View>
    );
  }
}


  const styles = StyleSheet.create({
    container: {

      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginTop:50
    },
    tinyLogo: {
      width: 100,
      height: 100,
     },
     textbg:{
       fontSize:20,
       marginTop:30,
       
     },
     inputbg:{
       borderWidth:1,
       borderColor:'#777',
       padding:8,
       margin:10,
       width:200,
     }
   
  });

export default DisplayInputOutput;
