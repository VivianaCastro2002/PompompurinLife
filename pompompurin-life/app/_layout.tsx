import { Stack } from 'expo-router';
import * as Notifications from 'expo-notifications';
import MusicaFondo from '../components/MusicaFondo';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function RootLayout(): JSX.Element | null {
  const [fontsLoaded] = useFonts({
    PressStart2P: require('../assets/fonts/PressStart2P-Regular.ttf'),
  });

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  }, []);

  if (!fontsLoaded) return null;

  return (
    <>
      <MusicaFondo />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="armario" options={{ headerShown: false }} />
        <Stack.Screen name="refrigerador" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
