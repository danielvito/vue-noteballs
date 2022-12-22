<template>
  <div class="card has-background-link-dark p-4 mb-4 mt-4">
    <label class="label has-text-white" v-if="label">
      {{ label }}
    </label>

    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="textarea"
          :placeholder="placeholder"
          ref="textAreaRef"
          v-autofocus
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Type something ...",
  },
  label: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const textAreaRef = ref(null);
const focusTextArea = () => {
  textAreaRef.value.focus();
};

defineExpose({ focusTextArea });
</script>
