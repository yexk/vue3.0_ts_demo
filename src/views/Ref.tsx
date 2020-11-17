import { defineComponent, ref } from "vue";
import Echarts from "@/components/Echarts";

interface T {
  abc: number;
  test: () => number;
}

export default defineComponent({
  data() {
    return {
      name: 'Yexk'
    }
  },
  setup() {
    const count = ref<T>({
      abc: 123123,
      test() {
        return 123123
      }
    })
    console.log(count.value.test());
    return {
      count
    }
  },
  render() {
    return (
      <>
        <h1>{this.name} About</h1>
        <div>
          {this.count.abc}
          {this.count.test()}
        </div>
      </>
    );
  },
});
