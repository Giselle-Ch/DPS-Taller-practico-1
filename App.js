import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';

import Form from './src/components/Form';
import Button from './src/components/Button';
import Results from './src/components/Results';

export default function App() {
  //Declaración de vairables
  const [datoA, setDatoA] = useState(null);
  const [datoB, setDatoB] = useState(null);
  const [datoC, setDatoC] = useState(null);
  const [total1, setTotal1] = useState(null);
  const [mensajeError, setmensajeError] = useState('');

  //Cálculo de Ecuación Cuadrática
  const calculo = () => {
    reset();

    if (!datoA && !datoB && !datoC) {
      //Si todos los datos están vacíos, manda una alerta
      setmensajeError('Favor ingresar todos los datos');
    }

    if (!datoA || datoA == 0) {
      //Si alguno de los campos esta vacío, manda una alerta especifícando el campo a llenar
      setmensajeError('Favor ingresar un valor a y que sea diferente de 0');
    } else if (!datoB) {
      setmensajeError('Favor ingresar un valor b');
    } else if (!datoC) {
      setmensajeError('Favor ingresar un valor c');
    } else {
      //Cálculo de ecuación cuadrática
      const calculo1 = Math.pow(datoB, 2) - 4 * datoA * datoC;

      if (calculo1 < 0) {
        setmensajeError("No es posible calcular la raíz cuadrada de un número negativo");
      } else {
        const calculo2 = Math.sqrt(calculo1);
        const calculoPositivo = (-datoB + calculo2) / (2 * datoA);
        const calculoNegativo = (-datoB - calculo2) / (2 * datoA);

        setTotal1({
          x1: calculoPositivo.toFixed(2).replace('.', ','),
          x2: calculoNegativo.toFixed(2).replace('.', ','),
        });
      }
    }
  }; 
  
  const reset = () => {
    setTotal1(null);
    setmensajeError("");
  };

  //Contenido
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Ecuación Cuadrática</Text>
        </View>
        <Form setDatoA={setDatoA} setDatoB={setDatoB} setDatoC={setDatoC} />
        <Button calculo={calculo}></Button>
        <Results 
          total1={total1} 
          mensajeError={mensajeError}
        />
      </View>
    </>
  );
}

//Estilos
const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
    backgroundColor: '#ffffff'
  },

  header: {
    textAlign: 'center',
    color: '#2ec4b6',
    fontSize: 25
  },
});
