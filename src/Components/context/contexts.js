import * as React from 'react';
let initialState = {
    status:'',
    userData:''
}
let ContextOne = React.createContext();
let reducer = (state, action) => {
    switch(action.type){
        case 'reset':
            return initialState;
            case 'login':
                return {state, status: 'login', userData:action.payload};
                case 'logout':
                    {

                    localStorage.removeItem('accessToken')
                      return {state,status:"logout"}
                    }
    }
};
function ContextOneProvider(props){
    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = {state, dispatch};
    return(
        <ContextOne.Provider value = {value}>{props.children}</ContextOne.Provider>
    );
}
let ContextOneConsumer = ContextOne.Consumer;
export {ContextOne, ContextOneProvider, ContextOneConsumer};