<template>
    <div>
        <h3 class="test3">{{ Titre_3 }}</h3>
        <h4 class="test4">{{ Titre_4 }}</h4>
    </div>
</template>

<script>
export default {
    name: "NewComponent",
    props: {
        Titre_3: String,
        Titre_4: String
    }
}
</script>

<style>
    .test3 {
        font-style: italic;
    }
    .test4 {
        color: red;
    }
</style>