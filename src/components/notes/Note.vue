<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/edit-note/${note.id}`" class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        @click.prevent="modals.showDeleteNote = true"
        href="#"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote
      v-if="modals.showDeleteNote"
      v-model="modals.showDeleteNote"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import ModalDeleteNote from "@/components/notes/ModalDeleteNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const characterLength = computed(() => {
  let desc = props.note.content.length > 1 ? "characters" : "character";
  return `${props.note.content.length} ${desc}`;
});

const modals = reactive({
  showDeleteNote: false,
});
</script>

<style></style>
