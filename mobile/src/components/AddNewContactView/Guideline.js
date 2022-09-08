import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import colors from '../../../assets/colors'

class Guideline extends Component {
    render() {
        return (
            <View style={styles.guidelineOuterContainer}>
                <View style={styles.guidelineInnerContainer}>
                    <Text style={styles.guidelineText}>Перейдіть на вкладку «Профіль» на мобільному телефоні вашого друга та відскануйте його QR-код</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    guidelineOuterContainer: {
        position: 'absolute',
        top: '10%',
        width: Dimensions.get('window').width,
        padding: 20
    },
    guidelineInnerContainer: {
        backgroundColor: colors.pink.one + '80',
        padding: 20,
        borderRadius: 20
    },
    guidelineText: {
        fontSize: 16,
        color: colors.white.one,
        textAlign: 'center'
    }
})


export default Guideline