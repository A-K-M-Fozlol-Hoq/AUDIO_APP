import React, {useState, useEffect} from 'react'
import { View, Pressable, StyleSheet, unstable_batchedUpdates } from 'react-native'
import { colors } from '../theme'
import Text from './text/text'

export default function CounterButton({amount, setAmount, style}) {
    // const [count, setCount] = useState(initialValue ?? 0)
    const onIncrement = () => { 
        // setCount(prevCount => prevCount + 1)
        setAmount(amount + 1)

   
    }
    const onDecrement = () => {
        if (amount > 0) {
            // setCount(prevCount => prevCount - 1)
            setAmount(amount - 1)
        }
    }

    return (
        <View style={[styles.wrapper, style]}>
            <Pressable onPress={onDecrement} style={styles.counterButton}>
                <Text  style={styles.btnText} textColor="#c4c4c4">-</Text>
            </Pressable>
            <Text>
                {amount}
            </Text>
            <Pressable onPress={onIncrement} style={styles.counterButton}>
                <Text style={styles.btnText} textColor="#c4c4c4">+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        width: 120, 
        height: 48,
        flexDirection: 'row',
        backgroundColor: colors.grey
    },
    counterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    btnText: {
        fontWeight: 'bold',
    },
    primary: {
        backgroundColor: colors.primary
    },
    secondary: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.black,
    }
})