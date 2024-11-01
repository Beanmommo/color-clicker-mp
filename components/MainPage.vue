<script setup lang="ts">
const name = ref<string>()
function clickHandlerJoin() {
    console.log(name.value)
}
</script>

<template>
    <div>
        <h1>
            COLOR PICKER
        </h1>
        <h4>Collaborate to Win!!</h4>
        <div>
            <input v-model="name" type="text" />
        </div>
        <div>
            <button>Host Room</button>
            <button @click="clickHandlerJoin">Join Room</button>
        </div>
    </div>

</template>