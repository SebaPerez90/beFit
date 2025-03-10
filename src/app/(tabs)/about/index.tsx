import React from 'react';
import { Link } from 'expo-router';
import { ScreenView } from '@/src/modules/core/components/ScreenView';
import { CustomText } from '@/src/modules/core/components/CustomText';

export default function index() {
  return (
    <ScreenView>
      <CustomText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        possimus perspiciatis debitis animi dolor nostrum alias maxime esse
        voluptate deleniti aut minus suscipit assumenda eos, perferendis cumque
        ut quis consequatur?
      </CustomText>
      <Link
        href={'/about/pepito'}
        className='text-blue-400'>
        View pepito
      </Link>
      <Link
        href={'/about/home'}
        className='text-blue-400'>
        View home
      </Link>
    </ScreenView>
  );
}
