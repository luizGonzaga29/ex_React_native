import { StatusBar } from 'expo-status-bar';
import React, { useDebugValue, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground,TextInput,Button,Image } from 'react-native';

export default function App() {

  const [texto, setTexto] = useState("");
  const [text, setText] = useState("");
 
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor = "#bac6d4"/>

      <View style={styles.container1}>
       <Text style={styles.headerText} 
       >{text}</Text>
       </View>

      <ImageBackground  
      source={require('./images/space.png')} 
      style={styles.img}  
      >
        <Image style={styles.profile} source={require('./images/cat.png')}/>
        
        <TextInput 
        style={styles.input}
        placeholder="Digite um título"
        placeholderTextColor='#cfbcbd'
        onChangeText={(text) => setTexto(text)}
        
        />

        <Button 
        title="Exibir título"
        onPress={() => setText(texto)}
        
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img:{
    flex:1,
    justifyContent:'center',
    resizeMode:'cover',
    alignItems:'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor:'#cfbcbd',
    width:'50%',
    paddingLeft:10,
    color:'#cfbcbd'
  },
  txt:{
    color:'#cfbcbd',
    
  },
  headerText: {
    fontSize: 20,
    fontWeight:'bold',
    color: '#cfbcbd'
  },

  container1: {
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: 'navy',
    alignItems: 'center',
    height:'10%'
  },
  profile:{
    height: 80,
    width: 80,
    borderRadius: 120/2,
    
  },
  
  
});
