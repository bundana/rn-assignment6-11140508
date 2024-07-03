import { StyleSheet, View, Text, Image } from "react-native";

export default function OurStory(){
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>OUR STORY</Text>
        </View>
        <View style={styles.circle1}>
          <Image
            style={styles.listView}
            source={require("../../assets/Listview.png")}
          ></Image>
        </View>
        <View style={styles.circle2}>
          <Image
            style={styles.filter}
            source={require("../../assets/Filter.png")}
          ></Image>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        width: '100%',
        
    },

    title:{
        fontSize: 28,
        top: 25,
        left: 20,
        fontWeight: '300'
    },

    listView: {
        top: 10,
        left: 12,
        width: 30,
        height: 30
    },

    circle1:{
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#FAFAFD',
        top: 15,
        left: 50
    },

    filter: {
        top: 12,
        left: 10,
        width: 30,
        height: 30
    },

    circle2: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#FAFAFD',
        top: 15,
        right: 20
    }
})