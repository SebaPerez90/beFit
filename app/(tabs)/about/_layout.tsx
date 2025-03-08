import React from 'react';
import { Stack } from 'expo-router';

export default function AboutLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
      }}>
      <Stack.Screen
        name='index'
        options={{ title: 'Index' }}
      />
      <Stack.Screen
        name='details'
        options={{ title: 'Details' }}
      />
      <Stack.Screen
        name='home'
        options={{ title: 'Home' }}
      />
    </Stack>
  );
}
