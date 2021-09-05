import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Form(props) {
  const { setNombre, setSalario } = props;

  return (
    <View style={styles.formulario}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChange={(e) => setNombre(e.nativeEvent.text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Salario"
        keyboardType="decimal-pad"
        onChange={(e) => setSalario(e.nativeEvent.text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    height: 40,
    borderTopColor: '#c9e4ca',
    borderRightColor: '#c9e4ca',
    borderLeftColor: '#c9e4ca',
    borderBottomColor: '#353535',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 7,
    margin: 20,
    padding: 10,
    fontSize: 18
  }
})
