import { Action } from "../ngrx-fake/ngrx";

//Reducir no es mas que una una funcion comun y corriente(pura)
// Siempre debo retornar un estado en los reducer

export function contadorReducer(state = 10, action: Action) {
    switch (action.type) {
      case "INCREMENTAR":
        return (state += 1);
  
      case "DECREMENTAR":
        return (state -= 1);
  
      case "MULTIPLICAR":
        return (state * action.payload);
  
        case "DIVIDIR":
        return (state / action.payload);

        case "RESET":
        return (state = 0);
  
      default:
        return state;
    }
  }