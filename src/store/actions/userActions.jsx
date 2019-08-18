export const createUser = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.settings({
            timestampsInSnapshots: true
          });
        firestore.collection("users").add({
            ...user,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', user }); 
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err });
        })
         
    }
};
 
