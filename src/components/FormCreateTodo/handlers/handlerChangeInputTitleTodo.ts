import { IHandlerChangeInputTitleTodo } from "../interfaces/IHandlerChangeInputTitleTodo";

export const handlerChangeInputTitleTodo: IHandlerChangeInputTitleTodo = (
  title,
  setTitle,
  showError,
) => {
  const allowedSymbols = 'abcdefghijklmnopqrstuvwxyz.()-0123456789 ';
  const forbiddenCh = title.split('').find(ch => {
    if (!allowedSymbols.includes(ch.toLowerCase()) && !allowedSymbols.includes(ch.toUpperCase())) {
      return ch;
    }

    return undefined;
  })

  if (forbiddenCh) {
    return;
  }
  
  setTitle(title);
  showError(false);
};