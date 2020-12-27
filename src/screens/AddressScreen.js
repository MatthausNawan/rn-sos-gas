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
import {TextInputMask} from 'react-native-masked-text';

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
  const [numero, setNumero] = useState(condominio.numero || '');

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
        <Text style={styles.headerText}>2. Dados do Condominio</Text>
      </View>
      <ScrollView style={styles.page}>
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
            placeholder="Deixe em branco se não tiver"
            style={styles.input}
            value={bloco}
            onChangeText={(txt) => setBloco(txt)}
          />
        </View>
        <View style={styles.formInput}>
          <Text style={styles.labelInput}>Cep</Text>
          <TextInputMask
            type="zip-code"
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

        <View style={styles.formInput}>
          <Text style={styles.labelInput}>Número</Text>
          <TextInput
            style={styles.input}
            value={numero}
            onChangeText={(txt) => setNumero(txt)}
          />
        </View>

        <View style={styles.formInput}>
          <Text style={styles.labelInput}>Cidade</Text>
          <TextInput
            style={styles.input}
            value={cidade}
            onChangeText={(txt) => setCidade(txt)}
          />
        </View>

        <View style={styles.formInput}>
          <Text style={styles.labelInput}>Bairro</Text>
          <TextInput
            style={styles.input}
            value={bairro}
            onChangeText={(txt) => setBairro(txt)}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleGoToStep3}>
          <Text style={styles.textButton}>Continuar</Text>
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
  input: {
    height: 40,
    fontSize: 15,
    marginTop: 5,
    borderColor: '#445a68',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    color: '#FF0000',
  },
  labelInput: {
    fontSize: 18,
    color: '#999',
  },
  formInput: {
    flex: 1,
    marginTop: 5,
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
});

export default AddressScreen;
