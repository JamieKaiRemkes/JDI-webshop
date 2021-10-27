<i18n lang='yaml'>
  en:
    products: "Products:"
  nl:
    products: "Producten:"
</i18n>

<template lang="pug">
  .store
    .contain
      .Breadcrumbs
      .filters
        h6 {{ $t('products') }} {{ products.length }}
        .sort
        .pagelimit
      .list
        Product(v-for='product in products' :key='product.title' :data='product')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Store',
  data () {
    return {
      page: 1,
      limit: 15,
      products: []
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    async getProducts () {
      const products = await this.$axios.$get('/api/products', { params: { page: this.page, limit: this.limit } })
      this.products = products.data
    }
  }
})
</script>

<style lang="sass" scoped>
  .contain
    display: flex
    flex-direction: column
    +contain
    +pad
    .filters
      +pady
    .list
      display: grid
      grid-gap: var(--ui-margin-y) var(--ui-margin-x)
      +xs
        grid-template-columns: 1fr
      +md
        grid-template-columns: repeat(3, 1fr)
</style>
