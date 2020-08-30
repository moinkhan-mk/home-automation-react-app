export default (state,action) => {
    switch(action.type){
        case 'UPDATE_BTN1':
            return{...state,
               Btn1_status:action.payload
            }
        case 'UPDATE_BTN2':
            return{...state,
                Btn2_status:action.payload
                }
        case 'UPDATE_BTN3':
               return{...state,
                Btn3_status:action.payload
                    }
        case 'SETPIDATA':
            return{
                ...state,
                Btn1_status:'true',
                Btn2_status:'true',
                Btn3_status:'true',

            }
    }
}