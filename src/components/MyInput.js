import React from 'react'
import { TextInput, View, StyleSheet, Dimensions } from 'react-native'

const MyInput = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                keyboardType={props.type}
                autoCapitalize="none"
                placeholder={props.myPlace}
                onChangeText={props.textChange}
                maxLength={20}
                style={styles.textStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
       backgroundColor:"#ef6c00",
        marginLeft:15,
        width: Dimensions.get("window").width / 1.1,
        height: 35,
        borderRadius: 15,
        marginTop:12
    },
    textStyle:{
        marginLeft:10
    }
})

export  {MyInput};