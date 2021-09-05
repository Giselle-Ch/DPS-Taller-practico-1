import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

import Form from './src/components/Form';
import Button from './src/components/Button';
import Results from './src/components/Result';

export default function App() {
  //Declaración de vairables
  const [nombre, setNombre] = useState(null);
  const [salario, setSalario] = useState(null);
  const [total, setTotal] = useState(null);
  const [mensajeError, setmensajeError] = useState('');

  const calculoSalarioNeto = () => {
    reset();

    if (!nombre || !salario) {
      //Si todos los datos están vacíos, manda una alerta
      setmensajeError('Favor ingresar todos los datos');
    }
  

    //Cálculo de Salario Neto
    const calculoISS = salario * 0.03;
    const calculoAFP = salario * 0.04;
    const calculoRENTA = salario * 0.05;
    const calculoSNeto = salario - (calculoISS + calculoAFP + calculoRENTA);

    setTotal({
      iss: calculoISS.toFixed(2).replace('.', ','),
      afp: calculoAFP.toFixed(2).replace('.', ','),
      renta: calculoRENTA.toFixed(2).replace('.', ','),
      salarioNeto: calculoSNeto.toFixed(2).replace('.', ','),
    });
  };

  const reset = () => {
    setTotal(null);
    setmensajeError('');
  };

  //Contenido
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Salario Neto</Text>
        </View>
        <Form setNombre={setNombre} setSalario={setSalario} />
        <Button calculoSalarioNeto={calculoSalarioNeto}></Button>
        <Results nombre={nombre} salario={salario} total={total} mensajeError={mensajeError} />
      </View>
    </>
  );
}

//Estilos
const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
    backgroundColor: '#c9e4ca',
  },

  header: {
    textAlign: 'center',
    color: '#242423',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 3
  },
});
