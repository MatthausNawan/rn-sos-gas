import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
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
  const [cpf, setCpf] = useState(props.cpf || '');
  const [name, setName] = useState(props.name || '');
  const [fullName, setFullName] = useState(props.fullName || '');
  const [rg, setRG] = useState(props.rg || '');
  const [mesAno, setMesAno] = useState(props.aniversario || '');

  const handleGoToStep2 = () => {
    dispatch({type: 'SAVE_USER', payload: {cpf, name, fullName, rg, mesAno}});
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
              value={mesAno}
              onChangeText={(txt) => setMesAno(txt)}
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

const mapStatetoProps = (state) => {
  console.log(state);
  return {
    name: state.userReducer.user.name,
    email: state.userReducer.user.email,
    cpf: state.userReducer.user.cpf,
    rg: state.userReducer.user.rg,
    aniversario: state.userReducer.user.aniversario,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch({type: 'SAVE_USER', payload: user}),
    // setEmail: (email) => dispatch({type: 'SET_EMAIL', payload: {email}}),
    // setCpf: (cpf) => dispatch({type: 'SET_CPF', payload: {cpf}}),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(HomeScreen);
