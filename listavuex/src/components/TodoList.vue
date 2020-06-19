<template>
  <div id="list">
    <div class="tarefas" v-for="(list, index) in tarefas" :key="index">
        {{list.texto}}</div>
  </div>
</template>

<script>
export default {
    name: "TodoList",
    computed: {
        tarefas() {
            return this.$store.state.tarefas;
        }
    }
};
</script>

<style>
  #list {
        width: 350px;
        height: 150px;
        border: white 2px solid;
        margin: 35px auto 10px auto;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
    }
    .tarefas {
        width: tarefas;
        height: 20px;
        border: 1px white solid;
        margin: 3px 3px 3px 3px;
    }
</style>