import React from 'react'
import StoreHeader from '@/components/headers/StoreHeader'
import { Stack } from 'expo-router'
import CommonHeader from '@/components/headers/CommonHeader'

export default function _layout() {
  return (
    <Stack 
      screenOptions={({ route }) => ({
        headerTitle: route.params.headerTitle,
        headerTitleStyle: {
          fontFamily: 'outfit-bold',
          fontSize: 20
        } 
      })} 
    >
      <Stack.Screen name="index" options={{ header: () => <StoreHeader /> }} />
    </Stack>
  )
}