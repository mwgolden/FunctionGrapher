function test(){
		
		var expression = document.getElementById("expr").value;
		var exprStack= new Array();
		for(i = 0; i < expression.length; i++)
		{
			exprStack[i] = expression[i];
		}
		var balanced = checkBalance(exprStack);
		if(balanced)
		{
			var tokenized = tokenize(expression);
			var postfix = toPostfix(tokenized);
			console.log("postfix: " + postfix);
			console.log("tokenized: " + tokenized);
			document.getElementById("output").innerHTML = balanced;
			document.getElementById("postfix").innerHTML = postfix;
			var opts = {'lowerbound': parseFloat(document.getElementById("lbound").value), 'upperbound':parseFloat(document.getElementById("ubound").value), 'step':parseFloat(document.getElementById("step").value)};
			var result = evalPostFix(postfix, opts);
			document.getElementById("eval").innerHTML = result;
			drawGraph(document.getElementById("functionGraph"), document.getElementById("resultsTable"));
		}
	}