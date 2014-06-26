function checkBalance(exprArray)
{
	var testArray = new Array();
	var isBalanced = true;
	var arrayLength = exprArray.length;
	var charCount = 0;
	while(isBalanced === true && charCount < arrayLength)
	{
		var nextChar = exprArray[charCount];
		switch(nextChar)
		{
			case '(':
			case '[':
			case '{': testArray.push(nextChar); break;
			case ')':
			case ']':
			case '}':
						if(testArray.length == 0)
						{
							isBalanced = false;
						}
						if(testArray.length > 0)
						{
							var popChar = testArray.pop();
							switch(popChar)
							{
								case '(': if(nextChar === ')'){isBalanced = true;} break;
								case '[': if(nextChar === ']'){isBalanced = true;} break;
								case '{': if(nextChar === '}'){isBalanced = true;} break;
								default: isBalanced = false;
							}
						}
			break;
		}
		charCount++;
	}
	if(testArray.length > 0)
	{
		isBalanced = false;
	}
	if(isBalanced)
	{
		console.log(exprArray + ": Expression entered is balanced");
	}
	else
	{
		console.log(exprArray + ": Expression entered is not balanced");
	}
	return isBalanced;
}