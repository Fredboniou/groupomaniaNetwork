<template>
  <div class="signForm">
    <div class="signup">
      <img
        alt="Groupomania"
        src="../assets/icon-left-font-monochrome-black.png"
      />
      <h1 class="signupPage">{{ Signup }}</h1>
    </div>
    <div class="signupLastname">
      <input
        class="formControl"
        type="text"
        placeholder="Nom"
        id="lastname"
        required
        v-model="lastname"
        name="userLastname"
        v-on:input="sendData"
        />
    </div>
    <div class="signupFirstname">
      <input
        class="formControl"
        type="text"
        placeholder="Prénom"
        id="firstname"
        required
        v-model="firstname"
        name="userFirstname"
        v-on:input="sendData"
        />
    </div>
    <div class="formSign">
      <div class="signupMail">
      <input
        class="formControl"
        type="email"
        placeholder="Email"
        id="email"
        required
        pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
        v-model="email"
        name="userEmail"
        v-on:input="sendData"
      />
      </div>
      <div class="signupPass">
      <input
          class="formControl"
          type="text"
          placeholder="Mot de passe"
          id="password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          v-model="password"
          name="userPassword"
          v-on:input="sendData"
        />
      </div>
      <div class="signupPresentation">
      <textarea
        class="formControl"
        placeholder="Présentez-vous brièvement"
        id="presentation"
        v-model="presentation"
        name="userPresentation"
        v-on:textarea="sendRequest"
        />
    </div>
      <div class="signupButton">
        <button
          class="btnForm"
          type="submit"
          v-on:click="sendRequest"
        >
        {{ sign }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
console.log("hello");
export default {
  name: "SignupForm",
  props: {
    Signup: String,
    sign: String
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