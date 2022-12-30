<template>
  <div >
    <form @submit.prevent="addItem">
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
import { mapState } from "vuex";

export default {
  name: "Input",
  data() {
    return {
      newItem: '',
    };
  },
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    addItem() {
        this.$store.dispatch('addItem', this.newItem)
        this.newItem = ''
    },
    removeItem(index) {
        this.$store.dispatch('removeItem', index)
    },
  },
};
</script>
