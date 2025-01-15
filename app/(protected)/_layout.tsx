import React from 'react'
import { Stack } from 'expo-router'
import LocationProvider from '@/hooks/useLocation'

export default function _layout() {
  return (
    <LocationProvider>
      <Stack>
        <Stack.Screen name="category" options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
        <Stack.Screen name="menu" options={{ headerShown: false }} />
        <Stack.Screen name="offers" options={{ headerShown: false }} />
        <Stack.Screen name="order" options={{ headerShown: false }} />
        <Stack.Screen name="ratings" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
        <Stack.Screen name="transactions" options={{ headerShown: false }} />
      </Stack>
    </LocationProvider>
  )
}