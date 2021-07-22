const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

const cities = {
    "List": [
        {
            "CityCode": "1248991",
            "CityName": "Colombo",
            "Temp": "33.0",
            "Status": "Clouds"
        },
        {
            "CityCode": "1850147",
            "CityName": "Tokyo",
            "Temp": "8.6",
            "Status": "Clear"
        },
        {
            "CityCode": "2644210",
            "CityName": "Liverpool",
            "Temp": "16.5",
            "Status": "Rain"
        },
        {
            "CityCode": "2988507",
            "CityName": "Paris",
            "Temp": "22.4",
            "Status": "Clear"
        },
        {
            "CityCode": "2147714",
            "CityName": "Sydney",
            "Temp": "27.3",
            "Status": "Rain"
        },
        {
            "CityCode": "4930956",
            "CityName": "Boston",
            "Temp": "4.2",
            "Status": "Mist"
        },
        {
            "CityCode": "1796236",
            "CityName": "Shanghai",
            "Temp": "10.1",
            "Status": "Clouds"
        },
        {
            "CityCode": "3143244",
            "CityName": "Oslo",
            "Temp": "-3.9",
            "Status": "Clear"
        }
    ]
}

app.get("/", (req, res) => {
    res.send(cities);
});

app.listen(8081, () => {
    console.log("App's running on port 8081");
});