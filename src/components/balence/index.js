import React from "react";
import { 
    Text, 
    View,
    StyleSheet, 
} from "react-native";

export default function Balance(){
    return (
        <View style={styles.container}>
            <Text>TESTE COMPONENTE</Text>
        </View>
    )
}  

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    }
})