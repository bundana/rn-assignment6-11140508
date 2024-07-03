import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header";
import OurStory from "./OurStory";
import Products from "./Products";

function HomeScreen({navigation}){
    return(
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
        <Header navigation={navigation}/>
        <OurStory/>
        <Products/>
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF'
    },

    scroll:{
        flexGrow: 1
    }
})

export default HomeScreen;