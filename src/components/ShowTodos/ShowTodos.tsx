import { ITodo } from "../../interfaces/ITodo";

interface Props {
  todos: ITodo[];
}

export const ShowTodos: React.FC<Props> = ({ todos }) => {
  return (
    <div className="list-of-todos">
        <div className="box">
          <h1 className="title">List of ToDos</h1>
          <hr />
          <div className="list">
            {todos.map(todo => {
              const { title, id, user, isCompleted } = todo;

              return (
                <div key={id} className="todo box has-icons-right">
                  <p>Title: {title}</p>
                  <span>author: {user.username}</span>
                  <span className="icon is-medium">
                    <i className={`fas fa-${isCompleted ? 'check-square' : 'square'} fa-lg`}></i>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
};
