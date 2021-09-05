import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Footer(props){
  const {calculo} = props;

  return (
    <View>
      <TouchableOpacity
        style={styles.botonCalcular}
        onPress={calculo}>
        <Text style={styles.botonTexto}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  botonCalcular: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    height: 40
  },

  botonTexto: {
    color: 'white',
    fontSize: 20,
    padding: 7,
    textAlign: 'center'
  },
})