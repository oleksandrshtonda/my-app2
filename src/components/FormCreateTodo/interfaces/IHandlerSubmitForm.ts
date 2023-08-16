import { ITodo } from "../../../interfaces/ITodo";
import { IUser } from "../../../interfaces/IUser";

export interface IHandlerSubmitForm {
  (
    event: React.FormEvent<HTMLFormElement>,
    titleOfNewTodo: ITodo['title'],
    todoIsCompleted: ITodo['isCompleted'],
    selectedUser: IUser['id'],
    users: IUser[],
    todos: ITodo[],
    setShowErrorTitleIsEmpty: React.Dispatch<React.SetStateAction<boolean>>,
    setShowErrorUserIsNotChoosen: React.Dispatch<React.SetStateAction<boolean>>,
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
    setSelectedUser: React.Dispatch<React.SetStateAction<IUser['id']>>,
    setTitleOfNewTodo: React.Dispatch<React.SetStateAction<ITodo['title']>>,
    setTodoIsCompleted: React.Dispatch<React.SetStateAction<ITodo['isCompleted']>>,
  ): void
}
