// Utilities
import {defineStore} from 'pinia'
import User from "@/models/user";
import {Role} from "@/models/role";
import Band from "@/models/band";

interface UserState {
  users: User[];
  isAuthenticated: boolean,
  roles: Role[],
  user: string,
  bands: Band[]
}

export const useAppStore = defineStore('app', {
  state: (): UserState => ({
    isAuthenticated: false,
    user: "",
    roles: [
      {
        "id": "d5cea627-188e-4a9e-9147-fe9e4a6be68b",
        "name": "admin"
      },
      {
        "id": "e6c4e331-31db-4268-bbbf-d6c1a068f3d9",
        "name": "musician"
      },
      {
        "id": "26e2a895-b827-4cbc-b70d-bd139833b69a",
        "name": "producer"
      },
      {
        "id": "de35e9ac-489c-400f-9a05-7e81122e29f4",
        "name": "super_admin"
      },
      {
        "id": "22fbce3c-8164-4722-8bf6-43897024fdd1",
        "name": "user"
      }
    ],
    users: [
      {
        "id": "176cf4fc-0601-4fba-8ef6-ffd1f78eafbe",
        "name": "Calista Boehm",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/25.jpg",
        "email": "CalistaBoehm_Hamill@yahoo.com",
        "birthday": "2004-12-12T22:06:49.146488",
        "role": {
          "id": "34aa6128-cca2-459c-ab06-88e90f6f2c98",
          "name": "admin"
        },
        "isEmailVerify": true,
        "isBlocked": false
      },
      {
        "id": "19f35188-61a4-4022-bbfc-267fbd91ac8d",
        "name": "Omari Quitzon",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/878.jpg",
        "email": "OmariQuitzon73@yahoo.com",
        "birthday": "1990-06-19T08:45:13.368006",
        "role": {
          "id": "0908ad72-549f-4c3f-9a1d-b3a88533eee9",
          "name": "super_admin"
        },
        "isEmailVerify": false,
        "isBlocked": false
      },
      {
        "id": "1d872350-66d7-45c5-9cb9-bfc1d0312732",
        "name": "Neal Parisian",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/133.jpg",
        "email": "NealParisian.Reichert@hotmail.com",
        "birthday": "1977-12-06T13:38:52.053467",
        "role": {
          "id": "81d34cd9-3976-4669-b1c2-f924df2af43f",
          "name": "user"
        },
        "isEmailVerify": true,
        "isBlocked": false
      },
      {
        "id": "21d4162a-741e-46da-adf6-13139ad37d19",
        "name": "Toni Shields",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1182.jpg",
        "email": "ToniShields_Lockman@gmail.com",
        "birthday": "2005-07-12T11:28:44.031161",
        "role": {
          "id": "81d34cd9-3976-4669-b1c2-f924df2af43f",
          "name": "user"
        },
        "isEmailVerify": false,
        "isBlocked": false
      },
      {
        "id": "28ebd1f7-2700-45cc-9dc7-8aa116e55d19",
        "name": "Naomie Blanda",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/727.jpg",
        "email": "NaomieBlanda52@hotmail.com",
        "birthday": "1999-12-03T08:44:04.076636",
        "role": {
          "id": "81d34cd9-3976-4669-b1c2-f924df2af43f",
          "name": "user"
        },
        "isEmailVerify": true,
        "isBlocked": true
      },
      {
        "id": "29e43a5f-d54a-4ffe-8b68-0e22137d2c1b",
        "name": "Rhiannon Wilkinson",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1039.jpg",
        "email": "RhiannonWilkinson_Waelchi@yahoo.com",
        "birthday": "1980-03-12T11:37:45.223001",
        "role": {
          "id": "34aa6128-cca2-459c-ab06-88e90f6f2c98",
          "name": "admin"
        },
        "isEmailVerify": true,
        "isBlocked": false
      },
      {
        "id": "2b94921c-61af-4526-b664-9402074e5eee",
        "name": "Broderick Kemmer",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/15.jpg",
        "email": "BroderickKemmer.Herman@yahoo.com",
        "birthday": "1991-08-14T10:29:44.822422",
        "role": {
          "id": "34aa6128-cca2-459c-ab06-88e90f6f2c98",
          "name": "admin"
        },
        "isEmailVerify": true,
        "isBlocked": true
      },
      {
        "id": "2faccf39-6f96-4c3e-a50b-a323f7a34a8c",
        "name": "Zachariah Altenwerth",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/731.jpg",
        "email": "ZachariahAltenwerth86@yahoo.com",
        "birthday": "1987-05-07T13:33:12.528933",
        "role": {
          "id": "95d7894c-b7ca-4fda-8166-b006f1f56c5b",
          "name": "producer"
        },
        "isEmailVerify": true,
        "isBlocked": false
      },
      {
        "id": "3bb79715-bcc8-4472-aaff-933351ea3663",
        "name": "Raleigh Cremin",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/390.jpg",
        "email": "RaleighCremin_Reinger73@yahoo.com",
        "birthday": "1990-03-20T15:05:40.5373",
        "role": {
          "id": "34aa6128-cca2-459c-ab06-88e90f6f2c98",
          "name": "admin"
        },
        "isEmailVerify": true,
        "isBlocked": false
      },
      {
        "id": "48170b2b-7476-4dfc-a9aa-c78527f4d3d8",
        "name": "Michelle Monahan",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/602.jpg",
        "email": "MichelleMonahan57@yahoo.com",
        "birthday": "1991-10-26T02:02:09.663692",
        "role": {
          "id": "81d34cd9-3976-4669-b1c2-f924df2af43f",
          "name": "user"
        },
        "isEmailVerify": true,
        "isBlocked": false
      }],
    bands: [
      {
        "id": "1433c88b-a2d4-4426-b61c-0b20503cd7f4",
        "avatar": "https://picsum.photos/640/480/?image=694",
        "name": "Little Inc",
        "producer": {
          "id": "5c5b0f33-8465-4cd5-b520-81dc04943b6d",
          "user": null
        },
        "countMembers": 0,
        "countAlbums": 0,
        "countSongs": 0,
        "createdAt": "2023-07-23T09:18:57.940997",
        "fullInfo": "In quaerat amet voluptatibus et et dolores.\nQuaerat suscipit consequatur doloremque reiciendis quia et omnis et.",
        "countFollowers": 0,
        "isBlocked": false
      },
      {
        "id": "59a673b9-d237-4cbc-a281-7bbe5c80a785",
        "avatar": "https://picsum.photos/640/480/?image=380",
        "name": "Denesik - Crist",
        "producer": {
          "id": "e83a36bb-e348-40f7-bc27-b589e57971c3",
          "user": null
        },
        "countMembers": 0,
        "countAlbums": 0,
        "countSongs": 0,
        "createdAt": "2020-08-06T05:29:42.081919",
        "fullInfo": "Id a soluta laudantium ipsam nulla.\nEst incidunt ea est consequatur eum neque velit minus.",
        "countFollowers": 0,
        "isBlocked": false
      },
      {
        "id": "7192b3e8-72c8-48d9-9611-d98e1b03067b",
        "avatar": "https://picsum.photos/640/480/?image=75",
        "name": "Ortiz, Stroman and Ledner",
        "producer": {
          "id": "4e55c226-1fe8-493a-91c2-053b41cd0a33",
          "user": null
        },
        "countMembers": 0,
        "countAlbums": 0,
        "countSongs": 0,
        "createdAt": "2022-05-26T22:36:58.961339",
        "fullInfo": "Qui neque quia veritatis consequatur deleniti ipsum facilis.\nDolore ullam debitis.",
        "countFollowers": 0,
        "isBlocked": false
      },
      {
        "id": "9f25905a-446e-4777-9ee0-8d3733431c2b",
        "avatar": "https://picsum.photos/640/480/?image=727",
        "name": "Ratke LLC",
        "producer": {
          "id": "44808ebb-a587-4c41-93f7-67ab32d9a69c",
          "user": null
        },
        "countMembers": 0,
        "countAlbums": 0,
        "countSongs": 0,
        "createdAt": "2022-07-26T06:14:36.462399",
        "fullInfo": "Autem quisquam facilis in illo et accusamus velit corrupti sed.\nEx minima rerum.",
        "countFollowers": 0,
        "isBlocked": true
      },
      {
        "id": "a2830e7d-8a68-4ed8-8e45-0fd4f4bac88e",
        "avatar": "https://picsum.photos/640/480/?image=1084",
        "name": "Altenwerth, Pacocha and McKenzie",
        "producer": {
          "id": "a42263f1-0b0a-46a7-84cc-3f6591bdf521",
          "user": null
        },
        "countMembers": 0,
        "countAlbums": 0,
        "countSongs": 0,
        "createdAt": "2023-03-30T13:09:40.114701",
        "fullInfo": "Maiores perferendis ut fugit ad nulla aut hic recusandae repudiandae.\nVoluptatum perferendis aut.",
        "countFollowers": 0,
        "isBlocked": false
      },
      {
        "id": "cc1df206-ea0f-4e29-9985-a03cd56d8c9f",
        "avatar": "https://picsum.photos/640/480/?image=833",
        "name": "Lindgren - Ullrich",
        "producer": {
          "id": "57404b19-7c6a-4194-9e18-3933a99ac4f2",
          "user": null
        },
        "countMembers": 0,
        "countAlbums": 0,
        "countSongs": 0,
        "createdAt": "2018-08-20T05:13:41.958713",
        "fullInfo": "Quo est consequatur nemo sint non veniam incidunt neque amet.\nVoluptas est odio minima.",
        "countFollowers": 0,
        "isBlocked": false
      },
      {
        "id": "d25f149b-2cfd-4f95-ab6e-6f5e323aa6ce",
        "avatar": "https://picsum.photos/640/480/?image=441",
        "name": "Hoppe Inc",
        "producer": {
          "id": "dba09490-d198-4581-8662-a21e6b790861",
          "user": null
        },
        "countMembers": 0,
        "countAlbums": 0,
        "countSongs": 0,
        "createdAt": "2021-01-28T05:34:31.894924",
        "fullInfo": "Voluptatibus quia accusamus nulla cupiditate hic eos laborum.\nTempora molestiae reprehenderit qui enim et molestiae.",
        "countFollowers": 0,
        "isBlocked": false
      },
      {
        "id": "dbb87ba7-c882-4525-b0e4-367fe96bb3ee",
        "avatar": "https://picsum.photos/640/480/?image=312",
        "name": "Denesik and Sons",
        "producer": {
          "id": "5b27bbf3-4e26-4c05-86df-36384de70344",
          "user": null
        },
        "countMembers": 0,
        "countAlbums": 0,
        "countSongs": 0,
        "createdAt": "2022-11-20T20:41:59.064649",
        "fullInfo": "Et provident nostrum nisi.\nUt deserunt animi.",
        "countFollowers": 0,
        "isBlocked": false
      },
      {
        "id": "e0c88b5d-3baa-4c46-811e-a5c7d5786941",
        "avatar": "https://picsum.photos/640/480/?image=952",
        "name": "Hessel - Gerlach",
        "producer": {
          "id": "e6ee3f10-5e48-47db-a623-980d907f80fd",
          "user": null
        },
        "countMembers": 0,
        "countAlbums": 0,
        "countSongs": 0,
        "createdAt": "2021-12-31T04:33:40.696356",
        "fullInfo": "Beatae natus laboriosam.\nNumquam optio vitae accusantium rerum voluptatem numquam.",
        "countFollowers": 0,
        "isBlocked": false
      },
      {
        "id": "effee034-2f47-4918-b4da-6099c972bb7e",
        "avatar": "https://picsum.photos/640/480/?image=130",
        "name": "Mertz, Doyle and Bayer",
        "producer": {
          "id": "4e2af986-c38f-432a-b7e9-11f6c5172f0a",
          "user": null
        },
        "countMembers": 0,
        "countAlbums": 0,
        "countSongs": 0,
        "createdAt": "2019-11-15T13:14:06.828888",
        "fullInfo": "Rerum numquam et voluptas aut sint magnam.\nPlaceat officia odio.",
        "countFollowers": 0,
        "isBlocked": false
      }],
  }),
  actions: {
    login: function (username: string) {
      // Ваша логіка автентифікації тут
      // Наприклад, перевірка логіна та пароля, робота з сервером і т.д.

      // Якщо автентифікація пройшла успішно, змініть статус
      this.isAuthenticated = true;
      this.user = username; // Збережіть інформацію про користувача
    }
  }
})
