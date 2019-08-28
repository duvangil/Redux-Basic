//Acciones(un action es solo una interfaz)

export interface Action {
    type: string;
    payload?: number;
  }

  export interface Reducer<T>{
      (state: T, action: Action): T
  }