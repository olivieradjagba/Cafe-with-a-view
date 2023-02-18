<script setup>
import { nextTick, reactive } from "vue";
defineProps({
  msg: {
    type: String,
    required: false,
    default: "I'm a props default value",
  },
});

const state = reactive({
  count: 0,
  isDisabled: true,
  name: [],
});
const increment = () => {
  state.count++;
  state.name.push("-");
  if (state.isDisabled) {
    state.isDisabled = !state.isDisabled;
    nextTick(() => {
      //state.name.push("_");
    });
  }
};
const decrement = () => {
  state.count ? state.count-- : null;
  state.name.pop();
  if (!state.isDisabled && state.count == 0) {
    state.isDisabled = !state.isDisabled;
  }
};
const reset = () => {
  state.count = 0;
  state.name = [];
  if (!state.isDisabled) {
    state.isDisabled = !state.isDisabled;
  }
};
</script>

<template>
  <div>
    <h1>Learning</h1>
    <p>Welcome to the Home page</p>
    <p :class="$style.msg">{{ msg }}</p>
    <RouterLink to="/item/croissant">Item</RouterLink>
    <!-- <RouterView /> -->
    <div>
      Counter :
      <button @click="increment" :class="$style.add">+</button>
      <button
        @click="decrement"
        :disabled="state.isDisabled"
        :class="$style.sub"
      >
        -
      </button>
      <button @click="reset" :disabled="state.isDisabled" :class="$style.res">
        x
      </button>
    </div>
    <p>Counter : <span v-html="state.count" :class="$style.count"></span></p>
    <p v-if="state.count == 0">The counter value is null</p>
    <p v-else>
      The counter value isn't null
      <span v-for="n in state.name" :key="n">{{ n }}</span>
    </p>
  </div>
</template>

<style lang="css" module>
.msg {
  color: red;
}
.count {
  background-color: green;
  border-radius: 5pt;
  padding: 1pt 5pt;
  color: white;
}

.add,
.sub,
.res {
  /*background: green;*/
  color: white;
  border-radius: 5px;
  margin: 5px 3px 0px 0px;
  cursor: pointer;
  /*width: 100%;*/
  justify-content: center;
}

.add {
  background-color: green;
  border-color: green;
}
.sub {
  background-color: blue;
  border-color: blue;
}
.res {
  background-color: red;
  border-color: red;
}

.sub:disabled,
.res:disabled {
  cursor: not-allowed;
}
</style>
