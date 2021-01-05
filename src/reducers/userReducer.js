const INITIAL_STATE = {
  profile: {
    name: '',
    fullName: '',
    cpf: '',
    rg: '',
    aniversario: '',
    telefone: '',
    email:''
  },
  condominio: {
    name: '',
    apto: '',
    bloco: '',
    cep: '',
    rua: '',
    cidade: '',
    bairro: '',
    estado: '',
    numero: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return {...state, profile: action.payload};
    case 'SAVE_CONDOMINIUM':
      return {...state, condominio: action.payload};
  }

  return state;
};
