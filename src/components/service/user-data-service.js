import {db} from "../FB/FBmore";

export default class UserDataService{

    async getSize(uid) {
        return ( await db
                .collection('users')
                .doc(uid)
                .collection('listItems')
                .get()
                .then(snap => {
                    return (snap.size+1).toString();
                })
                .catch((e)=>{return e})
        )
    }


    async createTodoItem(text,uid){
        const id = await this.getSize(uid);
        db
            .collection('users')
            .doc(uid)
            .collection('listItems')
            .doc(id)
            .set({
                text,
                id,
                important: false,
                done: false
            })
            .catch((e)=>{return e});
    }

    updateItem(property,id,prevValue, uid){
        db
            .collection('users')
            .doc(uid)
            .collection('listItems')
            .doc(id)
            .update({
                [property]: prevValue
            })
            .catch((e)=>{return e});
    }


    deleteItem(id,uid){
        db
            .collection('users')
            .doc(uid)
            .collection('listItems')
            .doc(id)
            .delete()
            .catch(e=>{return e});
    }


}