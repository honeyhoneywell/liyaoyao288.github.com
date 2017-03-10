window.onload=function(){

var odiv1=document.getElementById('title');
var adiv=odiv1.getElementsByTagName('div');
var atag=odiv1.getElementsByTagName('input');
var odiv2=document.getElementById('tables');
var atable=odiv2.getElementsByTagName('table');

for (var i=0;i<atag.length;i++)
{
	atag[i].index=i;
	atag[i].onclick=function()
	{
	for(var j=0;j<atag.length; j++)
		{
		adiv[j].className='flex-container';atable[j].style.display='none';
		}

	adiv[this.index].className='flex-container activebtn'; 
	atable[this.index].style.display='block';

		 //通过this.index得到现在被按下的按钮的序号
}

}

}