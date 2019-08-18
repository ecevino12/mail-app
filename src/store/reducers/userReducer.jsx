const initState = {
  users: [
    {
      id: '1',
      firstName: 'Vinoth',
      lastName: 's',
      email: 'ecevino20@gmail.com'
    }, {
      id: '2',
      firstName: 'Santhosh',
      lastName: 's',
      email: 'San@gmail.com'
    }, {
      id: '3',
      firstName: 'Tam',
      lastName: 'r',
      email: 'Tam@gmail.com'
    }
  ]
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.user);
      return state;
    case 'CREATE_PROJECT ERROR':
      console.log('created project error', action.err);
      return state;
    default: 
    return state
  }
  
}

export default userReducer;