import { useThemeColor } from '@/modules/core/hooks/useThemeColor';
import { StyleSheet, View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ScreenView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <View
      style={[{ backgroundColor }, style, styles.container]}
      {...otherProps}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
