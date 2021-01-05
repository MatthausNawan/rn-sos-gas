import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Logo from '../assets/logo.png';

const HomeScreen = () => {
  const URL =
    'http://app.grupososgas.com.br/assets/downloads/MINUTA_LEITURA_INDIVIDUALIZADA_2020.pdf';
  const navigation = useNavigation();
  const handleGoToStep1 = () => {
    navigation.navigate('Home');
  };
  const handleGoToMinuta = () => {
    Linking.openURL(URL);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <View style={styles.header}>
          <Image resizeMode="stretch" source={Logo} style={styles.logo} />
          <Text style={styles.text}>Bem Vindo, A SOS Gás</Text>
          <Text style={styles.text}>Toque na opção desejada.</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handleGoToStep1}>
            <Text style={styles.textButton}>Fazer Pré Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton} onPress={handleGoToMinuta}>
              Visualizar Minuta do Contrato
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Consultar Contrato</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  page: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 20,
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999',
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  buttons: {
    marginTop: 20,
  },
  button: {
    marginTop: 5,
    backgroundColor: '#445a68',
    padding: 20,
    borderRadius: 15,
  },
});

export default HomeScreen;
