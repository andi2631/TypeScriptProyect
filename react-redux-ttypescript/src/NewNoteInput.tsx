import React from 'react';

//esta interfaz define las propiedades de mi componente
interface NewNoteInputProps{
    addNote(note:string) : void; //esta funcion addNote, recibe una nota de tipo string y no devuelve nada, por eso void
  }

  //este componente recibe las propiedades de la interfaz definida arriba
export const NewNoteInput:React.FC<NewNoteInputProps> = () => {
  return (
    <div>
      <input type="text" name="note" placeholder='note'></input>
      <button>Add note</button>
    </div>
  );
};

export default NewNoteInput;
