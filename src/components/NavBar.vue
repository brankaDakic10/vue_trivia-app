<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark nav-style">
            <router-link class="navbar-brand" to="/">TriviaApp</router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <!-- <li class="nav-item active"> -->
                    <router-link class="nav-item nav-link" to="/chuck">Chuck</router-link>
                    <!-- </li> -->


                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'TriviaApp'
    }
</script>

<style>
    .nav-style {
        background-color: rgb(34, 34, 202);
    }
</style>