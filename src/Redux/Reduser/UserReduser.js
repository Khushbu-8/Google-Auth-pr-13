let initialState = {
    UserList : [],
    Error : null
}
const UserReduser = (state = initialState,action)=>{
    switch(action.type){
        case 'ADD_RECORD' :
            return {
                ...state,
                UserList : [...state.UserList,action.payload],
                Error : null
            }
           case 'VIEW_RECORD' :
            return{
                ...state,
                UserList:action.payload
            } 
            case 'DELETE_RECORD"' : 
               return{
                ...state,
                UserList:state.UserList.filter((user)=>user.id!==action.payload),
                Error : null
               }
      
        default:
            return state;
    }
}
export default UserReduser;