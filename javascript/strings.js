var textDir = "ltr"; // LTR or RTL

var gameRules = `
			The first player is chosen to start the game as the Barkeep. Everyone else starts as an adventurer.
			The adventurers get 5 Qualities each. <br><br>

			Starting to the left of the Barkeep, each adventurer pitches themeself by explaining why their qualities are
			the best fit for the Barkeep's job.<br><br>

			After all adventurers have had a turn, the Barkeep chooses which adventurer they feel offers the chance of success and
			the adventurer gets a point. A new Barkeep is chosen and the cycle begins again.
`;

var strings = {
	app_welcome: "Welcome to ",
	app_name: "FUNgeons and Flagons",
	player_count: "How many adventurers? (recommended: 4 or more)",
	num_1: "1",
	num_2: "2",
	num_3: "3",
	num_4: "4",
	num_5: "5",
	num_6: "6",
	num_7: "7",
	num_8: "8",
	num_9: "9",
	num_10: "10",
	player: "Adventurer",
	player_name: "Adventurer 1",
	start_game: "Start the Game!",
	how_do_i_play: "How do I play?",
	game_rules: gameRules,
	applicant: "Potential adventurer",
	qualification: "Qualification",
	employer: "Barkeep",
	next_qualification: "Additional information",
	quals: "?????",
	who_is_new_employee: "Who's Your adventurer?",
	past_quals: "Adventurer's qualities",
	player_won: "Player 1 is the New Adventurer!",
	next_round: "Next Round",
	end_game: "End this Game",
	wanted: "wants you to",
	next_applicant: "Next Potential Adventurer",
	next_qualification: "Next quality",
	is_the_new: " will provide: ",
	current_scores: "Number of adventures Won",
	reset: "Reset Timer"
};

$(function() {	
	$("[data-localize]").each(function( i ) {
		keys = $(this).data( "localize" ).split(" ");
		replacement = "";
		for (i = 0; i < keys.length; i++) {
		  replacement += strings[keys[i]];
		}
	  $(this).text(replacement);
		if( $(this).prop("tagName").toLowerCase() == "input" ) {
		  $(this).attr("placeholder", replacement);
		}
	});
	
	$('body').attr("dir", textDir);
	if( textDir == "rtl" ) {
		$('.timer-container:first').css('float','left');
	}
});