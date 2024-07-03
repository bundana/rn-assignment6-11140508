import React, {createContext, useReducer, useContext, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);
        case 'SET_CART':
            return action.payload;
        default:
            return state;
    }
}

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, [])

    useEffect(() => {
        const loadCart = async () => {
            const storedCart = await AsyncStorage.getItem('cart')
            if (storedCart){
                dispatch({type: 'SET_CART', payload: JSON.parse(storedCart)})
            }
        }

        loadCart()
    }, []);

    useEffect(() => {
        const saveCart = async () => {
            await AsyncStorage.setItem('cart', JSON.stringify(cart))
        };

        saveCart();
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, dispatch}}>{children}</CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)