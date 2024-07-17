import {combineReducers} from "redux"
import UserReduser from "./UserReduser"
const rootReduser = combineReducers({
    user: UserReduser
})
export default rootReduser;