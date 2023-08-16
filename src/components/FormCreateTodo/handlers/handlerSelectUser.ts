import { IHandlerSelectUser } from "../interfaces/IHandlerSelectUser";

export const handlerSelectUser: IHandlerSelectUser = (
  id,
  setter,
  maxId,
  showError,
): void => {
  if (id > maxId) {
    setter(0);
    return;
  } 

  setter(id);
  showError(false);
};