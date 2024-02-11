<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width">
    <script src="file:///android_asset/app.js"></script>
    <script src="file:///android_asset/Libs/JQuery.js"></script>
    <script src="file:///android_asset/Libs/Flot.js"></script>
    <style>
        body {  
            font: 1.5em Helvetica, Arial, sans-serif;
            vertical-align: middle;
            background: #383838; 
        }
         
        .plot-container {
            box-sizing: border-box;
            width: 90%;
            height: 90%;
            padding: 1% 1% 1% 1%;
            margin: 2% auto 2% auto;
            border: 1px solid #444444;
            border-radius: 6px;
            background: #101010;   
        }
         
        .plot-placeholder {
            width: 50%;
            height: 50%;
            font-size: 14px;
            line-height: 1.2em;
        }
        
        .flot-tick-label {
            color: #777777;
        }

        button {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            font-size: 1em;
            cursor: pointer;
        }
    </style>
</head>
<body onload="OnStart()">

    <div id="content">
        <div class="plot-container">
            <div id="placeholder" class="plot-placeholder"></div>
        </div>
        <!-- Buttons for controlling the sensor -->
        <button onclick="startSensor()">Start Sensor</button>
            
    </div>  
    
    <script>
        // Initialise variables.        
        var sampleCount = 100;                
        var updateInterval = 10;   
        var sns = null;
        var plot = null;

        // Called when document is loaded.
        function OnStart() {

            
            // Create and start accelerometer sensor.
            sns = app.CreateSensor("Accelerometer", "Fast");
   
        }
        
        // Draw the HTML page.
      
       
   

        // Start the accelerometer sensor
        function startSensor() {
            sns.Start();
            i=0
                  while(i < 500)
            {
            app.ShowPopup( sns.GetValues()[3] )
            i+=1
       }
        }

        
    </script>
</body>
</html>
