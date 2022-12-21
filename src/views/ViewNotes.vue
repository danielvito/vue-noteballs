<template>
  <div class="notes">
    <div class="card has-background-link-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link is-light">Add New Note</button>
        </div>
      </div>
    </div>

    <div v-for="i in 3" class="card mb-4">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          doloribus sunt non suscipit eos debitis sequi tempore facilis, quas
          aspernatur asperiores, excepturi sit? Suscipit excepturi nobis
          dignissimos assumenda, officia animi!
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
