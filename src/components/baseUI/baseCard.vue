<template>
<div class="card">
    <div class="flex-left">
        <div class="flex-top">
            <header v-if="title">
                <h3>{{ title }}</h3>
            </header>
            <slot></slot>
            <div v-if="$slots.icons" class="icons">
                <slot name="icons"></slot>
            </div>
        </div>
        <div class="flex-bottom">
            <div v-if="$slots.progressBar" class="progress-bar">
                <slot name="progressBar"></slot>
            </div>
        </div>
    </div>
    <div v-if="$slots.markDone" class="flex-right">
        <slot name="markDone"></slot>
    </div>
</div>
</template>

<script>
export default {
    props: ["title"]
};
</script>

<style scoped>
.flex-left {
    padding: .5rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.flex-right {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
}

.progress-bar {
    position: relative;
    bottom: 0px;
    margin: 10px 0;
    height: 5px;
}

header {
    text-align: left;
}

.icons {
    color: var(--text-light);
}

h3 {
    font-size: 16px;
}

</style>
