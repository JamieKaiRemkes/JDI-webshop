<template lang="pug">
  header
    .container
      Logo
      Basket
</template>

<style lang="sass" scoped>
  header
    position: sticky
    // for object observer to notice when sticking // will add
    top: -1px
    width: 100%
    +pad
    .container
      display: flex
      flex: 1 0 100%
      flex-direction: row
      align-items: center
      justify-content: space-between
      +contain
</style>
