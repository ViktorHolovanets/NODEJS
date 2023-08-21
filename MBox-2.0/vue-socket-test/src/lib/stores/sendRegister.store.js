import { defineStore } from "pinia";
import server from '../Service/Axios/axios.js';
import Session from '../Service/Session/Session.js';

export const sendRegisterStore = defineStore('sendRegister', {
    state: () => ({
        sessionForm: null,
        socket: null
    }),
    actions: {
        sendReg(data) {
            console.log(data);

            var userTest = {
                "Email": data.email,
                "Name": data.name,
                "Password": data.password
            };
              
                console.log (typeof(data) instanceof Array ? "true . It's array" : "false");
            console.log(userTest);
            var sv = new server("http://localhost/api/auth/register");
            console.log(sv.RegisterUser(userTest["Name"], userTest["Email"], userTest["Password"]));
        },
        waitRespons(data) {

        }
    }
});