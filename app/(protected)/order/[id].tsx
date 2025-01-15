import { Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { common } from '@/constants/Styles';
import { useLocalSearchParams, useNavigation } from 'expo-router';

export default function index() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({ headerTitle: 'Orders' });
  }, []);
  
  return (
    <SafeAreaView style={common.safeArea}>
        <ScrollView style={common.container}>
            <Text>{id}</Text>
        </ScrollView>
    </SafeAreaView>
  )
}