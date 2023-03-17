import { Feather } from "@expo/vector-icons";
import React from "react";
import {
     View,
     StyleSheet,
     Text,
     StatusBar, 
     TouchableOpacity} from "react-native";

export default function Header({ name }){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.userName}>
                    {name}
                </Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={26} color='#fff'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#8C031C',
        flexDirection:'row',
        paddingStart:16,
        paddingEnd:16,
        paddingBottom:44,
    },
    content:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    userName:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
    },
    buttonUser:{
        height:44,
        width:44,
        backgroundColor:'rgba(255,255,255, 0.5)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:44 / 2,
    }
})