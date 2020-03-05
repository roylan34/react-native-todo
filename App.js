import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Header from './component/Header';
import TodoItem from './component/TodoItem';

export default function App() {

    const [todos, setTodos] = useState([
        { text: 'Roy', id: '22' },
        { text: 'Juan55', id: '23' },
        { text: 'Pedro344', id: '25' },
        { text: 'S1', id: '21' },
        { text: 'G2', id: '27' },
        { text: 'H5', id: '28' },
        { text: 'J7', id: '24' },
        { text: 'K8', id: '29' },
        { text: 'N9', id: '30' }
    ]);

    const onPressTodo = (text) => {

        setTodos((prevItem) => {
            return prevItem.filter(item => item.text != text)
        })
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <FlatList
                    style={{ display: "flex" }}
                    data={todos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TodoItem item={item.text} onPressTodo={onPressTodo} />
                        )
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: "flex"
    },
    content: {
        padding: 40
    }
});
