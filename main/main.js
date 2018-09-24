// Write your cade below:
module.exports = function main() {
	var i, ans, num = [];
	for (i = 0; i < 2;i++)
	{
		num.push(arguments[i]);
	}
	if(num[0] > num[1])
		ans = num[0]%num[1];
	else
		ans = num[1]%num[0];
	return ans;
};