import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Alert, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function ScreenC() {

    const navigation = useNavigation()
    const footballPlayers = [
        {
            name: "Cristiano Ronaldo",
            position: "Forward",
            age: 36,
        },
        {
            name: "Lionel Messi",
            position: "Attacking Midfielder",
            age: 34,
        },
        {
            name: "Neymar Jr.",
            position: "Forward",
            age: 29,
        },
        {
            name: "Kylian Mbappé",
            position: "Forward",
            age: 23,
        },
        {
            name: "Sergio Ramos",
            position: "Defender",
            age: 35,
        },
        {
            name: "Kevin De Bruyne",
            position: "Midfielder",
            age: 30,
        },
        {
            name: "Robert Lewandowski",
            position: "Forward",
            age: 32,
        },
        {
            name: "Virgil van Dijk",
            position: "Defender",
            age: 30,
        },
        {
            name: "Luka Modric",
            position: "Midfielder",
            age: 35,
        },
        {
            name: "Erling Haaland",
            position: "Forward",
            age: 21,
        },
    ];

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.titulo}>Consulta do Time</Text>
                <Text style={styles.subtitulo}>VASCO DA GAMA</Text>

                <FlatList
                    style={styles.fundo}
                    data={footballPlayers}
                    renderItem={(
                        ({ item }) => (
                            <View style={styles.consulta}>
                                <Text>Nome: {item.name}</Text>
                                <Text>Posição: {item.position}</Text>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnTxt}>Editar</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    )} />
            </View >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a0a0a0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30,
        textAlign: 'center',
    },

    subtitulo:{
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20
    },

    input: {
        marginTop: '15%',
        padding: '4%',
        width: 350,
        backgroundColor: '#ebebeb',
        color: '#7d7d7d',
        fontSize: 16,
        borderRadius: 10,
    },

    botao: {
        marginTop: 50,
        marginBottom: 175,
        width: 210,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00589F',
        borderRadius: 150,
    },

    textBotao: {
        fontSize: 15,
        color: 'white',
    },
    consulta: {
        margin: 10,
        width: 300,
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 10
    },
    fundo: {
        backgroundColor: '#000',
        borderRadius: 10,
    },
    btn: {
        backgroundColor: '#909090',
        fontSize: 14,
        width: '30%',
        margin: 10,
        padding: 15,
        marginBottom: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: '35%',

    },

    btnTxt: {
        color: '#fff',
        fontFamily: "Arial",
        fontWeight: "600",
    },
});


export default ScreenC;
