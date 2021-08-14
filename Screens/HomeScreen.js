import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../Components/NavOptions';

export default function HomeScreen() {
  return (
    <View style={[tw`bg-white h-full`, { marginTop: StatusBar.currentHeight }]}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
      </View>
      <NavOptions />
    </View>
  )
}

const styles = StyleSheet.create({})