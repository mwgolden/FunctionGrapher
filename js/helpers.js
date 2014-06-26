function isNumber(n) 
{ 
	return !isNaN(parseFloat(n)) && isFinite(n);
}
function isOperatorRightAssociative(t)
{
	var operator = "^";
	return (operator.indexOf(t) >= 0);
}
function isOperatorLeftAssociative(t)
{
	var operator = "*/+-";
	return (operator.indexOf(t) >= 0);
}
function isVariable(v)
{
	var letter = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
	return (letter.indexOf(v[0]) >= 0);
}
function peekOpstack(ops)
{
	var temp = ops.pop();
	ops.push(temp);
	return temp;
}