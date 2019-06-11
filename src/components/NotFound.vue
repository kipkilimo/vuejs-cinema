<template>
    <div>
        <div class="container">
            <img src="https://www.fusioncharts.com/public/images/404-img.png" alt="" style="width:60%">
              <div class="right">
                <h1 class="woops">Woops!</h1>
                <div class="">
                  <h2 class="error-code">404</h2>
                  <h3 class="message">I have looked all around but just can't find the page you are looking for. How about going to the homepage?</h3>
                </div>
              </div>
              <div class="centered">
                <h1 ><a href="/" class="centered">Home</a></h1>
              </div> 
        </div>             
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* resize images */
.container {
  position: relative;
  text-align: center;
  color: white;
  background-color: antiquewhite; 
}
.centered {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: aqua !important;
  font-size: 1em;
  font-family: 'Merienda One', cursive !important;
}
.right {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:#1bc587 !important;
  font-size: 1em;
}
</style>