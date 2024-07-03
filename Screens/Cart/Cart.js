import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Checkout from "./Checkout";

export default function CartScreen({navigation}){
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
            <Header navigation={navigation}/>
            <Checkout/>
            </ScrollView>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF'
    },

    scroll: {
        flexGrow: 1,
        paddingBottom: 80
    }
})
