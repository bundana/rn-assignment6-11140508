import { StyleSheet, View, Text, Image} from "react-native";
import { useCart } from "../CartContext";

export default function Footer(){
    const {cart} = useCart();

    const totalAmount = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0)
    return (
      <View style={styles.footer}>
        <View style={styles.checkoutButton}>
          <Image
            style={styles.shoppingBag}
            source={require("../../assets/shoppingBag.png")}
          ></Image>
          <Text style={styles.checkout}>CHECKOUT</Text>
        </View>

        <View style={styles.total}>
          <Text style={styles.totalText}>EST. TOTAL</Text>
          <Text style={styles.totalAmount}>${totalAmount.toFixed(0)}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        height: 150
    },

    checkoutButton: {
        flexDirection: 'row',
        backgroundColor: '#000000',
        borderWidth: 200,
        borderTopWidth: 32,
        borderBottomWidth: 32,
        height: 100,
        left: 19,
        top: 32,
    },

    shoppingBag: {
        tintColor: 'white',
        right: 40
    },

    checkout: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '300',
        letterSpacing: 6,
        width: 172,
        right: 5
        
    },

    totalText: {
        fontSize: 18,
        fontWeight: '300',
        color: '#000000',
        bottom: 10,
        right: 345,
        letterSpacing: 4
    },

    totalAmount:{
        fontSize: 20,
        fontWeight: '400',
        color: '#D18035',
        bottom: 34,
        right: 35,
        letterSpacing: 4
    }




})