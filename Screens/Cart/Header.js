import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header(){
    const navigation = useNavigation();
    return (
      <>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.return}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.logo}
              source={require("../../assets/Logo.png")}
            ></Image>
          </TouchableOpacity>
          <Image
            style={styles.search}
            source={require("../../assets/Search.png")}
          ></Image>
        </View>

        <View style={styles.checkoutContainer}>
          <Image
            style={styles.bottomLine}
            source={require("../../assets/bottomLine.png")}
          ></Image>
          <Text style={styles.checkout}>CHECKOUT</Text>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 20
    },

    return: {
        position: 'absolute',
        left: 160,
        top: 60
    },

    logo:{
        width: 99,
        height: 40,
    },

    search:{
        width: 30,
        height: 30,
        top:45,
        left: 330,
    },

    checkoutContainer:{
        position: 'relative',
        alignItems: 'center',
        marginTop: 20,
        height: 100,
    },

    checkout: {
        position: 'absolute',
        top: 70,
        right: 103,
        fontSize: 27,
        letterSpacing: 6,
        fontWeight: '300',
        alignSelf: 'center',
    },

    bottomLine: {
        position: 'absolute',
        top: 80,
        width: 200,
        height: 60,
        alignSelf: 'center',
    },
})
