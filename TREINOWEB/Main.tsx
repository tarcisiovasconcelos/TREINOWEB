import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

const commonSectionStyle = {
  backgroundColor: 'orange',
  marginVertical: 10,
  marginHorizontal: 10,
  paddingVertical: 20,
  paddingHorizontal: 20,
  borderRadius: 5,
  elevation: 3,
};
const commonTesteStyle = {
  backgroundColor: '#64A3CD',
  marginHorizontal: 10,
  borderRadius: 5,
};

const MainScreen = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToSection = (y: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y, animated: true });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Image source={require('./assets/logo oficial.png')} style={styles.logo} resizeMode="contain" />
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={{ ...styles.menuButton, ...commonTesteStyle }}
            onPress={() => scrollToSection(0)}
          >
            <Text style={styles.menuButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.menuButton, ...commonTesteStyle }}
            onPress={() => scrollToSection(800)}
          >
            <Text style={styles.menuButtonText}>Compras</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.menuButton, ...commonTesteStyle }}
            onPress={() => scrollToSection(2400)} 
          >
            <Text style={styles.menuButtonText}>Vendas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView ref={scrollViewRef}>
        <View style={{ ...styles.sectionHome, ...commonSectionStyle }}>
          <Text style={styles.sectionText}>Seção Home</Text>
        </View>
        <View style={{ ...styles.sectionCompras, ...commonSectionStyle }}>
          <Text style={styles.sectionText}>Seção Compras</Text>
        </View>
        <View style={{ ...styles.sectionVendas, ...commonSectionStyle }}>
          <Text style={styles.sectionText}>Seção Vendas</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Estilos para o container principal
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  // Estilos para o cabeçalho
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '1%',
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  // Estilos para o logo
  logo: {
    width: 150,
    height: 50,
    marginLeft: 10,
  },
  // Estilos para o container de botões de menu
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  // Estilos para os botões de menu
  menuButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
  },
  // Estilos para as seções
  sectionHome: {
    backgroundColor: 'orange',
    height: 800,
  },
  sectionCompras: {
    backgroundColor: 'red',
    height: 1600,
  },
  sectionVendas: {
    backgroundColor: 'green',
    height: 1200,
  },
  // Estilos para o texto dos botões de menu e das seções
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default MainScreen;
