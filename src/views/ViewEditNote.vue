<template>
  <div class="edit-note">
    <MergeNote
      v-model="noteContent"
      placeholder="Note content"
      label="Edit note"
      ref="mergeNoteRef"
    >
      <template #buttons>
        <RouterLink to="/" class="button is-link is-light mr-2"
          >Cancel</RouterLink
        >
        <button
          @click="handleSaveNote"
          :disabled="!noteContent"
          class="button is-link is-light"
        >
          Save Note
        </button>
      </template>
    </MergeNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import MergeNote from "@/components/notes/MergeNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();
const route = useRoute();
const router = useRouter();
const noteContent = ref("");

let note = storeNotes.getNoteById(route.params.id);
noteContent.value = note ? note.content : "";

const handleSaveNote = () => {
  let payload = {
    id: route.params.id,
    content: noteContent.value,
  };

  storeNotes.updateNote(payload);
  router.push("/");
};
</script>
