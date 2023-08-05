import { MMKV } from "react-native-mmkv";
const storage = new MMKV();
export const setItem = (key, value) => {
    storage.set(key, JSON.stringify(value));
    return Promise.resolve(true);
}
export const getItem = key => {
    const value = storage.getString(key)
    if (value == undefined) {
        return Promise.resolve(value)
    } else {
        return Promise.resolve(JSON.parse(value));
        
    }

}
export const removeItem = key => {
    storage.delete(key);
    return Promise.resolve()
}
