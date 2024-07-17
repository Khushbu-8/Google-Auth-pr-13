 import {addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc} from 'firebase/firestore'
 import{app} from '../../firebaseconfig'

const db = getFirestore(app)

export const Add_Record = (user) =>{
    return async(dispatch) =>{
        try {
            await addDoc(collection(db,'detail'),{
                name:user.name,
                phone:user.phone
            })
            dispatch({
                type:'ADD_RECORD',
                payload:user
            })
            
        } catch (error) {
         console.log(error)

        }
    }
}
export const View_Record =()=>{
    return async(dispatch) =>{
        try {
            let data = collection(db,"detail");
            let   record = await getDocs(data)
            let Users = record.docs.map(val =>({
                id :val.id,
                ...val.data()
            }));
            dispatch({
                type : "VIEW_RECORD",
                payload:Users
            })
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
 
export const Delete_Record = (id) =>{
    return async(dispatch) =>{
        try {
            
            let data = await doc(db,'detail',id);
                await deleteDoc(data)
                dispatch({
                    type:"DELETE_RECORD",
                    payload:id
                })
        
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export const Update_Record =(user) => {
  
    return async(dispatch) =>{
        try {
            let single = await doc(db,'detail',user.id);
            await updateDoc(single,{
               name : user.name,
               phone :user.phone
            });
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}