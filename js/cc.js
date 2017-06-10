var fDay = new Date(2016, 8, 10);// первый рабочий день, формате год, месяц - 1, день
var shablon = [2,2];			//график [рабочие,выходные]
var e = (shablon[0] + shablon[1]);
$( "#datepicker" ).datepicker({
	inline: true,
	showOtherMonths: true,
	selectOtherMonths: true,
	nextText: "Later",
	prevText: "Earlier",
	firstDay: 1,
	beforeShowDay: WhatDay,
	changeMonth: true,
	
});