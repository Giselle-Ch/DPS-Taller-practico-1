import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Result(props) {
  const { nombre, salario, total, mensajeError } = props;

  return (
    <View style={styles.contenido}>
      {total && (
        <View>
          <Text style={styles.titulo}>Resultados</Text>
          <DataResult title="Empleado: " value={nombre} />
          <DataResult title="Salario Base: " value={salario} />
          <DataResult title="Salario Neto: " value={`${total.salarioNeto}`} />
          <Text style={styles.titulo}>Descuentos</Text>
          <DataResult title="ISS: " value={`${total.iss}`} />
          <DataResult title="AFP: " value={`${total.afp}`} />
          <DataResult title="Renta: " value={`${total.renta}`} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{mensajeError}</Text>
      </View>
    </View>
  );
}

function DataResult(props) {
  const { title, value } = props;

  return (
    <View style={styles.valor}>
      <Text style={styles.valores}>{title}</Text>
      <Text style={styles.valores}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#e8eddf',
    margin: 15,
    padding: 10,
    textAlign: 'justify',
    borderRadius: 5
  },

  titulo: {
    color: '#284b63',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },

   valor: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  valores: {
    color: '#333533',
    fontSize: 18
  },

  error: {
    color: '#b0413e',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
});
