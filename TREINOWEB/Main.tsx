import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

const MainScreen = () => {
  return (
    // Container seguro para o conteúdo
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.head}>
        {/* Logo */}
        <Image source={require('./assets/logo oficial.png')} style={styles.logo} resizeMode="contain" />
        {/* Container para os textos */}
        <View style={styles.textContainer}>
          {/* Textos */}
          <Text style={styles.text1}>um!!!</Text>
          <Text style={styles.text1}>dois!!!</Text>
          <Text style={styles.text1}>tres!!!</Text>
        </View>
      </View>

      {/* Corpo */}
      <View style={styles.body}>
        {/* Texto do corpo */}
        <Text style={styles.bodyText}>TRABALHO COM O LÉO, LOGO EXISTO!!!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Estilos para o container principal
  container: {
    flex: 1,
    backgroundColor: 'green',
    width: '100%',
    height: '100%',
  },
  // Estilos para o cabeçalho
  head: {
    flexDirection: 'row', // Alinhar elementos em uma linha
    alignItems: 'center', // Alinhar verticalmente os itens no centro
    justifyContent: 'center', // Centralizar horizontalmente os itens
    backgroundColor: 'blue',
    height: '10%', // 10% da altura do container seguro
    marginTop: '1%', // Margem superior de 1%
    marginHorizontal: 10, // Margem horizontal de 10 pixels
  },
  // Estilos para o logo
  logo: {
    width: '10%', // Largura do logo em relação à tela
    height: '100%', // Altura do logo igual à altura do cabeçalho
  },
  // Estilos para o container de textos
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Centralizar verticalmente os textos
    justifyContent: 'space-evenly', // Espaçamento igual entre os textos
    height: '100%',
    width: '90%',
  },
  // Estilos para os textos
  text1: {
    flex: 1, // Ocupar espaço igualmente
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'pink',
    textAlign: 'center', // Centralizar horizontalmente o texto
    marginHorizontal: 10, // Espaçamento horizontal entre os textos
  },
  // Estilos para o corpo
  body: {
    backgroundColor: 'orange',
    flex: 1, // Ocupar espaço restante
    marginVertical: 10, // Margem vertical de 10 pixels
    paddingHorizontal: 20, // Espaçamento horizontal de 20 pixels
    marginHorizontal: 10, // Margem horizontal de 10 pixels
  },
  // Estilos para o texto do corpo
  bodyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MainScreen;
