<template>
<base-card :title="title">
    <template #default>
        <p>{{ description }}</p>
    </template>
    <template #progressBar>
        <progress-bar 
            :track="this.track"
            :totalSteps="this.totalSteps"
            :stepsComplete="this.stepsCompleted"
        ></progress-bar>
    </template>
</base-card>
</template>

<script>
import ProgressBar from './ProgressBar.vue';
export default {
  components: { ProgressBar },
  props: [
    "key",
    "title",
    "track",
    "description", 
    "totalSteps",
    "stepsCompleted", 
  ],
  computed: {

  }
};
</script>