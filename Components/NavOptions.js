import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

const data = [
  {
    id: '123',
    title: 'Get a Ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  }
]

export default function NavOptions() {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
          </View>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}
