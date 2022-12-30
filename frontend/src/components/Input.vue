<template>
  <div>
    <form @prevent.default="addItem">
      <input v-model="newItem" placeholder="Add a new item" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  name: "Input",
  store,
  data() {
    return {
      newItem: "",
    };
  },
};
</script>
