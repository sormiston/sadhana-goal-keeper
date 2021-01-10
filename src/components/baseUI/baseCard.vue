<template>
  <div class="card">
    <div class="flex-left">
      <header v-if="$slots.header">
        <slot name="header"></slot>
      </header>
      <slot></slot>
      <slot name="icons"></slot>
    </div>
    <div v-if="$slots.markDone" class="flex-right">
      <button></button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>