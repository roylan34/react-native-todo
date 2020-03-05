import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.appName}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#66b3ff',
        height: 80,
        paddingTop: 40,
    },
    appName: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    }
});