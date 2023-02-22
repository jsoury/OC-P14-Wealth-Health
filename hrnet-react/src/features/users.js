import { createSlice } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'

// // Le state initial de la feature users
// const initialState = {
//     // le statut permet de suivre l'état de la requête
//     status: 'void',
//     // les données lorsque la requête a fonctionné
//     data: null,
//     // l'erreur lorsque la requête échoue
//     error: null,
//   }

const { actions, reducer } = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      //console.log(action.payload)
      state.users.push(action.payload)
    },
  },
})

export const { addUser } = actions

export default reducer

// const userResolve = createAction('user/resolved', (userId, data) => {
//   return {
//     payload: { userId, data },
//   }
// })

// export default function userReducer(state = initialState, action){
//     const
// }
