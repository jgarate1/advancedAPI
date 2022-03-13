import { ref } from "vue";

const advices = ref([
  { advice: "lorem" },
  { advice: "lorem" },
  { advice: "lorem" },
  { advice: "lorem" },
  { advice: "lorem" },
]);

export const useAdvice = () => {
  return { advices };
};
