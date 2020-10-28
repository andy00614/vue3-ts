import { reactive, Ref } from "vue";
interface Person {
  name: string;
  age: number;
}
export function useInfo(count: Ref<number>) {
  const info = reactive<Person>({
    name: "andy",
    age: 18,
  });

  const changeInfo = () => {
    info.name += "!".repeat(count.value);
    info.age += count.value;
  };
  
  return {
    info,
    changeInfo,
  };
}
