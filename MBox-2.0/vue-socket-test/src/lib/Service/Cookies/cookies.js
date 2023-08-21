// Поделить на 3 категории
// 1 Сессия - пользователь в данный момент ходит по сайту
// 2 Сбор данных о пользовательском вкусе
// 3 Другая информация

class Coockies {
    constructor(name, value, options = {}) {
        this.name = name;
        this.value = value;
        this.options = options;
    }

    SetCoockie() {
        if (this.options.expires instanceof Date) {
            this.options.expires = this.options.expires.toUTCString();
        }
        
        let updateCookie = encodeURIComponent(this.name) + "=" + encodeURIComponent(this.value);

        Object.entries(this.options).forEach(key => {
            updateCookie += "; " + encodeURIComponent(key);
        });

        document.cookie = updateCookie;
    }

    GetCookie(key) {
        let getCookie = document.cookie.split("; ")
        .find((_name) => _name.startsWith(key))?.split("=");
    }

    RemoveCoockie(key) {
        document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";  
    }
}

export default Coockies;