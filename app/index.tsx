import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de usuários</Text>
      <Text style={styles.description}>
        Estrutura inicial do aplicativo. As funções de cadastro e integração serão adicionadas nos próximos checkpoints.
      </Text>
      <Link href="/cadastro" style={styles.link}>Abrir tela de cadastro</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 16, backgroundColor: '#f8fafc' },
  title: { fontSize: 28, fontWeight: '700', textAlign: 'center', color: '#0f172a' },
  description: { maxWidth: 480, fontSize: 16, lineHeight: 24, textAlign: 'center', color: '#475569' },
  link: { paddingHorizontal: 18, paddingVertical: 12, borderRadius: 8, overflow: 'hidden', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: '600' },
});
