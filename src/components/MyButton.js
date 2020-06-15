import React from 'react';
import {Text,StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const MyButton = props =>{
    return(
        
        <TouchableOpacity style={styles.buttonContainer} onPress={props.myPress}>
            <Text style={styles.textContainer}>{props.myTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        
        backgroundColor:"#bb4d00",
        width: Dimensions.get("window").width / 4,
        height: 35,
        alignItems: "center",
        borderRadius: 15,
        padding:5,
        marginTop:12,
        alignSelf:"center"
        
    },

    textContainer:{
        color:"white",
        fontWeight:"bold"
    }
})

export  {MyButton};