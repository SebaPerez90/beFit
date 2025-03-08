import React, { useEffect, useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, Text } from 'react-native';

export default function Index() {
  const [data, setData] = useState<string | null>('');

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem('test', 'Hello, World!');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setData(await AsyncStorage.getItem('test'));
    })();
  }, []);

  return (
    <ThemedView>
      <ThemedText type='subtitle'>Test de "Async Storage"</ThemedText>
      <Pressable
        delayLongPress={2000}
        onPressOut={() => console.log('yamete judasai')}
        onLongPress={() => setData('onii chaaaaaaann')}
        onPress={() => console.log(data)}
        className='p-3 bg-blue-500 rounded-md mt-5 w-1/2'>
        <Text className='text-white font-bold text-center'>Button</Text>
      </Pressable>
      <ThemedView>
        <ThemedText type='link'>{data}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
