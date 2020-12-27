import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AddressScreen = () => {
  const dispatch = useDispatch();

  const condominio = useSelector((state) => state.user.condominio);

  const [name, setName] = useState(condominio.name || '');
  const [apto, setApto] = useState(condominio.apto || '');
  const [bloco, setBloco] = useState(condominio.bloco || '');
  const [cep, setCep] = useState(condominio.cep || '');
  const [rua, setRua] = useState(condominio.rua || '');
  const [cidade, setCidade] = useState(condominio.cidade || '');
  const [bairro, setBairro] = useState(condominio.bairro || '');
  const [estado, setEstado] = useState(condominio.estado || '');

  const navigation = useNavigation();

  const handleGoToStep3 = () => {
    dispatch({
      type: 'SAVE_CONDOMINIUM',
      payload: {
        name,
        apto,
        bloco,
        cep,
        rua,
        cidade,
        bairro,
        estado,
      },
    });

    navigation.navigate('Imovel');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>2. Informe Endereço</Text>
      </View>
      <ScrollView>
        <View style={styles.page}>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Nome do Condomínio</Text>
            <TextInput
              value={name}
              onChangeText={(txt) => setName(txt)}
              style={styles.input}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Apto</Text>
            <TextInput
              style={styles.input}
              value={apto}
              onChangeText={(txt) => setApto(txt)}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Bloco</Text>
            <TextInput
              style={styles.input}
              value={bloco}
              onChangeText={(txt) => setBloco(txt)}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Cep</Text>
            <TextInput
              style={styles.input}
              value={cep}
              onChangeText={(txt) => setCep(txt)}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Rua</Text>
            <TextInput
              style={styles.input}
              value={rua}
              onChangeText={(txt) => setRua(txt)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleGoToStep3}>
            <Text style={styles.textButton}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop: 80,
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    width: 350,
    height: 50,
    padding: 10,
    fontSize: 15,
    marginTop: 5,
    borderColor: '#445a68',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 15,
    color: '#FF0000',
  },
  labelInput: {
    fontSize: 20,
  },
  formInput: {
    marginTop: 10,
    flex: 1,
  },
  button: {
    marginTop: 5,
    backgroundColor: '#445a68',
    padding: 20,
    borderRadius: 15,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default AddressScreen;
