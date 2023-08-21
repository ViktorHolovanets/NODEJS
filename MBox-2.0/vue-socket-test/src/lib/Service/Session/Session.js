import LocalStorage from '../LocalStorage/localstorage';
import Cookies from '../Cookies/cookies';

class Session {
    constructor(id, params = {}) {
        this.id = id;
        this.params = params
    }
    ls = new LocalStorage();

    GenerateKey() {
        var length = 65;
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var key = '';
      
        for (var i = 0; i < length; i++) {
          var randomIndex = Math.floor(Math.random() * chars.length);
          var randomChar = chars.charAt(randomIndex);
          key += randomChar;
        }
      
        return key;
    }

    CreateSession() {
        var cs = this.GenerateKey();
        // skg - Session Key Generate
        ls.SetItem("_mbskg", cs);
    }

    StartSession(form,store) {
        var value = ls.GetItem("_mbskg");
        if (value !== null) {
            ls.SetItem(JSON.stringify(form), JSON.stringify(store))
            var ck = new Cookies(this.id,JSON.stringify(value));
            var ck1 = new Cookies(this.id + "_" + form, JSON.stringify(store));
            ck.SetCoockie();
            ck1.SetCoockie();
        }
    }

    CheckSession() {
        var item = this.ls.GetItem("_mbskg");
        var timerId = setInterval(() => {
            if (item === null) {
                // Error...
                alert("ERROR");
                setTimeout(() => {clearInterval(timerId);}, 3000)
            }
        },10000);
    }

    DropSession() {
        var ck = new Cookies();
        ck.RemoveCoockie(this.id);
        ck.RemoveCoockie(this.id + "_" + form);
        ls.RemoveItem("_mbskg");
    }
}

export default Session;