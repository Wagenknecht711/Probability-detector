i = 0
choiceX=Math.floor(Math.random() * (2)) + 0;
function OnStart() 
{ 
	layBut= app.CreateLayout( "linear", "VCenter,FillXY" )  
	lay= app.CreateLayout("Linear", "Horizontal") 

	lay.AddChild( layBut ) 
	btn0 = app.CreateButton( "off", 0.23, 0.05 ) 
	btn0.SetOnTouch( btn0_OnTouch ) 
	layBut.AddChild( btn0 )
	btn1= app.CreateButton( "on", 0.23, 0.05 ) 
	btn1.SetOnTouch( btn1_OnTouch ) 
	layBut.AddChild( btn1) 
	btn2= app.CreateButton( "0", 0.23, 0.1 ) 
	btn2.SetOnTouch( btn2_OnTouch ) 
	lay.AddChild( btn2) 
	btn3= app.CreateButton( "1", 0.23, 0.1 ) 
	btn3.SetOnTouch( btn3_OnTouch ) 
	lay.AddChild( btn3) 
	btn4= app.CreateButton( "randomize toggle", 0.23, 0.1 ) 
	btn4.SetOnTouch( btn4_OnTouch ) 
	lay.AddChild( btn4) 
	app.AddLayout( lay ) 
	
	choice = Math.floor(Math.random() * (2)) + 0
	numa = ""
for(var a = 0; a < 500;a++){
var b =  Math.floor(Math.random() * (2)) + 0;
numa += b ;
}
} 

function btn0_OnTouch() 
{ 

choiceX == "0"
app.ShowPopup("off" );
} 

function btn1_OnTouch() 
{ 

choiceX == "1"
app.ShowPopup("on" );
} 

function btn2_OnTouch() 
{ 

if (choiceX == "0"){
choice = numa[i]
i+=1
}
if (choiceX == "1"){
choice = Math.floor(Math.random() * (2)) + 0;
}
app.ShowPopup(choice );

} 

function btn3_OnTouch() 
{ 

if (choiceX == "0"){
choice = numa[i]
i+=1
}
if (choiceX == "1"){
choice = Math.floor(Math.random() * (2)) + 0;
}
app.ShowPopup(choice );

} 


function btn4_OnTouch() 
{ 
choiceX= Math.floor(Math.random() * (2)) + 0;

if (choiceX == "0"){
app.ShowPopup("off")
}
if (choiceX == "1"){
app.ShowPopup("on")
}


} 
