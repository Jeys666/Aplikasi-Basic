import React from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  const imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.magodoassociates.org%2Fpubg-mobile-victor&psig=AOvVaw1eQNXkH66YDbL9WtD__hoN&ust=1716615656619000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICnxePJpYYDFQAAAAAdAAAAABAQ';

  const data = [
    { id: 1, name: 'Sunset', image: imageUrl },
    { id: 2, name: 'Mountain', image: imageUrl },
    { id: 3, name: 'Forest', image: imageUrl },
    { id: 4, name: 'Ocean', image: imageUrl },
    { id: 5, name: 'Desert', image: imageUrl },
    { id: 6, name: 'City', image: imageUrl },
    { id: 7, name: 'River', image: imageUrl },
    { id: 8, name: 'Valley', image: imageUrl },
    { id: 9, name: 'Canyon', image: imageUrl },
    { id: 10, name: 'Lake', image: imageUrl },
    { id: 11, name: 'Beach', image: imageUrl },
    { id: 12, name: 'Island', image: imageUrl },
    { id: 13, name: 'Meadow', image: imageUrl },
    { id: 14, name: 'Prairie', image: imageUrl },
    { id: 15, name: 'Glacier', image: imageUrl },
    { id: 16, name: 'Jungle', image: imageUrl },
    { id: 17, name: 'Tundra', image: imageUrl },
    { id: 18, name: 'Savannah', image: imageUrl },
    { id: 19, name: 'Swamp', image: imageUrl },
    { id: 20, name: 'Hill', image: imageUrl },
    { id: 21, name: 'Plateau', image: imageUrl },
  ];

  const renderItem = ({ item }: { item: { id: number; name: string; image: string } }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.cardText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', // Adjust card width to fit 2 columns
    // Adding shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Adding elevation for Android
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 20,
    marginTop: 10,
  },
});
