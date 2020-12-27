import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import axios from 'axios';

const ImovelScreen = () => {
  const URL = 'http://192.168.0.5:8000/api/contracts';
  const profile = useSelector((state) => state.user.profile);
  const condominio = useSelector((state) => state.user.condominio);

  const [loading, setLoading] = useState(false);

  const handleSendData = async () => {
    setLoading(true);

    const response = await axios.post(URL, {
      first_name: profile.name,
      last_name: profile.fullName,
      ssn: profile.cpf,
      register: profile.rg,
      birht_date: profile.aniversario,
      mobile: profile.telefone,
      zipcode: condominio.cep,
      condominium_name: condominio.name,
      condominium_block: condominio.block,
      condominium_apto: condominio.apto,
      address_1: condominio.rua,
    });

    console.log(response.status);
    setLoading(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Falta pouco,
          <Text style={{color: '#ff0000'}}> {profile.name || 'Usuário'}</Text>
        </Text>
      </View>
      <View style={styles.subtitle}>
        <Text style={styles.subtitleText}>
          Revise os dados abaixo antes de confirmar seu pedido. Enviaremos um
          email de confirmação com uma link para baixar o seu Pré-Contrato.
        </Text>
        <Text style={styles.subtitleText} />
      </View>
      <ScrollView style={styles.page}>
        <View style={styles.info}>
          <Text style={styles.label}>Nome Completo</Text>
          <Text style={styles.text}>{profile.fullName}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>CPF</Text>
          <Text style={styles.text}>{profile.cpf}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>RG</Text>
          <Text style={styles.text}>{profile.rg}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.text}>{profile.telefone}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Data Nascimento</Text>
          <Text style={styles.text}>{profile.aniversario}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Condominio</Text>
          <Text style={styles.text}>{condominio.name}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Apto / Bloco</Text>
          <Text style={styles.text}>
            {condominio.apto} / {condominio.bloco}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Localização:</Text>
          <Text style={styles.text}>{condominio.rua}</Text>
          <Text style={styles.text}>{condominio.bairro}</Text>
          <Text style={styles.text}>{condominio.cidade}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSendData}>
          <Text style={styles.textButton}>Enviar Proposta</Text>
          {loading ? <ActivityIndicator color="#fff" /> : null}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  page: {
    marginTop: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#999',
  },
  subtitle: {
    backgroundColor: '#999',
    padding: 5,
    borderRadius: 5,
  },
  subtitleText: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 20,
  },
  info: {
    marginVertical: 5,
  },

  button: {
    marginTop: 10,
    backgroundColor: '#445a68',
    padding: 20,
    borderRadius: 15,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  label: {
    color: '#999',
    fontSize: 18,
  },
  text: {
    color: '#445a68',
    fontSize: 18,
  },
});
export default ImovelScreen;
