import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Form(props) {
  const { setDatoA, setDatoB, setDatoC } = props;

  return (
    <View style={styles.formulario}>
      <TextInput
        style={styles.input}
        placeholder="Valor de a"
        keyboardType="numeric"
        onChange={(e) => setDatoA(e.nativeEvent.text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor de b"
        keyboardType="numeric"
        onChange={(e) => setDatoB(e.nativeEvent.text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor de c"
        keyboardType="numeric"
        onChange={(e) => setDatoC(e.nativeEvent.text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderTopColor: '#ffffff',
    borderRightColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#353535',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 7,
    margin: 20,
    padding: 10,
    fontSize: 18
  },
})
