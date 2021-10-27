<template lang="pug">
  .input
    label(:for='name' :class='{up: up, disabled: disabled}')
      span {{displayLabel}}
    input(v-if="type != 'area'" :id='name' :name='name' :type='type' :required='required' :disabled='disabled' :value='value' @input="updateValue" @focus='focus = true' @blur='focus = false')
    textarea(v-else :id='name' :name='name' :type='type' :required='required' :disabled='disabled' :value='value' @input="updateValue" @focus='focus = true' @blur='focus = false')
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    type: {
      required: false,
      default: 'text',
      type: String
    },
    required: {
      required: false,
      default: false,
      type: Boolean
    },
    disabled: {
      required: false,
      default: false,
      type: Boolean
    },
    value: {
      required: false,
      default: '',
      type: String
    }
  },
  data () {
    return {
      focus: false
    }
  },
  computed: {
    up () {
      return !!(this.focus || this.value)
    },
    displayLabel () {
      return this.required ? `${this.label} *` : this.label
    }
  },
  methods: {
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    updateValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
  .input
    position: relative
    display: flex
    flex-direction: column
    margin-top: 0.6rem
    margin-bottom: 0.8rem
    background: #ffffff
    border-radius: 0.2rem
    &:first-of-type
      margin-top: var(--ui-margin-sides)
    &:last-of-type
      margin-bottom: var(--ui-margin-sides)
    label
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      display: flex
      flex-direction: column
      align-items: flex-start
      justify-content: flex-start
      color: var(--color-dark)
      font-weight: var(--font-weight-bolder)
      font-size: var(--font-size-base)
      padding: 0.5rem 0.7rem
      user-select: none
      pointer-events: none
      transition: all var(--animation-speed) var(--animation-curve)
      z-index: 25
      span
        position: relative
        padding: 0.2rem 0.4rem 1px 0.4rem
        margin: -0.2rem -0.4rem -1px -0.4rem
        background: linear-gradient(10deg, #ffffff 75% , transparent 90%)
        z-index: 10
      &.up
        font-size: 0.75em
        transform: translateY(-1.2rem)
      &.disabled
        color: var(--color-disabled)
    &:after
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      border: 0.1rem solid transparent
      border-radius: 0.2rem
      box-shadow: inset 0 0 0.25rem 0.3rem white
      user-select: none
      pointer-events: none
      z-index: 10
    input, textarea, select
      color: var(--color-dark)
      font-size: var(--font-size-base)
      font-weight: var(--font-weight-bolder)
      border: 0.1rem solid var(--color-dark-secondary)
      border-radius: 0.2rem
      user-select: text
      outline: none
      padding: 0.4rem 0.6rem
      &:focus
        border: 0.1rem solid var(--color-primary)
      &:disabled
        color: var(--color-disabled)
        -webkit-text-fill-color: var(--color-disabled) !important
        border: 0.1rem solid var(--color-disabled)
    textarea
      height: 10rem
</style>
