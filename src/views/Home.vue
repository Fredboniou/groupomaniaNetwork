<template>
  <div class="home">
    <img alt="Groupomania" src="../assets/icon-left-font-monochrome-black.png">
    <SignOrLog msg='Identifiez vous ou connectez vous à votre compte' />
    <NewComponent Titre_3="Encore un test"/>
    <NewComponent Titre_4="Et un dernier"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignOrLog from '@/components/SignOrLog.vue'
import NewComponent from '@/components/NewComponent.vue'

export default {
  name: 'Home',
  components: {
    SignOrLog,
    NewComponent
  }
}
</script>

<style>
  img {
    margin-top: -300px;
  }
</style>
