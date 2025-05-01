// src/constants/styles/LoginStyles.ts
import { StyleSheet } from 'react-native';

export const LoginStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  skipButton: { position: 'absolute', top: 20, right: 20 },
  skipText: { fontSize: 16, color: 'blue' },
});
