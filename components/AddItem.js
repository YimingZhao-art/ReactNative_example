import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ addItem }) => {
    const [text, setText] = useState('');
    return (
        <View>
            <TextInput
                placeholder='填入要新加的购物项目'
                style={styles.input}
                onChangeText={text => setText(text)}
                value={text}
            />

            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}
            >
                <Text style={styles.btnText}>
                    <Icon name='plus' />
                    添加
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'blue',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default AddItem;
