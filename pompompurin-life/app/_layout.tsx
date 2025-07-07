import { Stack } from 'expo-router';
import * as Notifications from 'expo-notifications';


export default function RootLayout() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="armario" options={{ headerShown: false }} />
      <Stack.Screen name="refrigerador" options={{ headerShown: false }} />
    </Stack>
  );

}

