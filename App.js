import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';
export default function App(){
    const [state, setState] = useState({
      campos: {
        campo1:0,
        campo2:0,
        campo3:0,
        campo4:0,
      }
    })

  const changeHandler = (valor,campo)=>{
    if(campo=="campo1"){
      setState({
        campos:{
          campo1: valor
        }
      });
    }else if(campo=="campo2"){
      setState({
        campos:{
          campo2: valor
        }
      });
    }else if(campo=="campo3"){
      setState({
        campos:{
          campo3: valor
        }
      });
    }else if(campo=="campo4"){
      setState({
        campos:{
          campo4: valor
        }
      });
    }
  }

  const validar = () =>{
    if(state.campos.campo1 <=0 || state.campos.campo2 <=0 || state.campos.campo3 <=0 || state.campos.campo4 <=0 ){
      console.log("No se aceptan numeros menores o iguales a cero")
    }else{
      var mayor = state.campos.campo1;
      var menor = state.campos.campo1;
      //hallar el mayor
      if(state.campos.campo2 > mayor){
        mayor = state.campos.campo2
      }else if(state.campos.campo3 > mayor){
        mayor = state.campos.campo3
      }else if(state.campos.campo4 > mayor){
        mayor = state.campos.campo4
      }
      //hallar el menor
      if(state.campos.campo2 < menor){
        menor = state.campos.campo2
      }else if(state.campos.campo3 < menor){
        menor = state.campos.campo3
      }else if(state.campos.campo4 < menor){
        menor = state.campos.campo4
      }
      //verificar operaciones
      if(menor>10){
        mayor = mayor+10;
      }     
      if(mayor<50){
        menor = menor-5;
      } 
      //mostrar resultados
      console.log('El número mayor y el número menor ahora son: '+mayor+' y: '+menor)
    }
    

    
  }

    return (
      <SafeAreaView style={styles.container}>
        <TextInput
                style={styles.campos}
                placeholder="Ingrese un número"
                onChangeText={(text) =>changeHandler(text,"campo1")}
                keyboardType="number-pad"
              />
              <TextInput
                style={styles.campos}
                placeholder="Ingrese un número"
                onChangeText={(text) =>changeHandler(text,"campo2")}
                keyboardType="number-pad"
              />
              <TextInput
                style={styles.campos}
                placeholder="Ingrese un número"
                onChangeText={(text) =>changeHandler(text,"campo3")}
                keyboardType="number-pad"
              />
              <TextInput
                style={styles.campos}
                placeholder="Ingrese un número"
                onChangeText={(text) =>changeHandler(text,"campo4")}
                keyboardType="number-pad"
              />
              <Text>&nbsp;</Text>

              <Button
                style={styles.btn}
                title="Validar"
                onPress={() => validar()}
              />

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  } 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  campos: {
    color: 'black',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20, 
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'black',
    paddingRight: 12
  },
});
