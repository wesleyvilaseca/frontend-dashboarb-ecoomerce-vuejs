<template>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      :placeholder="placeholder"
      v-bind:class="extraclass"
      :required="required"
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
    placeholder: String,
    required: String
  },
};
</script>
