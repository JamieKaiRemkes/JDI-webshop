<template lang="pug">
  .basket
    Icon(name='cart')
    span.total {{ currentTotal }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      // Mock should be computed
      currentTotal: 0
    }
  }
})
</script>

<style lang="sass" scoped>
  .basket
    display: flex
    flex-direction: row
    .icon
      color: var(--color-primary)
    .total
      font-weight: bold
      margin-left: var(--ui-margin-x)
</style>
