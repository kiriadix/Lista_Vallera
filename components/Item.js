import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Item = ({values, deleteItem, updateItem}) => {
  
  const [data, setData] = useState({c:'#F8F0B9',w:150})

  const update = () => {
    setData({c:'#D4F4BC',w:220})
    updateItem(values.id)
  }

  return (
    <View style={{...styles.container, backgroundColor:data.c}}>
      <Text style={{...styles.text, width:data.w}}>- {values.value}</Text>
      
      {values.estatus === 0 ? 
        (<View style={styles.btn}>
          <Button title='complete' color='#13C23B' onPress={update}/>       
        </View> ) 
      : 
        (<View></View>)}
        
      <View style={styles.btn}>
        <Button title='Delete' color='red' onPress={() => deleteItem(values.id)}/> 
      </View>         
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  container:{ 
    flexDirection:'row', 
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    width:320,
    height:50,
    margin: 2,
  },
  text:{
    margin:8,
    width:150
  },
  btn:{
    margin:2
  }
})