import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {

const [number1, setNumber1] = useState('');
const [number2, setNumber2] = useState('');
const [result, setResult] = useState('');

const plusResult = parseInt(number1)+ parseInt(number2);
const minusResult = number1 - number2;

function laskePlus(){
  setResult('Result: ' + plusResult)
};

function laskeMiinus(){
  setResult('Result: ' + minusResult);
};

  return (
    <View style={styles.container}>
      <Text> {result} </Text>
      <TextInput style={{width: 200, borderWidth: 1}}
      type="number"
      value= {number1}
      keyboardType="numeric"
      onChangeText = {number1 => setNumber1(number1)}
      />
      <TextInput style={{width: 200, borderWidth: 1}}
      type="number"
      value= {number2}
      keyboardType="numeric"
      onChangeText = {number2 => setNumber2(number2)}
      />     
      <View style={{flexDirection:'row'}}>
      <Button title="+" onPress={laskePlus} /> 
      <Button title="-" onPress={laskeMiinus}/>       
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
