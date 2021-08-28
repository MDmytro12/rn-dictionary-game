import Datastore from "react-native-local-mongodb";
import AsyncStorage from "@react-native-community/async-storage";

const db = new Datastore({
    filename: 'asyncStorageKey' ,
    storage: AsyncStorage
})

export default db