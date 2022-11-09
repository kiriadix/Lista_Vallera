import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Item = ({values, del, upd}) => {
  const colors = {'0':'#F8F0B9', '1':'#D4F4BC'}

  return (
    <View style={{...styles.container, backgroundColor:colors[values.estatus]}}>
      <Text style={styles.text}>- {values.value}</Text>
      <View style={styles.btn}>
        <Button title='complete' color='#13C23B'/>
      </View>
      <View style={styles.btn}>
        <Button title='Delete' color='red' onPress={() => action(values.id)}/>
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
    borderColor: 'black',
    borderRadius:10,
    borderWidth: 1,
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