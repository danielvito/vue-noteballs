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

    <div v-for="note in notes" :key="note.id" class="card mb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloribus sunt non suscipit eos debitis sequi tempore facilis, quas aspernatur asperiores, excepturi sit? Suscipit excepturi nobis dignissimos assumenda, officia animi!",
  },
  {
    id: "id2",
    content: "Shor text",
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = { id, content: newNote.value };

  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();

  // console.log(note);
};
</script>

<style></style>
