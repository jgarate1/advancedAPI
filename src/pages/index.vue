<script setup>
import {useAdvice} from "../composables/useadvice";

const { advices } = useAdvice();
</script>
<template>
    <div>
        <input type="text" placeholder="Search and Advice" class="w-full py-4 text-xl mt-16 rounded-full text-center">
    </div>
    <div class="grid grid-cols-2 gap-16 pt-16"
    >
        <div  v-for="(advice, index) in advices" :key="index">
            <p>
            {{advice.advice}}
            </p>
        </div>
    </div>
</template>