// From http://jsbin.com/ciqomujuro/edit?html,js,output

function Chart(type, time)
{
	// need somewhere to keep your state
	this.state =
	{
		type: 'line',
		time: '24H'
	};
	this.render();
}

Chart.prototype.setState = function(newState)
{
	// and somewhere to change it
	for (var key in newState)
	{
		this.state[key] = newState[key];
	}

	// and then do something about your new state
	this.render();
};

Chart.prototype.render = function()
{
	document.getElementById('chart').innerHTML = JSON.stringify(this.state, null, 2);
};

// create a new chart that will be manipulated by the form
var myChart = new Chart();
