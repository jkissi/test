// This is the test javascript file


var test = "global";

function out()
{
	var test = "local, Hello World!!!";
	return test;
}

window.alert(out());