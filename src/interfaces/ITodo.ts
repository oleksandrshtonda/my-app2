import { IUser } from "./IUser";

export interface ITodo {
  title: string;
  user: IUser;
  isCompleted: boolean;
}