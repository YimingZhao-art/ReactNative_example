import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: 'darkslateblue',
        padding: 15
    },
    text: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
});

export default Header;