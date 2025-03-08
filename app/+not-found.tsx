import { Link, Stack } from 'expo-router';
import { CustomText } from '@/modules/core/components/CustomText';
import { ScreenView } from '@/modules/core/components/ScreenView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScreenView className='flex-1 items-center justify-center'>
        <CustomText type='subtitle'>Oops! Esta pantalla no existe.</CustomText>
        <Link
          href={'/(tabs)/about/home'}
          className='mt-10'>
          <CustomText type='link'>Vuelve al inicio!</CustomText>
        </Link>
      </ScreenView>
    </>
  );
}
