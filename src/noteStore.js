import { atom } from "nanostores";

//stoms can store strings, numbers, arrays
export const notes = atom([]);

// creating sting[] for notes
// expects a note, call note.set,
// give it a new array, descructure the previous array by calling get,
// and add the `note` argument to the new array
export function addNote(note) {
  notes.set([...notes.get(), note]);
  console.log("note: ", notes.get());
}
