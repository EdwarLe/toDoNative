import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, FlatList } from 'react-native';
import RenderItems from './components/RenderItems';
import Styles from './components/Styles';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Main from './components/Main';

export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}


