import 'bulma';
import './App.scss';
import { useState } from 'react';

//  API Data 
import { usersFromServer } from './data/usersFromServer';
import { todosFromServer } from './data/todosFromServer';

//  Interfaces & Types
import { ITodo } from './interfaces/ITodo';

//  components
import { FormCreateTodo } from './components/FormCreateTodo';
import { ShowTodos } from './components/ShowTodos';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([...todosFromServer]);

  return (
    <div className="App">
      <div className="search-todo"></div>

      <ShowTodos todos={todos} />

      <FormCreateTodo
        usersFromServer={usersFromServer}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
