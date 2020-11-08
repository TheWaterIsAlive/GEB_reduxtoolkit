import { createSlice } from "@reduxjs/toolkit"

const uiTypes = {login: 'login', registration: 'registration', loggedin: 'loggedin'};

const loginSlice = createSlice({
  name: "login",
  initialState: {
    cachedUser: {
        username: "",
        password: "",
        email: "",
    }, uiType: uiTypes.login
},
  reducers: {
    cacheState: (state, action) =>{
        const  {username: formUsername, password: formPassword, email: formEmail} = action.payload
        state.push({username: formUsername, password: formPassword, email: formEmail})

    },
    changeUIType: state =>{
        if (state.uiType === uiTypes.login)
        state.uiType = uiTypes.registration
        else state.uiType = uiTypes.login
    }
  }
})

export const {
cacheState,changeUIType

} = loginSlice.actions;
export default loginSlice.reducer;

// export const {
//   nextFlashCard,
//   prevFlashCard,
//   flipFlashCard,
//   createFlashCard,
//   updateFlashCard,
//   deleteFlashCard
// } = flashCards.actions
// export default flashCards.reducer