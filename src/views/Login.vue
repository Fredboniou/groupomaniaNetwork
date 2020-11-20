<template>
  <div class="login">
    <LoginForm Login='Identifiez-vous' log='Se connecter' />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style>
  img {
    margin-top: -300px;
  }
</style>