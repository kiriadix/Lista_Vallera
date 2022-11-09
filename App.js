import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {

  const [textItem, settextItem] = useState('')
  const [itemList, setItemList] = useState([])

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TextInput placeholder='Add item' style={styles.inputContainer} />
        <Button title='Add' color='#49DA9D' />
      </View>
      <View style={styles.listContainer}>
        <Text>CHUPAME EL PITO</Text>
        <Text>CHUPAME EL PITO</Text>
        <Text>CHUPAME EL PITO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:10, 
    marginTop:50
  },
  itemContainer:{
    flexDirection:'row', 
    justifyContent:'center',
    alignItems:'center'
  },
  inputContainer:{
    borderBottomColor:'black',
    borderBottomWidth:1,
    width:280,
    margin:8,
  },
  listContainer:{
    borderColor: 'black',
    borderRadius:10,
    borderWidth: 1,
    margin: 10,
    padding:5,
    justifyContent:'center',
    alignItems:'center'    
  }

});
