import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Footer(props){
  const {calculoSalarioNeto} = props;

  return (
    <View>
      <TouchableOpacity
        style={styles.botonCalcular}
        onPress={calculoSalarioNeto}>
        <Text style={styles.botonTexto}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  botonCalcular: {
    margin: 20,
    backgroundColor: '#364958',
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