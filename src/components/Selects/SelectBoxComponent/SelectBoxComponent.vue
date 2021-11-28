<template>
  <div class="mb-3">
    <label for="disabledSelect" class="form-label">{{ label }}</label>
    <select
      class="form-select"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled>Selecione uma opção</option>
      <option v-for="(item, index) in list" :key="index" :value="item[indexKey]">
        {{ item[title] }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectBoxComponent",
  props: {
    list: Array,
    label: String,
    modelValue: String,
    indexKey: String,
    title: String
  },
};
</script>
