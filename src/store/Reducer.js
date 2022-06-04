const INNITAL_STATE  ={
    num:0
};
const  reducer=(state=INNITAL_STATE,action)=>{
    switch(action.type){
        case "add":
            state.num=state.num+ action.payload
            return{...state,num:state.num};

            case "mins":
                state.num= state.num+action.payload
                return{...state,num:state.num};

            default:
                return state;
    }
}

export default reducer;