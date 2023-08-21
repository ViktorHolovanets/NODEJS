import LocalStorage from "../LocalStorage/localstorage";
import SettingsGroup from "./SettingsGroup";

class Group { // Oid - Owner Id | Gid - Group Id | Uid - User Id
    constructor(token, name, Oid, Gid = {}, Uid = {}, params = {}, SettingsGroup) {
        this.token = token;
        this.name = name;
        this.Oid = Oid;
        this.Gid = Gid;
        this.Uid = Uid;
        this.params = params;
        this.SettingsGroup = SettingsGroup;
    }

    CreateGroup() {
        
    }

    AddUser() {

    }

    DeleteUser() {

    }

    DeleteGroup() {

    }
}

export default Group;