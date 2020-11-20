<template>
  <div class="logForm">
    <div class="login">
      <img
        alt="Groupomania"
        src="../assets/icon-left-font-monochrome-black.png"
      />
      <h1 class="loginPage">{{ Login }}</h1>
    </div>
    <div class="formLog">
      <div class="logMail">
      <input
        class="formControl"
        type="email"
        placeholder="Email"
        id="email"
        required
        pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
        maxlength="250"
        aria-label="Entrez votre email"
        v-model="email"
        v-on:input="sendData"
      />
      </div>
      <div class="logPass">
      <input
          class="formControl"
          type="password"
          placeholder="Mot de passe"
          id="password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          maxlength="100"
          aria-label="Entrez votre mot de passe"
          v-model="password"
          v-on:input="sendData"
        />
      </div>
      <div class="logButton">
        <button
          class="btnForm"
          type="submit"
          v-on:click="sendRequest"
        >
        {{ log }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
console.log("hello");
export default {
  name: "LoginForm",
  props: {
    Login: String,
    log: String
  }
};
</script>

<style>
  input {
    margin-bottom: 1.5rem;
    border: 2px solid #000000;
  }

  button {
    border: 2px solid #000000;
    font-weight: bold;
  }
  button:hover {
    background-color: #7f7f7f;
    cursor: pointer;
  }
</style>