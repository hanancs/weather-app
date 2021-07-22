<script>

  let cities = [
    {
      CityCode: "1248991",
      CityName: "Colombo",
      Temp: "33.0",
      Status: "Clouds",
    },
    {
      CityCode: "1850147",
      CityName: "Tokyo",
      Temp: "8.6",
      Status: "Clear",
    },
    {
      CityCode: "2644210",
      CityName: "Liverpool",
      Temp: "16.5",
      Status: "Rain",
    },
    {
      CityCode: "2988507",
      CityName: "Paris",
      Temp: "22.4",
      Status: "Clear",
    },
    {
      CityCode: "2147714",
      CityName: "Sydney",
      Temp: "27.3",
      Status: "Rain",
    },
    {
      CityCode: "4930956",
      CityName: "Boston",
      Temp: "4.2",
      Status: "Mist",
    },
    {
      CityCode: "1796236",
      CityName: "Shanghai",
      Temp: "10.1",
      Status: "Clouds",
    },
    {
      CityCode: "3143244",
      CityName: "Oslo",
      Temp: "-3.9",
      Status: "Clear",
    },
  ];

  let selected, input;

  let cityName,
    country,
    sunrise,
    sunset,
    main,
    description,
    temp,
    pressure,
    humidity,
    tempmin,
    tempmax,
    visibility,
    speed,
    deg,
    all,
    dt,
    id;

  function handleSubmit() {
    // alert(`Chosen city code is ${selected.CityCode}`);
    input = selected.CityCode;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${input}&APPID=${env.process.API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((city) => {
        cityName = city.name;
        country = city.sys.country;
        sunrise = city.sys.sunrise;
        sunset = city.sys.sunset;
        main = city.weather[0].main;
        description = city.weather[0].description;
        temp = city.main.temp;
        pressure = city.main.pressure;
        humidity = city.main.humidity;
        tempmin = city.main.temp_min;
        tempmax = city.main.temp_max;
        visibility = city.visibility;
        speed = city.wind.speed;
        deg = city.wind.deg;
        all = city.clouds.all;
        dt = city.dt;
        id = city.id;
      });

    
  }
</script>

<div class="container">
  <div class="sub">
    <h2>Choose City from here</h2>

    <form on:submit|preventDefault={handleSubmit}>
      <select bind:value={selected}>
        {#each cities as city}
          <option value={city}>
            {city.CityName}
          </option>
        {/each}
      </select>

      <button class="btn1" type="submit"> Submit </button>
    </form>
  </div>

  <!-- <form on:submit|preventDefault={handleWeather}>
  <input type="text" bind:value={input} />

  <button type="submit"> Submit </button>
</form> -->

  <div class="card">
    <h1>Weather Info</h1>
    <ul class="info">
      <li>City: {cityName === undefined ? "" : cityName}</li>
      <li>Country: {country === undefined ? "" : country}</li>
      <li>Sunrise: {sunrise === undefined ? "" : sunrise}</li>
      <li>Sunset: {sunset === undefined ? "" : sunset}</li>
      <li>Main: {main === undefined ? "" : main}</li>
      <li>Description: {description === undefined ? "" : description}</li>
      <li>Temperature: {temp === undefined ? "" : temp}</li>
      <li>Pressure: {pressure === undefined ? "" : pressure}</li>
      <li>Humidity: {humidity === undefined ? "" : humidity}</li>
      <li>Temperature Minimum: {tempmin === undefined ? "" : tempmin}</li>
      <li>Temperature Maximum: {tempmax === undefined ? "" : tempmax}</li>
      <li>Visibility: {visibility === undefined ? "" : visibility}</li>
      <li>Speed: {speed === undefined ? "" : speed}</li>
      <li>Degree: {deg === undefined ? "" : deg}</li>
      <li>All: {all === undefined ? "" : all}</li>
      <li>DT: {dt === undefined ? "" : dt}</li>
      <li>ID: {id === undefined ? "" : id}</li>
    </ul>
  </div>
</div>



<style>
  .card {
    color: aliceblue;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 60px;
    text-align: center;
    width: 50%;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(87%2c 40%2c 139%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c391.018C99.562%2c386.556%2c193.632%2c480.88%2c287.471%2c447.313C383.106%2c413.104%2c439.3%2c312.269%2c480.138%2c219.272C520.599%2c127.134%2c527.872%2c25.725%2c516.512%2c-74.263C504.891%2c-176.55%2c498.45%2c-299.623%2c414.428%2c-359.104C329.032%2c-419.558%2c211.381%2c-357.916%2c106.941%2c-364.208C31.088%2c-368.778%2c-39.106%2c-397.654%2c-114.804%2c-390.988C-204.941%2c-383.05%2c-304.143%2c-382.284%2c-371.677%2c-322.06C-441.34%2c-259.937%2c-465.121%2c-161.152%2c-476.433%2c-68.501C-487.583%2c22.828%2c-463.068%2c111.074%2c-435.267%2c198.78C-403.958%2c297.554%2c-399.305%2c431.981%2c-304.521%2c473.843C-206.305%2c517.221%2c-107.261%2c395.825%2c0%2c391.018' fill='%2346206f'%3e%3c/path%3e%3cpath d='M1440 863.947C1504.732 864.9549999999999 1572.899 886.1179999999999 1630.112 855.821 1688.716 824.787 1728.274 763.998 1748.19 700.745 1766.966 641.11 1739.855 579.784 1736.684 517.343 1733.105 446.882 1769.025 367.78999999999996 1728.3519999999999 310.142 1687.705 252.53199999999998 1605.904 242.36900000000003 1536.03 232.95 1473.253 224.48700000000002 1412.55 241.676 1351.727 259.371 1290.755 277.11 1226.345 291.042 1181.574 336.073 1135.336 382.579 1110.604 446.38599999999997 1101.254 511.296 1091.903 576.217 1101.936 642.283 1128.8519999999999 702.097 1155.867 762.13 1195.252 819.582 1253.654 849.961 1310.058 879.3 1376.43 862.957 1440 863.947' fill='%236830a7'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  }

  .sub {
    display: flexbox;
    padding-right: 78px;
  }

  ul {
    list-style-type: none;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: rgb(70, 32, 111);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }

  .btn1:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  @media only screen and (max-width: 768px) {
    .container {
      color: aliceblue;
      display: block;
      justify-content: center;
      align-items: center;
    }

    .card {
      min-width: 355px;
      padding: 20px;
    }

    .sub {
      display: flexbox;
      padding: 0px 0px 30px 0px;
    }
  }
</style>
