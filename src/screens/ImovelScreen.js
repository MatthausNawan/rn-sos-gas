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
  const URL = 'http://localhost:8000/api/contracts';
  const profile = useSelector((state) => state.user.profile);
  const condominio = useSelector((state) => state.user.condominio);

  const [loading, setLoading] = useState(false);

  const handleSendData = async () => {
    setLoading(true);

    const response = await axios.post(URL, {
      name: profile.name,
      cpf: profile.cpf,
    });

    console.log(response.data);
    setLoading(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Falta pouco,
          <Text style={{color: '#ff0000'}}> {profile.name}</Text>
        </Text>
      </View>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 18}}>
          Revise os dados abaixo antes de confirmar seu pedido.
        </Text>
      </View>
      <ScrollView>
        <View style={styles.page}>
          <View style={{marginVertical: 5}}>
            <Text style={styles.label}>Nome Completo</Text>
            <Text style={styles.text}>{profile.fullName}</Text>
          </View>
          <View style={{marginVertical: 5}}>
            <Text style={styles.label}>CPF</Text>
            <Text style={styles.text}>{profile.cpf}</Text>
          </View>

          <View style={{marginVertical: 5}}>
            <Text style={styles.label}>RG</Text>
            <Text style={styles.text}>{profile.rg}</Text>
          </View>

          <View style={{marginVertical: 5}}>
            <Text style={styles.label}>Telefone</Text>
            <Text style={styles.text}>{profile.telefone}</Text>
          </View>

          <View style={{marginVertical: 5}}>
            <Text style={styles.label}>Data Nascimento</Text>
            <Text style={styles.text}>{profile.aniversario}</Text>
          </View>

          <View style={{marginVertical: 5}}>
            <Text style={styles.label}>Condominio</Text>
            <Text style={styles.text}>{condominio.name}</Text>
          </View>

          <View style={{marginVertical: 5}}>
            <Text style={styles.label}>Apto / Bloco</Text>
            <Text style={styles.text}>
              {condominio.apto} / {condominio.bloco}
            </Text>
          </View>

          <View style={{marginVertical: 5}}>
            <Text style={styles.label}>Localização:</Text>
            <Text style={styles.text}>{condominio.rua}</Text>
            <Text style={styles.text}>{condominio.bairro}</Text>
            <Text style={styles.text}>{condominio.cidade}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSendData}>
            <Text style={styles.textButton}>Enviar Proposta</Text>
            {loading ? <ActivityIndicator /> : null}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  page: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 15,
  },
  title: {
    textDecorationLine: 'underline',
    fontSize: 18,
    flex: 1,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  label: {
    color: '#999',
    fontSize: 22,
  },
  text: {
    color: '#445a68',
    fontSize: 22,
  },
  button: {
    marginTop: 5,
    backgroundColor: '#445a68',
    padding: 20,
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default ImovelScreen;
