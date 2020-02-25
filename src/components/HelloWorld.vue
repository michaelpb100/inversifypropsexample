<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Ah ha</p>
    <p>{{ q }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { useStore } from "vuex-simple";
import { Store } from "@/store/store";

@Component
export default class HelloWorld extends Vue {
  private store: Store = useStore(this.$store);
  @Prop() private msg!: string;
  mounted() {
    this.store.forceTest();
  }
  public get q(): string {
    return this.store.testString;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
