$document.ready(function(){
	$(".spoiler .title").click(function()
	{
		$(this).parent().find(".text").toggle('500');
	}
	);
}
);