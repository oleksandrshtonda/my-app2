import { ITodo } from "../../../interfaces/ITodo";

export interface IHandlerChangeInputTitleTodo {
  (
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<ITodo['title']>>,
    showError: React.Dispatch<React.SetStateAction<boolean>>,
  ): void
}