import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {

    const [people, setPeople] = useState([
        { name: 'Roy', id: '22' },
        { name: 'Juan55', id: '23' },
        { name: 'Pedro344', id: '25' },
        { name: 'S1', id: '21' },
        { name: 'G2', id: '27' },
        { name: 'H5', id: '28' },
        { name: 'J7', id: '24' },
        { name: 'K8', id: '29' },
        { name: 'N9', id: '30' }
    ]);

    const onPressPeople = (name) => {

        setPeople((prevPeople) => {
            return prevPeople.filter(item => item.name != name)
        })
    }

    return (
        <View style={styles.container}>
            {/* 
            {
                (error === false ? <Text>Something went wrong!!</Text>
                    :
                    <ScrollView style={{ width: '100%' }}>
                        {
                            people.map(item => (
                                <View key={item.name} style={styles.box}>
                                    <Text style={[styles.textCenter]}>{item.name}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>)
            } */}

            <FlatList
                numColumns={2}
                style={{ width: '100%' }}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.box} onPress={() => onPressPeople(item.name)}>
                        <Text style={[styles.textCenter]}>{item.name}</Text>
                    </TouchableOpacity>
                )
                }
            />

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
        width: '50%',
        backgroundColor: '#323232',
        padding: 40,
        marginTop: 10,
        marginLeft: 10,
    },
    textCenter: {
        textAlign: 'center',
        color: "#fff"
    }
});
