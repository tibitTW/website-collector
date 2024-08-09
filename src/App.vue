<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import "./styles/global.css";
import "./styles/variables.css";
// import { Link, Key } from "./components/index.ts";
// import TestBtn from "./components/TestBtn.vue";
import { SideMenu, MainScreen } from "./components/spaces/index.ts";
import { VerticalDivider } from "./components/dividers/index.ts";

import {ref} from "vue"
const leftWidth= ref(200)

const handleResize = (newWidth: number) => {
    leftWidth.value = newWidth
}

</script>

<template>
    <div class="app flex w-screen h-screen">
        <SideMenu :width="leftWidth" class="" />
        <VerticalDivider @resize="handleResize"/>
        <div class="flex-grow">MainScreen</div>
        <!-- <MainScreen class="" /> -->
    </div>
</template>

<style>
* {
    user-select: none;
    cursor: default;
}
</style>
