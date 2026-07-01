document.getElementById('btn').addEventListener('click',() =>{
const apikey = "HIDDEN";
const inpvalue = document.getElementById('input').value;
const api = `https://api.openweathermap.org/data/2.5/weather?q=${inpvalue}&appid=${apikey}&units=metric`;

fetch(api)
.then(Response => Response.json()) 
.then(data =>{

const des = data.weather[0].description;
const tmp = data.main.temp;
const humd = data.main.humidity;
const ws = data.wind.speed;

const div = document.getElementById('div');

div.innerHTML = `
<h2>📍 ${inpvalue}</h2>

<p>Descriptions: ${des}</p>
<p>Temperature: ${tmp} &#8451</p>
<p>Humidity: ${humd} %</p>
<p>Wind Speed: ${ws} m/s</p>
`;

}).catch(error =>{
 console.error('An Error Occured',error);
  document.getElementById('div').innerText="City Not Found";
})

})
