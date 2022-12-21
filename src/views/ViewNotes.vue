<template>
  <div class="notes">
    <div class="card has-background-link-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            v-model="newNote"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link is-light"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();
const newNote = ref("");
const newNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote({ content: newNote.value });

  newNote.value = "";
  newNoteRef.value.focus();
  // console.log(note);
};
</script>

<style></style>
