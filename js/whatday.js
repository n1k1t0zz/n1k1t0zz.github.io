function WhatDay(date){
var
///day = date.getDate(),
///month = date.getMonth(),
///year = date.getFullYear(),
///dDay = new Date(year, month, day),
dDay = new Date(date);
		if(dDay>=fDay){
		sDay = Math.ceil((dDay - fDay) / (1000 * 60 * 60 * 24));
		while (sDay>=e){sDay=sDay-e}; ///
		if(sDay<shablon[0]){
		return [true, "work"];
		}else{
		return [true, "nowork"];
		}}
		else{
		sDay = Math.ceil((fDay-dDay) / (1000 * 60 * 60 * 24));
		while (sDay>e){sDay=sDay-e}; ///
		if(sDay<=shablon[1]){
		return [true, "nowork"];
		}else{
		return [true, "work"];
		}}
	}