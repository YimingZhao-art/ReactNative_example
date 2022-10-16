import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Alert, Image } from 'react-native'
import RNFS from 'react-native-fs'
import RNFetchBlob from "rn-fetch-blob";

const fs = RNFetchBlob.fs;
let path = "/Users/yimingzhao/Documents/Screen/IMG_4919.JPG"
const uri = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg"

export default class index extends Component {
    getData = async () => {
        let key = "66af57421ee24b9a96d26066408e18e6"

        const imageUrl = "https://images.unsplash.com/photo-1526045612212-70caf35c14df";


        let imagePath = null;
        var data1 = null;
        RNFetchBlob.config({
            fileCache: true
        })
            .fetch("GET", uri)
            // the image is now dowloaded to device's storage
            .then(resp => {
                // the image path you can use it directly with Image component
                imagePath = resp.path();
                return resp.readFile("base64");
            })
            .then(base64Data => {
                // here's base64 encoded image

                data1 = base64Data
                //console.log(data)
                // remove the file from storage
                return fs.unlink(imagePath);
            });

        let url = `https://wevision-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/254bb5d1-02f0-4fac-a320-993db2b14713/classify/iterations/Iteration2/url`


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Prediction-Key': '66af57421ee24b9a96d26066408e18e6'
            },
            data: {
                'Url': imageUrl
            }
        }).then((res) => {
            console.log(res.json())
            Alert.alert("成功", "请求成功")

        }).catch((err) => {
            Alert.alert('报错了', JSON.stringify(err))
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title='click' onPress={this.getData} />
                <Image
                    style={{ width: '50%', height: '50%' }}
                    source={{ uri: uri }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})