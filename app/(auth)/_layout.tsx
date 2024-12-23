import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" options={{ headerShown: false }} /> 
      <Stack.Screen name="verify" options={{ headerShown: false }} /> 
    </Stack>
  )
}