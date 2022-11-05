<script setup lang="ts">

</script>

<template>
    <main>
        <section>
            <div class="float-container">
                <div class="float-child" id="contact-info">
                    <h3 id="contact-header" style="color:black">Contact Information</h3>
                    <h3 id="contact-text" style="color:black">
                        Welcome to Sole-Zon-Solis Energy, we are happy to answer any questions 
                        you might have about our services. Please fill out the contact us form and we will get back to you shortly!
                    </h3>
                    <h3 id="phone-number" style="color:black">
                        123-456-7890
                    </h3>
                    <h3 id="email-address" style="color:black">
                        user@email.com
                    </h3>
                </div>
                <div class="float-child" id="contact-form">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone Number"/>
                    <input type="file" placeholder="File Upload"/>
                    <button>Submit</button>
                </div>
            </div>         
        </section>
    </main>
</template>

<style>
.h3 {
    text-align: center;
}
.float-container {
    border-radius: 25px;
    background: green;
    border: 3px solid green;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    width: 500px;
    height: 600px;
}

.float-child {
    width: 50%;
    float: left;
    border-radius: 25px;
    padding: 20px;
    background: white;
    border: 2px solid black;
    width: 200px;
    height: 500px;
}
</style>