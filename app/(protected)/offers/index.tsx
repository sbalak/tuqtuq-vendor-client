import { Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { common } from '@/constants/Styles';
import { useNavigation } from 'expo-router';

export default function index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: 'Offers' });
  }, []);
  
  return (
    <SafeAreaView style={common.safeArea}>
        <ScrollView style={common.container}>
            <Text>Offers</Text>
        </ScrollView>
    </SafeAreaView>
  )
}