import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TextInput, TouchableHighlight } from 'react-native'

export default class SchoolBoard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../src/assets/logo.png')}
                    style={styles.logo}>
                </Image>
                <Image
                    source={require('../src/assets/group.png')}
                    style={styles.icons}>
                </Image>
                <Text style={styles.txt1}>
                    Select you school board
                </Text>
                <View style={styles.view1}>
                    <View style={{ marginTop: 30, alignItems: 'center' }}>
                        <TextInput style={styles.inputbox1}
                            placeholder='Select board'
                            keyboardType='email-address'
                            placeholderTextColor={'#446270'}
                            onPress={() => this.Onfocus()}>
                        </TextInput>
                        <TextInput style={styles.inputbox1}
                            placeholder='Select class'
                            keyboardType='email-address'
                            placeholderTextColor={'#446270'}
                            onPress={() => this.Onfocus()}
                            scrollEnabled={true}>
                        
                        </TextInput>
                        <TouchableHighlight style={styles.touchable}
                            onPress={() => this.props.navigation.navigate('AppTour')}>
                            <Text style={styles.touchbletxt}>
                            Continue
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    }, logo: {
        width: 169,
        height: 42,
        resizeMode: "contain",
        marginTop: 20,
        backgroundColor: 'white'
    },
    icons: {
        width: 141,
        height: 128,
        resizeMode: 'contain',
        marginTop: 60
    },
    txt1: {
        height: 24,
        fontSize: 20,
        fontFamily: 'Gilroy ☞',
        fontWeight: '700',
        color: "#002333",
        marginTop: 120
    },
    view1: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#002333',
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 20
    },
    inputbox1: {
        width: 311,
        height: 51,
        borderColor: '#13394A',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 8,
        backgroundColor: '#062E40',
        paddingLeft: 15,
        borderRadius: 5,
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        fontWeight: '500'
    },
    touchable: {
        width: 311,
        height: 56,
        backgroundColor: '#00C458',
        borderRadius: 5,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchbletxt: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '700',
    },

})