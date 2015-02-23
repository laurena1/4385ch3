//controllers/index.js
//Defining the Collection in the controlelr and not the view
Alloy.Collections.instance("cars");
//controllers/index.js
//create a new controller for view-controller pair
//that will eventually render the table
var carsController = Alloy.createController("cars");

//add the data to the collection after the  view-controller pair is created
Alloy.Collections.cars.reset(
	[
		{
			"make":"Honda",
		 	"model":"Civic"
		},
		{
			"make":"Honda",
			"model":"Accord"
		},
		{
			"make":"Ford",
			"model":"Escape"
		},
		{
			"make":"Ford",
			"model":"Mustang"
		},
		{
			"make":"Nissan",
			"model":"Altima"
		}
	]
);

carsController.mainWindow.open();