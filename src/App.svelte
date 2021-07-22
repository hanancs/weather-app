<script>
  import Home from "./Home.svelte";
</script>

<h1 class="heading">Weather App ⛅</h1>
<main>

  <Home/>
  
</main>

<div class="footer">
  <h5 class="power">Powered by </h5>
  <img src="images/open.png" alt="OpenWeather" />
</div>

<style>
  .heading {
    color: aliceblue;
    padding-left: 30px;
  }

  .power{
    margin-top: 0;
    margin-bottom: 20px;
  }

  .footer {
    background-color: rgb(255, 255, 255);
    padding-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 60px;
    text-align: center;
    width: 400px;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  img {
    /* filter: url(filters.svg#grayscale); Firefox 3.5+ */
    filter: gray; /* IE5+ */
    -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
    -webkit-transition: all 0.8s ease-in-out;
    width: 130px;
  }

  img:hover {
    filter: none;
    -webkit-filter: grayscale(0);
  }
</style>
