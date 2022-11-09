import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import Footer from './components/Footer';
import Item from './components/Item';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {

  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [idItem, setIdItem] = useState(1)

  const onHandleChangeItem = (t) => {
    setTextItem(t)
  }

  const addItem = () => {
    //añadimos nuevo element manteniendo los anteriores
    setItemList ( itemsActuales => [
      ...itemsActuales, 
      {
        id:(idItem).toString(),
        value:textItem
      }
    ])

    //aumentamos el controlador de id
    setIdItem(idItem + 1)

    //vaciamos el text imput
    setTextItem('')
    
  }

  const deleteItem = (id) => {
    const newItems = itemList.filter((item) => item.id !== id)
    setItemList(newItems)
  }

  const renderItem = ({item}) => (
    <Item values={item} action={deleteItem} />
  )

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TextInput 
          placeholder='Add item' 
          style={styles.input}
          value={textItem}
          onChangeText={onHandleChangeItem}
        />
        <Button title='Add' color='#49DA9D' onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:10, 
    marginTop:50,
    flex:1
  },
  itemContainer:{
    flexDirection:'row', 
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  input:{
    borderBottomColor:'black',
    borderBottomWidth:1,
    width:280,
    margin:8,
  },
  listContainer:{
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    flex:10  
  }
});
