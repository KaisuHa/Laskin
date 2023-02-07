import React from'react';
import { View, Text, Button, FlatList } from'react-native';
import Calculator from './Calculator';


export default function History (route) { 
    const data = route.params;
    return (  
        <View >    
        <Text> History: </Text>     
        <FlatList
        data={data}
        renderItem= {({ item }) => <Text> {item.key} </Text>}
        />    
        </View> 
    );
};

//<Button title='Settings' onPress={()=> navigation.navigate('Settings', {user: 'Kaisu'})}/>