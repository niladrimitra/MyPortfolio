var theme=localStorage.getItem('theme');

if(theme == null)
{
	setTheme('light');
}
else
{
	setTheme(theme);
}

var themeDots = document.getElementsByClassName('theme-dot');

for(var i=0; i < themeDots.length; i++)
{
	themeDots[i].addEventListener('click', function(){
		var mode = this.dataset.mode;
		setTheme(mode);
	});
}

function setTheme(mode)
{
	if(mode=='light')
		document.getElementById('theme-style').href="css/default.css";
	else if(mode=='green')
		document.getElementById('theme-style').href="css/green.css";
	else if(mode=='purple')
		document.getElementById('theme-style').href="css/purple.css";
	else
		document.getElementById('theme-style').href="css/blue.css";

	localStorage.setItem('theme',mode);
}