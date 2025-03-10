import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, Text, View } from 'react-native';
import { CustomText } from '@/src/modules/core/components/CustomText';
// import { ScreenView } from '@/src/modules/core/components/ScreenView';
import '../../styles/globals.css';
import { ScreenView } from '@/src/modules/core/components/ScreenView';

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
    <ScreenView>
      <CustomText type='subtitle'>Test de "Async Storage"</CustomText>
      <Pressable
        delayLongPress={2000}
        onPressOut={() => console.log('yamete judasai')}
        onLongPress={() => setData('onii chaaaaaaann')}
        onPress={() => console.log(data)}
        className='p-3 bg-blue-500 rounded-md mt-5 w-1/2'>
        <Text className='text-white font-bold text-center'>Button</Text>
      </Pressable>
      <View>
        <CustomText type='link'>{data}</CustomText>
      </View>
    </ScreenView>
  );
}
