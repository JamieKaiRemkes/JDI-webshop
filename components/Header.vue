<template lang="pug">
  header(:class='{sticking: sticking}')
    .container
      Logo
      Basket
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      sticking: false
    }
  },
  mounted () {
    const observer = new IntersectionObserver(this.handleIntersection, {
      rootMargin: '0px 0px 0px 0px',
      threshold: [1]
    })
    observer.observe(this.$el)
  },
  methods: {
    handleIntersection (e: IntersectionObserverEntry[]) {
      const el = document.querySelector('#__page')
      if (el) {
        !e[0].isIntersecting && (el.scrollTop > 0) ? this.sticking = true : this.sticking = false
      }
    }
  }
})
</script>
<style lang="sass" scoped>
  header
    position: sticky
    // for object observer to notice when sticking // will add
    top: -1px
    width: 100%
    z-index: 100
    background: var(--color-light)
    transition: all var(--animation-speed) var(--animation-curve)
    +pad
    &.sticking
      +shadow(1)
    .container
      display: flex
      flex: 1 0 100%
      flex-direction: row
      align-items: center
      justify-content: space-between
      +contain
</style>
