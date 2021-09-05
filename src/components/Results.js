import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Results(props) {
  const { total1, mensajeError } = props;

  return (
    <View style={styles.contenido}>
      {total1 && (
        <View>
          <Text style={styles.titulo}>Resultados</Text>
          <DataResult title="X1: " value={total1.x1} />
          <DataResult title="X2: " value={total1.x2} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{mensajeError}</Text>
      </View>
    </View>
  );
}

function DataResult(props){
  const {title, value} = props;

  return(
    <View style={styles.valor}>
      <Text style={styles.valores}>{title}</Text>
      <Text style={styles.valores}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#d9d9d9',
    margin: 15,
    padding: 10,
    textAlign: 'justify'
  },

  titulo: {
    color: '#284b63',
    fontWeight: 'bold'
  },

  valor: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  valores: {
    color: '#284b63',
    fontSize: 18
  },

  error: {
    fontWeight: 'bold',
    color: '#284b63',
    fontSize: 18
  }
})