<template>
  <div id="app">
    <TodoForm/>
    <TodoList/>
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoForm,
    TodoList
  },
};
</script>

<style>
#app {
  margin: 2px solid black;
  width: 1500px;
  height: 150px;
}
</style>