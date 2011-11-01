define(["dojo/date"], function(date){
	return function(from, to){
		return (date.difference(from, to, "day") + 1) / 72;
	};
});
