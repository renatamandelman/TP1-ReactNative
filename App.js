import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput  } from 'react-native';



const App = () => {
  const [text, onChangeText] = React.useState("Segui la frase...");
  const Separator = () => (
    <View style={styles.separator} />
  );
  
  return(
  <SafeAreaView style={styles.container}>
    <View> 
      <Text style={styles.text}>
        Sacchi y Renata son....
      </Text>
      <TextInput style={styles.input}
        onChangeText={onChangeText}
        value={text} > </TextInput>
     
      <Button
        title="apreta para averiguarr"
        onPress={() => Alert.alert('los mas facheros de ort')}
      />    


    </View>
    <Separator />

    
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
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

 
});

export default App;