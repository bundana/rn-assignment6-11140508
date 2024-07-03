import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useCart } from "../CartContext";

const products = [
    {id: '1', image: require('../../assets/dress1.png'), name: 'Office Wear', description: 'reversible angora cardigan', price: '$120', remove: require('../../assets/remove.png')},
    {id: '2', image: require('../../assets/dress2.png'), name: 'Black', description: 'reversible angora cardigan', price: '$120', remove: require('../../assets/remove.png')},
    {id: '3', image: require('../../assets/dress3.png'), name: 'Church Wear', description: 'reversible angora cardigan', price: '$120', remove: require('../../assets/remove.png')},
    {id: '4', image: require('../../assets/dress4.png'), name: 'Lamerei', description: 'reversible angora cardigan', price: '$120', remove: require('../../assets/remove.png')},
    {id: '5', image: require('../../assets/dress5.png'), name: '21WN', description: 'reversible angora cardigan', price: '$120', remove: require('../../assets/remove.png')},
    {id: '6', image: require('../../assets/dress6.png'), name: 'Lopo', description: 'reversible angora cardigan', price: '$120', remove: require('../../assets/remove.png')},
    {id: '7', image: require('../../assets/dress7.png'), name: '21WN', description: 'reversible angora cardigan', price: '$120', remove: require('../../assets/remove.png')},
    {id: '8', image: require('../../assets/dress3.png'), name: 'lame', description: 'reversible angora cardigan', price: '$120', remove: require('../../assets/remove.png')},
];

function ProductCard({product}){
    const {dispatch} = useCart()

    const addToCart = () => {
        dispatch({type: 'ADD_TO_CART', payload: product})
    }
    return (
      <View style={styles.card}>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <TouchableOpacity style={styles.addProduct} onPress={addToCart}>
          <Image
            style={styles.addButton}
            source={require("../../assets/add_circle.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    );
}

export default function Products() {
    return(
        <View style={styles.container}>
            {products.map(product => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 33,
        bottom: 4,
        
      },
    
      card: {
        width: '45%', 
        marginBottom: -40,
        padding: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        right: 20
      },
    
      image: {
        width: 180,
        height: 250,
      },
    
      name: {
        fontSize: 18,
        fontWeight: '300',
        marginVertical: 5,
        textAlign: 'left',
        left: 4
       
      },
    
      description: {
        fontSize: 14,
        color: '#737373',
        textAlign: 'left',
        left: 4,
        bottom: 3,
        fontWeight: '300',
      },
    
      price: {
        fontSize: 16,
        fontWeight: '300',
        color: '#D18035',
        marginVertical: 5,
        textAlign: 'left',
        left: 4,
        bottom: 5
      },
    
      addButton: {
        width: 30,
        height: 30,
        bottom: 132,
        left: 145,
        
      },
    });