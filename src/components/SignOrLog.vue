<template>
  <div>
    <h1>Bienvenue sur le réseau social interne à la société Groupomania</h1>
    <nav>
      <router-link to="/login">Se connecter</router-link> |
      <router-link to="/Signup">S'inscrire</router-link>
    </nav>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "SignOrLog",
  props: {
    msg: String
  }
};
</script>

<style>
    h1 {
        margin-top: -200px;
    }

    a {
        text-decoration: none;
        color:  #2c3e50;
        font-weight: bold;
        font-size: 1.5rem;
    }
    a:hover {
        color: #ff7f00;
    }
    p {
      font-size: 1.3rem;
    }
</style>