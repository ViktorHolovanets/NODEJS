import {Role} from "./role"

export default interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  birthday: string;
  role: Role
  isEmailVerify: boolean;
  isBlocked: boolean;
}
