import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/modules/core/constants/Colors';
import { useColorScheme } from '@/modules/core/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const tabsData = [
  {
    name: 'index',
    title: 'Inicio',
    iconName: 'home-sharp',
  },
  {
    name: 'about',
    title: 'Sobre Nosotros',
    iconName: 'book',
  },
  {
    name: 'profile',
    title: 'Perfil',
    iconName: 'person',
  },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView className='flex-1'>
      <Tabs
        screenOptions={{
          // sceneStyle: {
          //   padding: 20,
          //   backgroundColor: Colors[colorScheme ?? 'light'].background,
          // },
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: true,
        }}>
        {tabsData.map((data, index) => (
          <Tabs.Screen
            key={index}
            name={data.name}
            options={{
              headerShown: false,
              title: data.title,
              tabBarIcon: ({ color }) => (
                <Ionicons
                  // @ts-ignore
                  name={data.iconName}
                  size={20}
                  color={color}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </SafeAreaView>
  );
}
