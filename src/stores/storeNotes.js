// stores/counter.js
import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloribus sunt non suscipit eos debitis sequi tempore facilis, quas aspernatur asperiores, excepturi sit? Suscipit excepturi nobis dignissimos assumenda, officia animi!",
        },
        {
          id: "id2",
          content: "Short text",
        },
      ],
    };
  },
  actions: {
    addNote(newNote) {
      newNote.id = new Date().getTime().toString();
      this.notes.unshift(newNote);
      // console.log("add note", newNote);
    },
    deleteNote(noteId) {
      this.notes = this.notes.filter((note) => {
        return note.id !== noteId;
      });
      // console.log("delete note", noteId);
    },
  },
});
