import {db} from "../FB";
import firebase from "firebase";


export default class UserDataService{

    uniqueID(){
        function chr4(){
            return Math.random().toString(16).slice(-4);
        }
        return chr4() + chr4() +
            '-' + chr4() +
            '-' + chr4() +
            '-' + chr4() +
            '-' + chr4() + chr4() + chr4();
    };



    getAllItems(uid,success){
        db.collection('users')
            .doc(uid)
            .collection('listItems')
            .orderBy("timestamp","asc")
            .onSnapshot(snapshot  => {
                let todoData =[];
                snapshot.forEach(doc =>{
                    todoData.push(doc.data())});
                success(todoData);
                //this.setState({todoData})
            });
    };


    createItem(text,uid){
        const id=this.uniqueID();
        db
            .collection('users')
            .doc(uid)
            .collection('listItems')
            .doc(id)
            .set({
                id,
                text,
                important: false,
                done: false,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .catch((e)=>{return e});
    };


    updateItem(property,itemId,prevValue, uid){
        db
            .collection('users')
            .doc(uid)
            .collection('listItems')
            .doc(itemId)
            .update({
                [property]: !prevValue})
            .catch((e)=>{return e});
    };


    deleteItem(itemId,uid){
        db
            .collection('users')
            .doc(uid)
            .collection('listItems')
            .doc(itemId)
            .delete()
            .catch(e=>{return e});
    };


}