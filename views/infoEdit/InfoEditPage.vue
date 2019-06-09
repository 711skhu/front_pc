<template>
  <div>
    <header-menu></header-menu>
    <info-edit></info-edit>
  </div>
</template>

<script>
  import HeaderMenu from '@/components/header/HeaderMenu'
  import InfoEdit from '@/pc/views/infoEdit/InfoEdit'

  export default {
    components: {
      HeaderMenu,
      InfoEdit
    }
  }
</script>
