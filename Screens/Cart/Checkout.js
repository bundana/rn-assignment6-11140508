import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useCart } from "../CartContext";

const CartList = ({item}) => {
    const {dispatch} = useCart()

    const removeFromCart = () => {
        dispatch({type: 'REMOVE_FROM_CART', payload: item.id})
    }

    return(
    <View style={styles.cartList}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.productDetails}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
        <View>
            <TouchableOpacity style={styles.removeButton} onPress={removeFromCart}>
                <Image source={item.remove} style={styles.removeImage} />
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default function Checkout(){
    const {cart} = useCart();
    
    return(
        <View style={styles.container}>
            {cart.map(item => (
                <CartList key={item.id} item={item}></CartList>
            ))}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFF',
    },

    cartList: {
        flexDirection: 'row',
        padding: 13,
        alignItems: 'center',
        position: 'relative',
        top: 15,
        
    },

    productImage: {
        width: 90,
        height: 120,
        marginRight: 11,
        
        
    }, 

    productDetails:{
        flex: 1,
    },

    name: {
        fontSize: 15,
        letterSpacing: 4,
        fontWeight: '400'
    },

    description:{
        fontSize: 15,
        fontWeight: '400',
        color: '#737373'
    },

    price: {
        fontSize: 15,
        color: '#D18035'
    },

    removeButton: {
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center',
        height: '100%',
        right: 30,
    },

    removeImage:{
        width: 20,
        height: 20,
    },
    
})