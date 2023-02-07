import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import { NavigationContainer } from'@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import History from './History';


export default function Calculator({navigation}) {

const [number1, setNumber1] = useState('');
const [number2, setNumber2] = useState('');
const [result, setResult] = useState('');
const [data, setData] = useState([]);
//const [text, setText] = useState('');
//const [history, setHistory] = useState('');
//const Stack = createNativeStackNavigator();

const plusResult = parseInt(number1)+ parseInt(number2);
const minusResult = number1 - number2;

function laskePlus(){
  setResult(plusResult)
  setNumber1('');
  setNumber2('');
  setData([...data, {key: number1+"+"+number2+"="+plusResult}]);
};

function laskeMiinus(){
  setResult(minusResult);
  setNumber1('');
  setNumber2('');
  setData([...data, {key: number1+"+"+number2+"="+minusResult}]);
};
//const showHistory =() =>{
//Navigation.navigate('History');
//};


  return (
    <View style={styles.container}>
      <Text> Result: {result} </Text>
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
      <View style={styles.buttons}>
      <Button title="+" onPress={laskePlus} /> 
      <Button title="-" onPress={laskeMiinus}/> 
      <Button title='HISTORY' onPress={()=> navigation.navigate('History', {data})}/>
      </View>
      <View >    
      <Text> History: </Text>     
      <FlatList
      data={data}
      renderItem= {( { item }) => <Text> {item.key} </Text>}
      />    
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
    marginTop:200,
  },
  buttons:{
    flexDirection:'row',
    marginTop: 10, 
    marginBottom: 10,
    justifyContent: 'space-around',
  },
});
