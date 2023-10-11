import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScreenB() {

  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('screenC')
  }

  // useState
  const [Nome, setNome] = useState('');
  const [Idade, setIdade] = useState('');
  const [Nacionalidade, setNacionalidade] = useState('')
  const [Experiencia, setExperiencia] = useState('');


  function handleUserAdd() {
    console.log(
      "Nome Completo:" + Nome
      + "\nIdade:" + Idade
      + "\nNascionalidade: " + Nacionalidade
      + "\nExperiência: " + Experiencia
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preencha os Dados</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"

        value={Nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"

        value={Idade}
        onChangeText={setIdade}
      />

      <TextInput
        style={styles.input}
        placeholder="Nacionalidade"

        value={Nacionalidade}
        onChangeText={setNacionalidade}
      />

      <TextInput
        style={styles.input}
        placeholder="Experiencia"

        value={Experiencia}
        onChangeText={setExperiencia}
      />

      <TouchableOpacity style={styles.btn} onPress={openScreen}>
        <Text style={styles.btnTxt}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.info}>Nome: {Nome}</Text>
      <Text style={styles.info}>Idade: {Idade}</Text>
      <Text style={styles.info}>Nacionalidade: {Nacionalidade}</Text>
      <Text style={styles.info}>Experiencia: {Experiencia}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1E25',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',

    paddingBottom: 10,
  },

  input: {
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 5,
    fontWeight: "200",

    width: '60%',
    margin: 10,
    padding: 8,
    fontStyle: 'italic'

  },

  btn: {
    backgroundColor: 'red',
    fontSize: 14,
    width: '60%',

    margin: 10,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: 'center'
  },

  btnTxt: {
    color: '#fff',
    fontFamily: "Arial",
    fontWeight: "600",

  },

  info: {
    color: '#fff',
    fontFamily: "Arial",
    
  },
});

export default ScreenB;
