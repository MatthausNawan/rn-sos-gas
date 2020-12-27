import React, {useState} from 'react';
import {connect} from 'react-redux';
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

const AddressScreen = (props) => {
  const [condominiumName, setCondominiunName] = useState('');
  const navigation = useNavigation();
  const handleGoToStep3 = () => {
    navigation.navigate('Imovel');

    console.log('dados do reducer');
    console.log(props);
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
              value={condominiumName}
              onChangeText={(txt) => setCondominiunName(txt)}
              style={styles.input}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Apto</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Bloco</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Cep</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.labelInput}>Rua</Text>
            <TextInput style={styles.input} placeholder="" />
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

const mapStatetoProps = (state) => {
  return {
    name: state.userReducer.name,
    email: state.userReducer.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setName: (name) => dispatch({type:"SET_NAME",payload:{name}}),
    // setName: (email) => dispatch({type:"SET_EMAIL",payload:{email}})
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(AddressScreen);
