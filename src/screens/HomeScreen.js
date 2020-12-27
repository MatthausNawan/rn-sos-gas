import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
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

const HomeScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  const [cpf, setCpf] = useState(profile.cpf || '');
  const [name, setName] = useState(profile.name || '');
  const [fullName, setFullName] = useState(profile.fullName || '');
  const [rg, setRG] = useState(profile.rg || '');
  const [aniversario, setAniversario] = useState(profile.aniversario || '');
  const [telefone, setTelefone] = useState(profile.telefone || '');

  const handleGoToStep2 = () => {
    dispatch({
      type: 'SAVE_USER',
      payload: {
        cpf,
        name,
        fullName,
        rg,
        aniversario,
        telefone,
      },
    });
    navigation.navigate('Address');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>1. Informe seus Dados</Text>
      </View>
      <ScrollView>
        <View style={styles.page}>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Como podemos te chamar?</Text>
            <TextInput
              value={name}
              onChangeText={(txt) => setName(txt)}
              style={styles.input}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Nome completo</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={(txt) => setFullName(txt)}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>CPF</Text>
            <TextInputMask
              type="cpf"
              value={cpf}
              onChangeText={(txt) => setCpf(txt)}
              style={styles.input}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>RG</Text>
            <TextInputMask
              type="only-numbers"
              value={rg}
              style={styles.input}
              onChangeText={(text) => setRG(text)}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Dia/Mês do seu Aniversário</Text>
            <TextInputMask
              style={styles.input}
              placeholder="DD/MM/AAAA"
              options={{
                format: 'DD/MM/YYYY',
              }}
              type="datetime"
              value={aniversario}
              onChangeText={(txt) => setAniversario(txt)}
            />
          </View>

          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Telefone</Text>
            <TextInputMask
              style={styles.input}
              type="cel-phone"
              value={telefone}
              onChangeText={(txt) => setTelefone(txt)}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleGoToStep2}>
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

export default HomeScreen;
