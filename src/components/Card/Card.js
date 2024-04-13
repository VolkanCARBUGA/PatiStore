import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './CardStyle';

const Card = ({ product }) => {
    
    return (
        <View style={styles.card_container}>
            <Image
                style={styles.card_image}
                source={{ uri: product.imgURL }}
            />
            <Text style={styles.card_title}>{product.title}</Text>
            <Text style={styles.card_price}>{product.price}</Text>
            <Text style={styles.card_in_stock}>{product.inStock}</Text>
            <TouchableOpacity disabled={!product.inStock?true:false} style={styles.card_button} onPress={()=>Alert.alert(product.title,"Added to cart",[{text:"Tamam",},{text:"Iptal",onPress:()=>{
        console.log(product.title, " Siparişi Iptal"); 
    }}])}>
                <Text style={styles.card_button_text}>{product.inStock ? "Add to cart" : "STOKTA YOK"}</Text>
            </TouchableOpacity>
            {/* <View>{isStock()}</View> */}
        </View>
    );
};

export default Card;
