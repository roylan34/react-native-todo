import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';



export default function TodoItem(props) {
    console.log(props);
    return (
        <TouchableOpacity onPress={() => props.onPressTodo(props.item)}>
            <Text style={styles.box}>{props.item}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#cce6ff',
        borderColor: "#99ceff",
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        color: "#000",

    }
});