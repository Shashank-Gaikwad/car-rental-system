const initialState = {
    isLoggedIn: '',
    userType: '',
    username: ''
}

const rootReducer = (state = initialState, action) => {
    console.log(action);

}

export default rootReducer;