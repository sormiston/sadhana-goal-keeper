<template>
  <div class="card">
    <div class="flex-left">
      <header v-if="title">
        <h3>{{ title }}</h3>
      </header>
      <slot></slot>
      <div v-if="$slots.icons" class="icons">
        <slot name="icons"></slot>
      </div>
      <div v-if="$slots.progressBar" class="flex-bottom">
        <slot name="progressBar"></slot>
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
.card {
  background-color: #fff;
  margin: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.75rem;
  box-shadow: 0px 0px 6px #d8d8d8;
  display: flex;
  
}

.flex-left {
  padding: 1rem;
  width: 100%; 
}

.flex-right {
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.flex-bottom {
  /* background-color: red;  */
  height: 5px;
}

header {
  text-align: left;
}

.icons {
  color: var(--text-light);
}
</style>