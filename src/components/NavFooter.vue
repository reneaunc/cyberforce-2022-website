<template>
    <div id="footer" class="center">
        <section id="footer-section">
            <img id="vita-logo" src="../assets/Vita.png"/>
            <button>Subscribe to Newsletter</button>
            <button>
                <RouterLink to="/contact">Contact Us</RouterLink>
            </button>
            <button>
                <RouterLink to="/manufacturing">Manufacturing</RouterLink>
            </button>
            <button>
                <RouterLink to="/solargen">Solar Generation</RouterLink>
            </button>
        </section>   
    </div>
</template>

<script>
</script>

<style scoped>
#footer {
    position: absolute;
    display: inline-block;
    bottom: 0;
    width: 100%

}
#vita-logo {
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;
    width: 20%;
}
button {
    margin-left: auto;
    margin-right: auto;
    /* margin-top: auto;
    margin-bottom: auto; */
    height: 100%;
    width: 20%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>