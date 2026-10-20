import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerTitle: 'Expo PWA', headerBackTitle: 'Voltar' }}>
        <Stack.Screen name="index" options={{ title: 'Início' }} />
        <Stack.Screen name="cadastro" options={{ title: 'Cadastro de usuário' }} />
      </Stack>
    </>
  );
}
