<script setup>
import { ref } from "vue";
import { useChuckJoke } from "../composables/ChuckNorris";
const {joke, getJokes} = useChuckJoke();
</script>

<template>
<div class="py-4 text-center text-4xl">
    <h1>Chuck Norris Jokes</h1>
</div>
<div class="py-18">
    <div class="py-4 flex justify-center">
        <button @click="getJokes" class=" py-4 px-4 bg-red-600 text-red-200 w-1/2 rounded-lg">
        Click for a Chuck Joke
        </button>
    </div>
    <div class="py-2 px-2">
        <p class="py-7 px-7 bg-gray-400 rounded-md">
            {{ joke }}
        </p>
    </div>

</div>
</template>