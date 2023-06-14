/**Used to store cards & scores/players & Basic Functions**/

var jobs = ['Steal three cows from the neighboring village of Hellsmouth','Slay a dragon (any dragon) for the King','Win the weekly drinking contest','Clear the mines of Goblins','Rid the forest of gigantic spiders','Kidnap the princess','Get my sword back from Farmer Giles of Ham','Visit the goblin market of Renere and bring me back seven dirty diamonds','Delve the swamps of Cath and bring back a vial of "Gas o lean."','Visit the goblin market of Renere and bring me back seven dirty diamonds','Invade Hang Station, deep in the Heart Beneath the City and rescue my daughter','Quiet the restless dead in Old MacDonlad\'s fruit orchards','Confront the green dragon roosting by the river','Try to stay out of trouble, for God\'s sake!','Bring me a shrubbery'];
var jobs_used = [];
var quals = [['Fighter','Rogue','Barbarian','Wizard','Druid','Necromancer','Priest','Paladin','Zombie','Vampire','Psychic','Bard','Scholar','Brandon, destroyer of worlds','Sigurd, Avatar of the Goddess of Icebergs','Monk'],['Chaotic','Chaotic-neutral','True nuetral','Lawful-neutral','Lawful'],['Horrifyingly evil','E V I L !','Evil-ish','Evil','Neutral','Good','Good-ish','G O O D !','Horrifyingly good'],['pick axe','an infinitely refilling keg of coffee','magical eye patch','magical tiara','My family\'s third best sword','My brother\'s magical belt','The Helm of Disintegration(tm)','Candle of rejuvenation','The stolen Helm of Disintegration (tm)','A knock off Helm of Disintegration (tm)','Three gold pieces and two tufts of fur','Lock picking tools','Artisan\'s tools','Je ne sais quoi','The ability to put anyone to sleep through lecture','Seven sigils of protection','More moxy than you can shake a stick at ','Thirty goblin zombies in a frayed bag of holding','A distinctly abrasive personality','Cuteness','A tiny forest god','A literal angel and a literal devil on my shoulders','Yoric\'s crown','Yoric\'s true crown','30 feet of rope and a ten foot pole','Blindingly white teeth','The power of an exploding sun','A bemused ancient chimera for a companion','A rod of lightning (Wait, wait, or is it a lightning rod?)']];
var quals_used = [[],[],[],[]];

//counters
var scores = {}; //example, will populate with function later
var numPlayers = 0;
var currentBoss = 0;
var currentPlayer = 1; //tracks which player/employee is going up for quals
var qualCounter = 1;

//Helper Functions
function getJob(){
	if(jobs.length === 0){
		jobs = jobs.concat(jobs_used);
		jobs_used = [];
	}
	var index = Math.floor(Math.random() * jobs.length); //random var
	var result = jobs[index]; //returns result later
	jobs_used = jobs_used.concat(jobs.splice(index, 1)); //puts the jobs into used arr
	return result; //returns result
}
function getQual(qualClass){
	if(quals[qualClass].length === 0){
		quals[qualClass] = quals[qualClass].concat(quals_used[qualClass]);
		quals_used[qualClass] = [];
	}
	var index = Math.floor(Math.random() * quals[qualClass].length); //random var
	var result = quals[qualClass][index]; //returns result later
	quals_used[qualClass] = quals_used[qualClass].concat(quals[qualClass].splice(index, 1)); //puts the quals into used arr
	return result; //returns result
}
function nextBoss(){
	return (currentBoss+1 == numPlayers)?0:currentBoss+1; // basically cycles through the players properly
}
function pName(x){
	return Object.keys(scores)[x]; //return dictionary entry using index
}


/***********Animations*************/
//Animate Functions
function animateTitle(){
	$("#MainPage .select").hide();
	$('#MainPage .boxes').hide();
	$('#MainPage .startgame').hide();
	$('#MainPage .howPlay').hide();
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		$(nSelector).hide();
	}
	quickAnim("#MainPage .title", "zoomIn");
	setTimeout(quickAnim, 400, '#MainPage .select', 'zoomIn',);
	setTimeout(quickAnim, 800, '#MainPage .boxes', 'zoomIn',);
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		setTimeout(quickAnim, 750+(75*i), nSelector, 'zoomIn',);
	}
	setTimeout(quickAnim, 1200, '#MainPage .startgame', 'zoomIn');
	setTimeout(quickAnim, 1250, '#MainPage .howPlay', 'zoomIn');
}
function roundStartAnim(){
	setTimeout(quickAnim, 1100, "#GamePage", "slideInDown");
	
	$("#GamePage").children().hide();
	$("#GamePage h1").show();
	var timeoutCounter = 2100;
	var timeoutInterval = 500;
	$("#GamePage").children().each(function () {
	  	if(!$(this).is("h1") && !$(this).is("div#pickWinner")){
	  		setTimeout(quickAnimObj, timeoutCounter, $(this), "slideInRight");
	  		timeoutCounter+=timeoutInterval;
	  	}
	});
	
}

//Animate Helper Functions
function quickAnim(selector, animName){
  $(selector).addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass(animName + ' animated');
    $(this).show();
  });
};
function quickAnimObj(Obj, animName){
  Obj.addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    Obj.removeClass(animName + ' animated');
    Obj.show();
  });
};

function quickAnimHide(selector, animName){
  $(selector).addClass(animName + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  	$(this).hide();
    $(this).removeClass(animName + ' animated');
  });
};

animateTitle();

