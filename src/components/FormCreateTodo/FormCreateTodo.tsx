import { useState } from "react";

//  Interfaces & Types
import { IUser } from "../../interfaces/IUser";
import { ITodo } from "../../interfaces/ITodo";

//  Handlers
import { handlerChangeInputTitleTodo } from './handlers/handlerChangeInputTitleTodo';
import { handlerSelectUser } from './handlers/handlerSelectUser';
import { handlerSubmitForm } from './handlers/handlerSubmitForm';

interface Props {
  usersFromServer: IUser[];
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const FormCreateTodo: React.FC<Props> = ({ usersFromServer, todos, setTodos }) => {
  const [showErrorTitleIsEmpty, setShowErrorTitleIsEmpty] = useState<boolean>(false);
  const [showErrorUserIsNotChoosen, setShowErrorUserIsNotChoosen] = useState<boolean>(false);
  
  const [selectedUser, setSelectedUser] = useState<IUser['id']>(0);
  const [titleOfNewTodo, setTitleOfNewTodo] = useState<ITodo['title']>('');
  const [todoIsCompleted, setTodoIsCompleted] = useState<ITodo['isCompleted']>(false);  

  // const [selectedUser, setSelectedUser] = useState<number>(0);
  // const [titleOfNewTodo, setTitleOfNewTodo] = useState<string>('');
  // const [todoIsCompleted, setTodoIsCompleted] = useState<boolean>(false);

  return (
    <form
      action=""
      className="create-todo box"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        handlerSubmitForm(
          event,
          titleOfNewTodo,
          todoIsCompleted,
          selectedUser,
          usersFromServer,
          todos,
          setShowErrorTitleIsEmpty,
          setShowErrorUserIsNotChoosen,
          setTodos,
          setSelectedUser,
          setTitleOfNewTodo,
          setTodoIsCompleted,
        );
      }}
    >
      <h1 className="title">Create a new ToDo</h1>
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className={
              `input ${showErrorTitleIsEmpty && 'is-danger'} ${titleOfNewTodo.length > 0 && 'is-success'}`
            }
            type="text"
            placeholder="Title of ToDo"
            value={titleOfNewTodo}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handlerChangeInputTitleTodo(
                event.target.value,
                setTitleOfNewTodo,
                setShowErrorTitleIsEmpty,
              );
            }}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-list-alt"></i>
          </span>
        </div>
        <p className='help is-danger'>{showErrorTitleIsEmpty && 'Title is empty'}</p>
      </div>

      <div className="field">
        <div className="control has-icons-left">
          <div className={
              `select ${showErrorUserIsNotChoosen && 'is-danger'} ${selectedUser !== 0 && 'is-success'}`
            }>
            <select
            value={selectedUser}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              handlerSelectUser(
                Number(event.target.value),
                setSelectedUser,
                usersFromServer.length,
                setShowErrorUserIsNotChoosen,
              );
            }}
            >
              <option value={0} disabled>Select a user</option>
              {usersFromServer.map(user => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.username}
                  </option>
                );
              })}
            </select>
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        <p className="help is-danger">
          {showErrorUserIsNotChoosen && 'User is not choosen'}
        </p>
      </div>
      
      <div className="field">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={todoIsCompleted}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement>
            ) => setTodoIsCompleted(event.target.checked)}
          /> 
          &nbsp; Mark as already completed
        </label>
      </div>

      <button className="button is-primary">Create a new ToDo</button>
    </form>
  );
};
