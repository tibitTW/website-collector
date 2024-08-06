<script setup lang="ts">
defineProps({ icon: String, url: String });
</script>

<template>
    <a :href="url" target="_blank" class="block w-fit">
        <div class="flex-wrapper p-2 inline-flex items-center">
            <div class="icon-bg bg-black mr-1 flex items-center rounded-md p-1">
                <span
                    :class="icon"
                    class="icon iconify text-xs text-white"
                ></span>
            </div>
            <span class="description text-xs max-w-40 select-none truncate">
                {{ url }}
            </span>
        </div>
    </a>
</template>

