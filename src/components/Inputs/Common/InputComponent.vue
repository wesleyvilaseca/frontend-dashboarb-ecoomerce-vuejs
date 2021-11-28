<template>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      v-bind:class="extraclass"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    type: String,
    label: String,
    modelValue: String,
    extraclass: String,
  },
};
</script>
