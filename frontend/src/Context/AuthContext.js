

import {createContext,useEffect,useReducer} from "react";

const initialState = {
    user:localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null,
    loading:false,
    error:null
}

export const AuthContext = createContext(initialState);

const AuthReducer = (state,action) =>{
    const {type,payload} = action;
    switch(type){
        case "LOGIN_START" :
            return {
                user:null,
                loading:true,
                error:null
            };
    case "LOGIN_SUCCESS" :
        return {
            user:payload,
            loading:false,
            error:null
        }
        case "LOGIN_FAILURE" :
            return {
                user:null,
                loading:false,
                error:payload
            }

            case "REGISTER_SUCCESS" :
        return {
            user:null,
            loading:false,
            error:null
        }

        case "LOGOUT" :
            return {
                user:null,
                loading:false,
                error:null
            }

            default :
            return state;
    }
};

export const AuthContextProvider = ({children}) =>{
const [state,dispatch] = useReducer(AuthReducer,initialState);

useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(state.user))
},[state.user])

return <AuthContext.Provider value={{
    user:state.user,
    loading:state.loading,
    error:state.error,
    dispatch
}}>
    {children}
</AuthContext.Provider>

}