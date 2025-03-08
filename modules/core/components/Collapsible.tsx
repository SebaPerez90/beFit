import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CustomText } from '@/modules/core/components/CustomText';
import { Colors } from '@/modules/core/constants/Colors';
import { useColorScheme } from '@/modules/core/hooks/useColorScheme';
import { ScreenView } from './ScreenView';

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ScreenView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name='arrow-forward'
          size={18}
          weight='medium'
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <CustomText type='defaultSemiBold'>{title}</CustomText>
      </TouchableOpacity>
      {isOpen && <ScreenView style={styles.content}>{children}</ScreenView>}
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
