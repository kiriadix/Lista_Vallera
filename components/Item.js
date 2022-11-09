import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Item = ({values, action}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>- {values.value}</Text>
      <Button title='Delete' color='red' onPress={() => action(values.id)}/>
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
    margin: 2
  },
  text:{
    margin:8,
    width:220
  }
})