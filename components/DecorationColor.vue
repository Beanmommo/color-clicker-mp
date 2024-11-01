<template>
    <div class="color-section">
        <span class="color-box-1" />
        <span class="color-box-2 " />
        <span class="color-box-3 " />
        <span class="color-box-4 " />
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/_variables' as *;

.color-section {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100vh;
    width: 100%;
}

.color-box {
    min-width: 100px;

    &-1 {
        background-color: $primary-1;
    }

    &-2 {
        background-color: $primary-2;
    }

    &-3 {
        background-color: $primary-3;
    }

    &-4 {
        background-color: $primary-4;
    }
}
</style>