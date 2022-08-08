import React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput  } from 'react-native';



const App = () => {
  const [text, setText] = useState("");
  const [mostrar,setMostrar] = useState("")

  const Separator = () => (
    <View style={styles.separator} />
  );
  const handleText=(value) => {

    setText(value)
    console.log(text)
  }
  
  return(
  <SafeAreaView style={styles.container}>
    <View> 
      <Text style={styles.text}>
        Sacchi y Renata son....
      </Text>
      <TextInput style={styles.input}
        onChangeText={(value)=> handleText(value)}
         > </TextInput>
     
      <Button
        title="Manda tu respuesta"
        color='#007AFF'
        onPress={() => setMostrar(text)}
      />    
      
    </View>
    <Separator />

    <Text style={styles.text}>Respuesta:{mostrar}</Text>

    
  </SafeAreaView>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  text: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20,
    justifyContent:'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
  
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#00000",
    padding: 10
  },
 
});

export default App;