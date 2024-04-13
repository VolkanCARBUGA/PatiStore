import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TextInput, Dimensions } from 'react-native';
import patistore from './patistore.json';
import Card from './src/components/Card/Card';

function App() {
  //  const renderNews = ( item: any ) => <Card product={item} />;

    const keyExtractor = (item: any) => item.id.toString();

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.app_title}>Patistore</Text>
          <TextInput
          onChangeText={(value) => {
            console.log({ value }, 'yazıldı');
          }}
         
            style={styles.text_input}

           placeholder="Search" />
            <FlatList
                numColumns={2}
                data={patistore}
                renderItem={({ item }) => <Card product={item}  />}
                keyExtractor={keyExtractor}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%', // View'in tüm ekranı kaplaması için
        backgroundColor: 'grey', 
        alignItems: 'center',
        // Arka plan rengini ihtiyacınıza göre ayarlayın
    },
    app_title: {
        fontSize: 50,
        fontFamily: 'Consolas',
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'white',
    },
    text_input: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height / 15,
        margin: 10,
        fontSize: 20,
        color: 'black',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
        marginBottom: 16,
        backgroundColor: 'white',
    }
});

export default App;
