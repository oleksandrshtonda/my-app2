import 'bulma';
import './App.scss';
import { useState } from 'react';

//  API Data 
import { usersFromServer } from './data/usersFromServer';

//  Interfaces & Types
import { ITodo } from './interfaces/ITodo';

//  components
import { FormCreateTodo } from './components/FormCreateTodo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <div className="App">
      <div className="search-todo"></div>
      <div className="list-of-todos"></div>
      <FormCreateTodo
        usersFromServer={usersFromServer}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
