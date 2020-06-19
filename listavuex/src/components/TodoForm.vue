<template>
  <div id="linhatarefa">
    <input type="text" placeholder="Deseja adicionar uma nova Tarefa?" class="placeHolder" v-model="texto"/>
    <button class="button" @click="adicionar">OK</button>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data: function() {
    return {
      texto: ""
    };
  },
    methods: {
    adicionar: function() {
      this.$store.commit('adicionar', { texto: this.texto });
      this.texto = "";
      
    }
  }
};
</script>

<style>
#linhatarefa {
  width: 320px;
  height: 120px;
  border: white 2px solid;
  margin: 30px auto 10px auto;
  display: flex;
  flex-wrap: wrap;
}
.placeHolder {
  width: 220px;
  height: 20px;
  margin: 50px 0 0 30px;
}
.button {
  height: 26px;
  margin-top: 50px;
  background-color: green;
  border: 0;
  outline: none;
}
</style>