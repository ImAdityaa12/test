<template>
    <div>
        <UiNavbar />
        <main class="min-h-screen grid place-content-center wrapper">
            <Error404 v-if="error.statusCode === 404" />
            <Error403 v-else-if="error.statusCode === 403" />
            <Error503 v-else-if="error.statusCode === 503" />
            <Error500 v-else />
        </main>
    </div>
</template>

<script setup>
defineProps(['error'])
</script>