import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import creadorData from '../data/creador';
import Boton from '../components/Boton';

const Ejercicio = ({ navigation }) => {
    const irPantalla2 = () => {
        navigation.navigate('Pantalla2');
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Datos estudiantes</Text>
                    <Text style={styles.title}>Nombres:</Text> 
                    <Text style={styles.description}>Ricardo Nicolas Melara</Text>
                    <Text style={styles.description}>Manuel Enrique Contreras</Text>
                    <Text style={styles.title}>Carnet:</Text> 
                    <Text style={styles.description}> Ricardo: 20220685</Text>
                    <Text style={styles.description}> Manuel: 20220685</Text>
                    <Text style={styles.title}>Imagen:</Text> 
                    <Text style={styles.description}>Ricardo</Text>
                    <Image style={styles.image} source={require('../img/ricardo.jpg')}/>
                    <Text style={styles.description}>Manuel</Text>                    
                    <Image style={styles.image} source={require('../img/manuel.jpeg')}/>

                </View>
                <Boton
textoBoton='Regresar a Inicio'
accionBoton={irPantalla2}
/>
            </View>
        </View>
    );
};

export default Ejercicio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    lista: {
        fontSize: 16,
        lineHeight: 24,
        marginLeft: 20, // Añade un margen a la izquierda para simular la lista
        fontWeight: 'bold', // Opcional: Puedes aplicar cualquier otro estilo que desees
        color: 'black', // Opcional: Color del texto de la lista
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});
