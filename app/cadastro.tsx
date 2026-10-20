import { StyleSheet, Text, View } from 'react-native';

export default function CadastroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de usuário</Text>
      <Text style={styles.description}>A tela está preparada. O formulário será implementado em um próximo checkpoint.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 12, backgroundColor: '#f8fafc' },
  title: { fontSize: 24, fontWeight: '700', color: '#0f172a', textAlign: 'center' },
  description: { maxWidth: 480, fontSize: 16, lineHeight: 24, color: '#475569', textAlign: 'center' },
});
