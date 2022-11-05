<template>
    <div id="navbar" class="center">
        <nav>
            <RouterLink to="/"><img id="solozon-logo" src="../assets/SoloZon.png"></RouterLink>
            <button>
                <RouterLink to="/contact">Contact Us</RouterLink>
            </button>
            <button>
                <RouterLink to="/solargen">Solar Generation</RouterLink>
            </button>
            <button>
                <RouterLink to="/manufacturing">Manufacturing</RouterLink>
            </button>
            <button>
                <RouterLink to="/login">Login</RouterLink>
            </button>
            <!-- <RouterLink to="/about">About</RouterLink>  -->
        </nav>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
nav {
    display: inline-block;
}
#navbar {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    /* justify-content: center; */
    width: 100%;
}
button {
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;
    width: 20%;
}

#solozon-logo {
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;
    width: 20%;
}
/* .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
} */
</style>