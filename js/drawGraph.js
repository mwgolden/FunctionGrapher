function drawGraph(graph, table)
{
	//var dataTable = document.getElementById("resultsTable");
	graph.width = 600;
	graph.height = 600;
	drawYAxis(graph);
	drawXAxis(graph);
	
	originx = parseFloat(graph.width/2);
	originy = parseFloat(graph.height/2);
	

	pointx = parseFloat(0);
	pointy = parseFloat(0);
	
	var arc = graph.getContext('2d');
	arc.beginPath();
	
	for(var i = 1; i < table.rows.length; i++)
	{	
		pointy = (parseFloat(originy) - parseFloat(table.rows[i].cells[0].innerHTML));
		pointx = (parseFloat(originx) + parseFloat(table.rows[i].cells[1].innerHTML));
		
		arc.moveTo(parseFloat(pointx), parseFloat(pointy));
		
		i++;
		if(i < table.rows.length)
		{	
			pointy = (parseFloat(originy) - parseFloat(table.rows[i].cells[0].innerHTML));
			pointx = (parseFloat(originx) + parseFloat(table.rows[i].cells[1].innerHTML));
			
			arc.lineTo(parseFloat(pointx), parseFloat(pointy));
			arc.stroke();
		}
	}
	
	
	
	//var circle = graph.getContext('2d');
	//circle.arc(originx, originy, 30, 0, 2 * Math.PI, false);
	//circle.lineWidth = 1;
	//circle.strokeStyle = '#003300';
	//circle.stroke();
}
function drawYAxis(graph)
{

	midWidth = graph.width/2;
	height = graph.height;
	var y_axis = graph.getContext('2d');
	y_axis.beginPath();
	y_axis.moveTo(midWidth, 0);
	y_axis.lineTo(midWidth, height);
	y_axis.stroke();
	
}
function drawXAxis(graph)
{

	midHeight = graph.height/2;
	width = graph.width;
	var y_axis = graph.getContext('2d');
	y_axis.beginPath();
	y_axis.moveTo(0, midHeight);
	y_axis.lineTo(width, midHeight);
	y_axis.stroke();
	
}