import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    card_container: {
        backgroundColor: "white",
        margin: 10,
       alignItems: "center",
        borderRadius: 15,
       width:Dimensions.get('window').width/2,
     
        elevation: 5,

    },
    card_image: {
        width: Dimensions.get('window').width/2,
        height: Dimensions.get('window').height/4,
        borderRadius: 15,
        padding: 10,
       margin: 10,
       marginRight: 20,
       marginLeft: 20,

    },
    card_title: {
      
        fontWeight: "bold",
        fontFamily: "Consolas",
        fontStyle: "normal",
        fontSize: 20,
        color: "black",
    },
    card_price: {
       
        fontWeight: "bold",
        fontFamily: "Consolas",
        fontStyle: "normal",
        fontSize: 15,
        textAlign: "left",
        color: "grey",
    },
    card_in_stock: {
       padding: 5,
        fontWeight: "bold",
        fontFamily: "System",
        fontStyle: "normal",
        fontSize: 18,
        textAlign: "right",
        color: "red",
    },
    card_button: {
        backgroundColor: "orange",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width:Dimensions.get('window').width/2-40,
        elevation: 5,
    },
    card_button_text: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontFamily: "Consolas",
        fontStyle: "normal",
        fontSize: 18,
    },
})