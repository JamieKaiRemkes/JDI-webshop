<i18n lang='yaml'>
  en:
    add-to-cart: "Add to cart"
    tax: "excl tax"
  nl:
    add-to-cart: "In winkelwagen"
    tax: "excl BTW"
</i18n>

<template lang="pug">
  .product(v-if='product')
    .contain
      h3.title {{ product.title }}
      //- add / to start add base url
      img(:src='"/" + product.image[0]')
      .options
        .price
          h5 {{ product.price }}
          span {{ $t('tax') }}
        Button.add(:text="$t('add-to-cart')" @click.native='addToCart(product.id)')
          Icon(name='cart')
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      product: null
    }
  },
  mounted () {
    this.getProduct()
  },
  methods: {
    async getProduct () {
      const url = `/api/products/${this.$route.params.id}`
      const product = await this.$axios.get(url)
      if (product) {
        // axios wraps res in data too
        this.product = product.data.data
      }
    },
    addToCart (productId: number) {
      // add to cart with product id
      // would be nice to centralise with vue store
      console.log(`Added product with id: ${productId} to cart`);
    }
  }
})
</script>

<style lang="sass" scoped>
  .contain
    display: grid
    grid-gap: var(--ui-margin-y) var(--ui-margin-x)
    grid-template-areas: 'title .' 'img options' 'img options'
    grid-template-columns: 2fr 1fr
    +contain
    +pad
    .title
      grid-area: title
      text-align: left
      color: var(--color-primary)
      // To snap products on grid to same size
      overflow: scroll
      word-wrap: break-word
    img
      grid-area: img
      width: 100%
      max-width: 25rem
      align-self: center
      justify-self: center
    .options
      grid-area: options
      display: flex
      flex-direction: column
      align-self: center
      justify-self: stretch
      .price
        display: flex
        flex-direction: column
        grid-area: price
        align-self: start
        h5
          font-weight: bolder
          &::before
            content: '€ '
        span
          // Smaller then price
          font-size: 0.7em
          align-self: end
      .btn
        margin-top: var(--ui-margin-y)
        .icon
          margin-right: 1rem
</style>
