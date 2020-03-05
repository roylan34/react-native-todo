import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Apps() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const update_name = () => {
        setName('Roelan Geil');
    };

    const on_change_name = (val) => {
        setName(val);
    }
    const on_change_age = (val) => {
        setAge(val);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.boldText}>
                {name} : {age}
            </Text>
            <View>
                <Text>Enter name:</Text>
                <TextInput style={styles.input}
                    autoCapitalize="words"
                    multiline
                    placeholder="e.g Juan Cruz"
                    onChangeText={(val) => on_change_name(val)} />
            </View>
            <View>
                <Text>Enter age:</Text>
                <TextInput style={styles.input}
                    keyboardType="numeric"
                    placeholder="e.g 20"
                    onChangeText={(val) => on_change_age(val)} />
            </View>

            <View style={styles.button} >
                <Button title="test" onPress={update_name} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boldText: {
        fontWeight: 'bold'
    },
    button: {
        marginTop: 20
    },
    input: {
        borderColor: '#777',
        borderWidth: 1,
        padding: 10,
        width: 200,
        marginTop: 20
    }
});
