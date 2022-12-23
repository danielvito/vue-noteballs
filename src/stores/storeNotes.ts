// stores/counter.js
import { defineStore } from "pinia";
import notesApi from "@/api/notesApi";
import { Note } from "@/interfaces/note";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [] as Note[],
    };
  },
  actions: {
    async addNote(newNote: Note) {
      newNote.id = new Date().getTime().toString();
      try {
        await notesApi.post("/", newNote);
        this.notes.unshift(newNote);
      } catch (error) {
        console.log("error addNote", error);
      }
    },
    async deleteNoteById(noteId: string) {
      try {
        let index = this.notes.findIndex((note: Note) => note.id === noteId);
        if (index !== undefined) {
          await notesApi.delete(noteId);
          this.notes = this.notes.filter((note: Note) => {
            return note.id !== noteId;
          });
        }
      } catch (error) {
        console.log("error deleteNoteById", error);
      }
    },
    async updateNote(noteToUpdate: Note) {
      try {
        let index = this.notes.findIndex(
          (note: Note) => note.id === noteToUpdate.id
        );
        if (index !== undefined) {
          await notesApi.put(noteToUpdate.id, noteToUpdate);
          this.notes[index] = noteToUpdate;
        }
      } catch (error) {
        console.log("error updateNote", error);
      }
    },
    async fetchNotes() {
      try {
        const data = await notesApi.get<Note[]>("");
        this.notes = data.data;
      } catch (error) {
        console.log("error fetchNotes", error);
      }
    },
  },
  getters: {
    getNoteById(state) {
      return (noteId: string) => {
        return this.notes.find((note: Note) => {
          return note.id === noteId;
        });
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      const callback = (
        accumulator: number,
        currentValue: Note,
        index: number
      ) => {
        return accumulator + currentValue.content.length;
      };

      return state.notes.reduce(callback, 0);
    },
  },
});
