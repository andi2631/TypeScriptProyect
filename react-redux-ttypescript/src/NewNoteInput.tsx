import React, { ChangeEvent } from 'react';

//esta interfaz define las propiedades de mi componente
interface NewNoteInputProps{
    addNote(note:string) : void; //esta funcion addNote, recibe una nota de tipo string y no devuelve nada, por eso void
  }

  //este componente recibe las propiedades de la interfaz definida arriba
export const NewNoteInput:React.FC<NewNoteInputProps> = ({addNote}) => {//hago destructuring de los props

  const [note, setNote] = React.useState("")

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => { //el tipo de dato de event es el evento de ChangeEvent
    setNote(event.target.value) //se setea la nota con el valor

  }
  
  return (
    <div>
      <input onChange={updateNote} type="text" name="note" value={note} placeholder='note'></input>
      <button>Add note</button>
    </div>
  );
};

export default NewNoteInput;
