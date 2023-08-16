import { IUser } from "../../../interfaces/IUser";

export interface IHandlerSelectUser {
  (
    id: number,
    setter: React.Dispatch<React.SetStateAction<IUser['id']>>,
    maxId: number,
    showError: React.Dispatch<React.SetStateAction<boolean>>,
  ): void
}