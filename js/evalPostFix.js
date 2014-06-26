function evalPostFix(postfixExpr, opts)
{
	valueStack = new Array();
	nextToken = "";
	hasOpts = false;


	variable = opts['lowerbound'];
	upperBound = opts['upperbound'];
	step = opts['step'];
	
	htmlTable = "<table id=\"resultsTable\"><tr><td>y</td><td>x</td><td>step</td></tr>";

	while(variable <= upperBound)
	{
		for(var i = 0; i < postfixExpr.length; i++)
		{
			nextToken = postfixExpr[i];
			switch(true)
			{
				case isNumber(nextToken):	valueStack.push(nextToken); 
											break;
										
				case isVariable(nextToken):	valueStack.push(variable);
											break;
				
				case isOperatorRightAssociative(nextToken):
				case isOperatorLeftAssociative(nextToken):
															operandTwo = parseFloat(valueStack.pop());
															operandOne = parseFloat(valueStack.pop());
															switch(nextToken)
															{
																case '+':	valueStack.push(operandOne + operandTwo); break;
																case '-': 	valueStack.push(operandOne - operandTwo); break;
																case '*':	valueStack.push(operandOne * operandTwo); break;
																case '/':	valueStack.push(operandOne / operandTwo); break;
																case '^': 	valueStack.push(Math.pow(operandOne, operandTwo)); break;
															}
				
			}
		}
		htmlTable += "<tr><td>"+valueStack.pop()+"</td><td>"+variable+"</td><td>"+step+"</td></tr>";
		variable += step;
	}
	
	htmlTable += "</table>";
	console.log(htmlTable);
	return htmlTable;
}