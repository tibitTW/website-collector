<script setup lang="ts">
import { readText } from "@tauri-apps/api/clipboard";
import { ref } from "vue";
const clipboardContent = ref<string | null>("");

async function getClipboardContent() {
    clipboardContent.value = "Content from clipboard is: " + (await readText());
}
</script>

<template>
    <button @click="getClipboardContent()">Click Me!</button>
    <p>{{ clipboardContent }}</p>
</template>
