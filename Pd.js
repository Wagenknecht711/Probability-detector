i = 0
function OnStart() 
{ 
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )  
	layBut = app.CreateLayout("Linear", "Horizontal") 
	lay.AddChild( layBut ) 
	btn0 = app.CreateButton( "=0", 0.23, 0.1 ) 
	btn0.SetOnTouch( btn0_OnTouch ) 
	layBut.AddChild( btn0 )
	btn1= app.CreateButton( ">2", 0.23, 0.1 ) 
	btn1.SetOnTouch( btn1_OnTouch ) 
	layBut.AddChild( btn1) 
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
choice = numa[i]
if (choice == "1"){
choice = Math.floor(Math.random() * (100)) + 2;
}
app.ShowPopup(choice );
i+=1
} 

function btn1_OnTouch() 
{ 
choice = numa[i]
if (choice == "1"){
choice = Math.floor(Math.random() * (100)) + 2;
}
app.ShowPopup(choice );
i+=1
} 
