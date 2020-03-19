import Vue from "vue";
import Vuex from "vuex";
import { AGE_MUTATION } from "./mutation-types";
import { CARD_LIST_INFO, GET_CARD_LIST_SUCC } from "./actions-types";

console.log("----", CARD_LIST_INFO);

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    title: "zhangsan",
    age: 123,
    todos: [
      { id: 11, text: "test1", done: true },
      { id: 22, text: "test2", done: false }
    ],
    cardList: [],
    cardSuccess: 1
  },
  getters: {
    doneTodosCount: state => {
      return state.todos.filter(todo => todo.done);
    },
    changeTitle: state => state.title + 123
  },
  mutations: {
    setTitle: state => (this.state.title = state),
    [AGE_MUTATION](state) {
      state.age++;
    },
    increment(state) {
      state.age += 1;
    },
    [GET_CARD_LIST_SUCC](state, res) {
      state.cardSuccess += res;
    },
    [CARD_LIST_INFO](state) {
      state.cardList = [{ xx: 213 }];
    }
  },
  actions: {
    getCardList({ commit, state }) {
      const curCardList = [...state.cardList];
      console.log(curCardList);
      commit(CARD_LIST_INFO);

      new Promise(resolve => {
        setTimeout(() => {
          commit(GET_CARD_LIST_SUCC, 123);
          resolve();
        }, 2000);
      });
    }
  }
});
