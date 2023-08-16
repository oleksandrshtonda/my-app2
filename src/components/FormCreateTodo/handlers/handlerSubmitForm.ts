import { IHandlerSubmitForm } from "../interfaces/IHandlerSubmitForm"
import { ITodo } from "../../../interfaces/ITodo";
import { IUser } from "../../../interfaces/IUser";

export const handlerSubmitForm: IHandlerSubmitForm = (
  event,
  titleOfNewTodo,
  todoIsCompleted,
  selectedUser,
  users,
  todos,
  setShowErrorTitleIsEmpty,
  setShowErrorUserIsNotChoosen,
  setTodos,
  setSelectedUser,
  setTitleOfNewTodo,
  setTodoIsCompleted,
) => {
  event.preventDefault();

  if (titleOfNewTodo.trim().length === 0) {
    setShowErrorTitleIsEmpty(true);
    setTitleOfNewTodo('');
  }

  if (selectedUser === 0) {
    setShowErrorUserIsNotChoosen(true);
  }

  if (titleOfNewTodo.trim().length === 0 || selectedUser === 0) {
    return
  }

  const newTodo: ITodo = {
    title: titleOfNewTodo.trim(),
    isCompleted: todoIsCompleted,
    user: users.find(user => user.id === selectedUser) as IUser
  }

  setTodos([...todos, newTodo]);
  setShowErrorTitleIsEmpty(false);
  setShowErrorUserIsNotChoosen(false);
  setTitleOfNewTodo('');
  setSelectedUser(0);
  setTodoIsCompleted(false);
}