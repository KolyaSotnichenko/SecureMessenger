import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const qrImage = require('../../../assets/images/qrcode.png')
import colors from '../../../assets/colors'

class ThirdSlide extends Component {
    render() {
        return (
            <LinearGradient style={styles.itemContainer} colors={['#A8C1E2', colors.pink.two]}>
                <View style={styles.imageContainer}>
                    <View style={styles.imageInnerContainer}>
                        <Image source={qrImage} resizeMode='contain' style={styles.imageInnerContainer} />
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Поділитися контактами</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>Легко додавайте нові контакти, відсканувавши QR-код із профілю.
                         Цей код міститиме інформацію про відкритий ключ, який використовуватиметься для шифрування вашого спілкування.</Text>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        width: Dimensions.get('window').width,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    imageInnerContainer: {
        width: 300,
        height: 300,
    },
    infoContainer: {
        paddingBottom: 150,
        padding: 20,
        paddingRight: 50,
    },
    titleContainer: {

    },
    descriptionContainer: {
        paddingTop: 20,
    },
    titleText: {
        color: colors.black.one,
        fontSize: 40,
        fontWeight: 'bold'
    },
    descriptionText: {
        color: colors.black.one,
        fontSize: 18,
    }
})

export default ThirdSlide