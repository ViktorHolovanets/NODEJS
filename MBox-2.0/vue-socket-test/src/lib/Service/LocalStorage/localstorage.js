
class LocalStorage {

    SetItem(key,value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    RemoveItem(key) {
        localStorage.removeItem(key);
    }
    
    GetItem(key) {
        var value = localStorage.getItem(key);
        if (value !== null) {
            return value;
        }
        return null;
    }
}
 

export default LocalStorage;