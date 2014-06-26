function tokenize(expression)
{
	var letter = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
	var number = "1234567890";
	var operator = "()^*/+-";
	var chrChar = '';
	var nxtChar = '';
	var token= "";
	var tokenArray = new Array();
	var exprIndexCounter = 0;
	var tokenArrayIndexCounter = 0;
	
	chrChar = expression[exprIndexCounter];
	if(exprIndexCounter < (expression.length) - 1)
	{
		nxtChar = expression[exprIndexCounter + 1];
	}
		
	while(exprIndexCounter < expression.length)
	{
	
		if(letter.indexOf(chrChar) != -1)
		{
			while((letter.indexOf(chrChar) != -1) && (exprIndexCounter < expression.length))
			{
				token += chrChar;
				chrChar = nxtChar;
				exprIndexCounter++;
				if(exprIndexCounter < (expression.length) - 1)
				{
					nxtChar = expression[exprIndexCounter + 1];
				}	
			}
			if(token != "")
			{
				tokenArray[tokenArrayIndexCounter] = token;
				tokenArrayIndexCounter += 1;
				token = "";
			}
		}
		else if(number.indexOf(chrChar) != -1)
		{
			while((number.indexOf(chrChar) != -1) && (exprIndexCounter < expression.length))
			{
				token += chrChar;
				chrChar = nxtChar;
				exprIndexCounter++;
				if(exprIndexCounter < (expression.length) - 1)
				{
					nxtChar = expression[exprIndexCounter + 1];
				}	
			}
			if(token != "")
			{
				tokenArray[tokenArrayIndexCounter] = token;
				tokenArrayIndexCounter += 1;
				token = "";
			}
		}
		else if(operator.indexOf(chrChar) != -1)
		{
			if((chrChar == '-' && exprIndexCounter == 0) || (chrChar == '-' && operator.indexOf(tokenArray[tokenArrayIndexCounter - 1]) != -1)) //unary minus at beginning of expression or after an operator
			{
				tokenArray[tokenArrayIndexCounter] = '(';
				tokenArrayIndexCounter += 1;
				tokenArray[tokenArrayIndexCounter] = '0';
				tokenArrayIndexCounter += 1;
				tokenArray[tokenArrayIndexCounter] = '-';
				tokenArrayIndexCounter += 1;
				tokenArray[tokenArrayIndexCounter] = '1';
				tokenArrayIndexCounter += 1;
				tokenArray[tokenArrayIndexCounter] = ')';
				tokenArrayIndexCounter += 1;
				tokenArray[tokenArrayIndexCounter] = '*';
				tokenArrayIndexCounter += 1;
					
				chrChar = nxtChar;
				exprIndexCounter++;
				if(exprIndexCounter < (expression.length) - 1)
				{
					nxtChar = expression[exprIndexCounter + 1];
				}
				token = "";
			}
			else
			{
				token += chrChar;
				chrChar = nxtChar;
				exprIndexCounter++;
				if(exprIndexCounter < (expression.length) - 1)
				{
					nxtChar = expression[exprIndexCounter + 1];
				}	
				if(token != "")
				{
					tokenArray[tokenArrayIndexCounter] = token;
					tokenArrayIndexCounter += 1;
					token = "";
				}
			}
		}
		else
		{
			chrChar = nxtChar;
			exprIndexCounter++;
			if(exprIndexCounter < (expression.length) - 1)
			{
				nxtChar = expression[exprIndexCounter + 1];
			}	
		}
		
	}
	return tokenArray
}