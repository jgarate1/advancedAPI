import axios from "axios";
import { ref } from "vue";

const joke = ref();

const api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/random",
});

export const useChuckJoke = () => {
  const getJokes = async () => {
    const response = await api.get();
    joke.value = response.data.value;
  };
  return { joke, getJokes };
};
