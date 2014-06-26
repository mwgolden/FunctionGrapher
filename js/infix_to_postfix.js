function toPostfix(infixExpression)
{
	var operatorPrecedence = "(-+*/^";
	var opStack = new Array();
	var postfix = new Array();
	var nextToken = "";
	
	for(var i = 0; i < infixExpression.length; i++)
	{
		nextToken = infixExpression[i];
		switch(true)
		{
			case isNumber(nextToken):	postfix.push(nextToken); 
										break;
										
			case isVariable(nextToken):	postfix.push(nextToken); 
										break;
						
			case isOperatorRightAssociative(nextToken):	opStack.push(nextToken);
														break;
														
			case isOperatorLeftAssociative(nextToken):	while(opStack.length > 0 && (operatorPrecedence.indexOf(nextToken) <= operatorPrecedence.indexOf(peekOpstack(opStack))))
														{
															postfix.push(opStack.pop());
														}
														opStack.push(nextToken);
														break;
			case (nextToken === "("):	opStack.push(nextToken);
										break;
			case (nextToken === ")"):	topOperator = opStack.pop();
						while(topOperator != "(")
						{
							postfix.push(topOperator);
							topOperator = opStack.pop();
						}
						break;
			default: console.log("Error: token " + nextToken + " not found in inFixExpression\nFunction: toPostFix()");
		}
	}
	while(opStack.length > 0)
	{
		topOperator = opStack.pop();
		postfix.push(topOperator);
	}
	console.log(postfix);
	return postfix;
}