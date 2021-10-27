<i18n lang='yaml'>
  en:
    add-to-cart: "Add to cart"
    tax: "excl tax"
  nl:
    add-to-cart: "In winkelwagen"
    tax: "excl BTW"
</i18n>

<template lang="pug">
  .product
    img.tumb(:src='"/" + data.image[0]')
    h5.title(@click='showProductDetails(data.id)') {{ data.title }}
    .price
      h6 {{ data.price }}
      span {{ $t('tax') }}
    Button.add(:text="$t('add-to-cart')" @click.native='addToCart(data.id)')
      Icon(name='cart')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    data: {
      required: true
    }
  },
  methods: {
    showProductDetails (productId: any) {
      this.$router.push(this.localePath({ name: 'productDetail-id', params: { id: productId } }))
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
  .product
    display: grid
    grid-auto-flow: row
    grid-template-areas: 'img' 'title' 'price' 'add'
    grid-gap: var(--ui-margin-y) var(--ui-margin-x)
    +pad
    +shadow(1)
    .tumb
      grid-area: img
      align-self: center
      justify-self: center
      height: 10rem
    .title
      grid-area: title
      text-align: center
      color: var(--color-primary)
      // To snap products on grid to same size
      overflow: scroll
      word-wrap: break-word
    .price
      display: flex
      flex-direction: column
      grid-area: price
      align-self: end
      justify-self: end
      h6
        font-weight: bolder
        &::before
          content: '€ '
      span
        // Smaller then price
        font-size: 0.7em
        align-self: end
    .add
      grid-area: add
      align-self: end
      justify-self: start
      .icon
        margin-right: 1rem
</style>
