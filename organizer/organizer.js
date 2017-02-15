/**
 * Created by Andrés Báez on 14/2/2017.
 */

var Organizer = (function(){

    var organizer = {};
    organizer.players = [];

    function setPlayers(players) {
        organizer.players = players;
    }

    function print(){

        var result = createTeams(organizer.players);

        console.log("DIFF= " + result.diff);
        console.log(" ");
        console.log("Team A (" + result.scoreA + ")");
        console.log("---------------------")
        for(i = 0; i < result.teamA.length; i++){
            console.log(result.teamA[i].name + " - " + result.teamA[i].score);
        }
        console.log("");
        console.log("Team B (" + result.scoreB + ")");
        console.log("---------------------")
        for(i = 0; i < result.teamB.length; i++){
            console.log(result.teamB[i].name + " - " + result.teamB[i].score);
        }
    }

    function createTeams(input) {

        var teama = [],
            teamb = [],
            i = 0,
            scoreTeamA = 0,
            scoreTeamB = 0,
            max = input.length;

        input.sort((a, b) => b.score - a.score);

        for (i = 0; i < max; i++){

            var next = input.splice(0, 1)[0];

            if(scoreTeamA <= scoreTeamB){
                scoreTeamA += next.score;
                teama.push(next);
            }else{
                scoreTeamB += next.score;
                teamb.push(next);
            }
        }

        return {
            teamA: teama,
            teamB: teamb,
            diff: Math.abs(scoreTeamA - scoreTeamB),
            scoreA: scoreTeamA,
            scoreB: scoreTeamB
        };

    }

    return {
        setPlayers: setPlayers,
        run: createTeams,
        print: print
    }

})();

var players = [
    { name: "Andres", score: 3.8},
    { name: "Waldemar", score: 2},
    { name: "Gonzalo", score: 5},
    { name: "Paco", score: 2},
    { name: "Charly", score: 5},
    { name: "Pelu", score: 4},
    { name: "Joaco", score: 3},
    { name: "Guti", score: 1},
    { name: "Carlico", score: 1},
    { name: "Rivera", score: 4},
    { name: "Milton", score: 3},
    { name: "Colo", score: 2}

];

Organizer.setPlayers(players);
Organizer.print();
//var result  = Organizer.permute_delete(players);

//console.log(result);