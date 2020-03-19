<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vuex" />
    {{ title }}/{{ age }}
    <li v-for="(item, index) in todosALise" :key="index">13</li>

    <!-- <li v-for="item in this.$store.state.todos" :key="item.id">
      <span>{{ item.text }}</span> <br />
      <span>{{ item.done }}</span>
    </li> -->
    <div>{{ changeTitle }}</div>

    <div @click="addAge">button</div>

    <h2>{{ cardSuccess }}</h2>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      title: state => state.title,
      age: state => state.age,
      cardSuccess: state => state.cardSuccess
    }),
    ...mapGetters({
      todosALise: "doneTodosCount", // getToDo 不是字符串，对应的是getter里面的一个方法名字 然后将这个方法名字重新取一个别名 todosALise
      changeTitle: "changeTitle"
    })
    // ...mapGetters(["doneTodos"])
  },

  methods: {
    addAge() {
      // this.changeTitle();
      // this.doneTodos();
      this.add();
    },
    ...mapMutations({
      add: "AGE_MUTATION"
    }),
    ...mapActions({
      getInfo: "getCardList"
    })
  },
  created() {
    // console.log(mapGetters(["doneTodos"]));
    this.getInfo();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
