<template lang="pug">
  //- Use dynamic vue components to render button or link
  component.btn(:is='componentType' :href='href' :type='type' :disabled='disabled' :class='{loading: loading}')
    slot
    span {{text}}
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'submit'
    },
    text: {
      type: String,
      required: false,
      default: 'Click'
    },
    href: {
      type: String,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    componentType () {
      if (this.href) {
        return 'a'
      }
      return 'span'
    }
  }
}
</script>

<style lang="sass" scoped>
  .btn
    position: relative
    display: flex
    flex-direction: row
    align-items: center
    justify-content: left
    font-weight: var(--font-weight-bold) !important
    font-size: 0.85em !important
    text-decoration: underline
    color: var(--color-dark)
    background: var(--color-secondary)
    transition: all var(--animation-speed) var(--animation-curve)
    pointer-events: all
    cursor: pointer
    text-decoration: none
    padding: 0.4rem 0.6rem
    border-radius: 0.2rem
    span
      width: 100%
      font: inherit
      position: relative
      text-align: center
    &:disabled
      background: var(--color-light-secondary)
      color: var(--color-disabled)
    &.succes
      background: var(--color-succes)
      color: var(--color-succes-text)
    &.loading
      span::after
        content: ''
        position: absolute
        left: 100%
        animation: loading calc(var(--animation-speed) * 6) var(--animation-curve) infinite
  @keyframes loading
    0%
      content: ''
    14.3%
      content: '.'
    28.6%
      content: '..'
    42.9%
      content: '...'
    57.2%
      content: '...'
    71.5%
      content: '..'
    85.8%
      content: '.'
    100%
      content: ''
</style>
