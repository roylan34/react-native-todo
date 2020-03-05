import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

    const [people, setPeople] = useState([
        { name: 'Roy', age: 22 },
        { name: 'Juan', age: 23 },
        { name: 'Pedro', age: 25 },
        { name: 'S1', age: 21 },
        { name: 'G2', age: 27 },
        { name: 'H5', age: 28 },
        { name: 'J7', age: 24 },
        { name: 'K8', age: 29 },
        { name: 'N9', age: 30 }
    ]);

    const update_name = () => {
        setName('Roelan Geil');
    };

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                {
                    people.map(item => (
                        <View key={item.name} style={styles.box}>
                            <Text style={[styles.textCenter]}>{item.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    box: {
        backgroundColor: '#323232',
        padding: 20,
        marginTop: 10,
    },
    textCenter: {
        textAlign: 'center',
        color: "#fff"
    }
});
