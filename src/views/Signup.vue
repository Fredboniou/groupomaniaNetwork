<template>
  <div class="signup">
    <SignupForm Signup='Inscrivez-vous au Groupomania network' sign='Créer mon compte' />
  </div>
</template>

<script>
// @ is an alias to /src
import SignupForm from '@/components/SignupForm.vue'

export default {
  name: 'Signup',
  components: {
    SignupForm
  }
}
</script>

<style>
  img {
    margin-top: -300px;
  }
</style>