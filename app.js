           const express = require("express");
            const https = require("https");
            const bodyParser = require("body-parser");
            
            const app = express();
            app.use(bodyParser.urlencoded({extended: true}));
            app.get("/", function(req, res){
               res.sendFile(__dirname + "/index.html"); 
                
            });
            app.post("/", function(req,res){
                  const query = req.body.cityName;
              const apikey= "5c4246e67ac81e4ec945373bc8972733"
             const unit = "metric"
                const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + unit ;
                  https.get(url, function(response){
                    console.log(response.statusCode);
                    response.on("data",function(data){
                      const weatherData = JSON.parse(data);
                       const temp = weatherData.main.temp
                       const description = weatherData.weather[0].description;
                       const wind =weatherData.wind.speed;
                       const temp_min = weatherData.main.temp_min;
                       const temp_max =weatherData.main.temp_max;
                       const icon = weatherData.weather[0].icon;
                       const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
                       //res.write("<body style='background-color: aqua;'>");
                       res.write("<body style='background-color: white;'>");
res.write("<div style='background-color: aqua;  position: center;width: 40%; height: 50%; border: 1px solid black;'>");
                      //  res.write("<body style='height: 400px; width: 400px;border: 1px solid black;'>");
                       res.write("<p> The weather is currently " + description + "</p>");
                       res.write("<h1 style='color: blue;font-size: 18px;'>The temperature in "  + query +  " is "    + temp +  " degrees Celcius.</h1>");
                       res.write("<img style='background-color: yellow;' src=" + imageURL +">");
                       res.write("<p style='color: green; font-size: 18px;'>wind speed is " + wind + "</p>");
                       //res.write("<p>wind speed is" + wind +"</p>");
                       res.write("<p style='color: red;font-size: 18px;'>Temp_min: "+ temp_min +"</p>");
                       res.write("<p style='color: red;font-size: 18px;'>Temp_max: " +temp_max + "</p>");
                       res.write("</div>");
                       res.write("</body>");
                       res.send()
                    })
                    });
                });
            app.listen(3000,function(){
                console.log("server is running on port 3000");
            })

