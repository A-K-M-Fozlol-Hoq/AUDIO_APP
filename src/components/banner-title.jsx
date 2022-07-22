import { Image, StyleSheet } from "react-native";
import { View } from "react-native";
import React from 'react'
import Text from './text/text'
import { colors } from '../theme'

export default function BannerTitle() {
    
  return (
    <View style={styles.container}>
       <Image style={{width: 350, height: '100%',transform: [{ scale: 0.40 }]}} source={require("../../assets/images/audiophile.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.black,
        justifyContent: "center",
        alignItems: "center",
    }
});