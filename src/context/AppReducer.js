export default (state,action) => {
    switch(action.type){
        case 'UPDATE_FIRSTNAME':
            return{...state,
               firstName:action.payload
            }
        case 'UPDATE_LASTNAME':
            return{...state,
                   lastName:action.payload
                }
        case 'UPDATE_EMAIL':
               return{...state,
                       email:action.payload
                    }
        case 'UPDATE_PASSWORD':
            return{...state,
               password:action.payload
            }
    }
}