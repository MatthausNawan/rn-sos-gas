const INITIAL_STATE = {
  user: {
    name: 'Matthaus Nawan',
    fullName: 'Matthaus Nawan de Souza e Silva',
    cpf: '09623421494',
    rg: '3479122',
    aniversario: '29/07/1990',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return {...state, user: action.payload};
      break;
  }

  console.log(state.user);
  return state;
};
