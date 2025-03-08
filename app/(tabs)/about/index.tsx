import { ThemedView } from '../../../components/ThemedView';
import { ThemedText } from '../../../components/ThemedText';
import React from 'react';
import { Link } from 'expo-router';

export default function index() {
  return (
    <ThemedView>
      <ThemedText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        possimus perspiciatis debitis animi dolor nostrum alias maxime esse
        voluptate deleniti aut minus suscipit assumenda eos, perferendis cumque
        ut quis consequatur?
      </ThemedText>
      <Link
        href={'/about/details'}
        className='text-blue-400'>
        View details
      </Link>
      <Link
        href={'/about/home'}
        className='text-blue-400'>
        View home
      </Link>
    </ThemedView>
  );
}
