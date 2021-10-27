<i18n lang="yaml">
  en:
    company_name: "Tools"
  nl:
    company_name: "Gereedschap"
</i18n>

<template lang="pug">
  .logo
    Icon(name='wrench').m
    h1.title {{ $t('company_name') }}
</template>

<style lang="sass" scoped>
  .logo
    display: flex
    flex: 1 0 auto
    flex-direction: row
    align-items: center
    .icon
      color: var(--color-primary)
      margin-right: var(--ui-margin-x)
    .title
      font-style: italic
      color: var(--color-primary)
      text-transform: uppercase
</style>
