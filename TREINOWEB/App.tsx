import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainScreen from './Main'; // Importe o componente MainScreen do arquivo main.tsx

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen /> {/* Renderize o componente MainScreen */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
