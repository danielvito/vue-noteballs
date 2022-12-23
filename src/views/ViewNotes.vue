<template>
  <div class="notes">
    <MergeNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="mergeNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link is-light"
        >
          Add New Note
        </button>
      </template>
    </MergeNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Note from "@/components/notes/Note.vue";
import MergeNote from "@/components/notes/MergeNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { runToast } from "@/helpers/toast";

const storeNotes = useStoreNotes();
const newNote = ref("");
const mergeNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote({ content: newNote.value });

  newNote.value = "";
  mergeNoteRef.value.focusTextArea();
  runToast("Note added");
};

onMounted(() => {
  storeNotes.fetchNotes();
});
</script>
