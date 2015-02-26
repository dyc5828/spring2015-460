// PROJECTS SCRIPT
var prj = window.prj || {};

prj.$findGoal = function(ts) {
	return $('.goals[data-ts='+ts+']');
}

prj.$likeGoal = function(t) {
	return $('.goals[data-ts^='+t+']');
}

prj.hideGoals = function() {
	// console.log('hideGoals');
	if (arguments.length == 1) {
		prj.$likeGoal(arguments[0]).each(function() {
			$(this).hide();
		});
	}
	else {
		$('.goals').each(function() {
			$(this).hide();
		});
	}
}

prj.showGoal = function(ts) {
	prj.$findGoal(ts).show();
}

prj.getTs = function(el) {
	return $(el).attr('data-ts');
}

prj.showCurrent = function() {
	$('.sprint.ip').each(function() {
		var ts = prj.getTs(this);
		prj.showGoal(ts);
	});
}

prj.init = function() {
	prj.hideGoals();
	prj.showCurrent();
}

prj.enableSprintClick = function() {
	$('.sprint').on('click', function() {
		var ts = prj.getTs(this);
		var t = ts.substr(0,1);
		prj.hideGoals(t);
		prj.showGoal(ts);
	});
}


// RUN
prj.init();

prj.enableSprintClick();