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
        <button :disabled="!noteContent" class="button is-link is-light">
          Save Note
        </button>
      </template>
    </MergeNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MergeNote from "@/components/notes/MergeNote.vue";

const noteContent = ref("");
</script>
