import { defineStore } from "pinia";
import server from '../Service/Axios/axios.js';
import Session from '../Service/Session/Session.js';

export const sendAuthorizationStore = defineStore('sendRegister', {
    state: () => ({
        sessionForm: null,
        socket: null
    }),
    actions: {
        sendAuth(data) {
            var user = [
                data.name, data.password
            ];
            console.log(user);
            var sv = new server();
            sv.AuthorizationUser(user);
        },
        waitRespons(data) {

        }
    }
});