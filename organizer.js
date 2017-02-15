/**
 * Created by Andrés Báez on 14/2/2017.
 */

var players = [
    { name: "Andres", score: 4},
    { name: "Waldemar", score: 2},
    { name: "Gonzalo", score: 5},
    { name: "Paco", score: 2},
    { name: "Charly", score: 5},
    { name: "Pelu", score: 4}/*,
    { name: "Joaco", score: 3},
    { name: "Guti", score: 1},
    { name: "Carlico", score: 1},
    { name: "Rivera", score: 4},*/

];


var Organizer = (function(){

    var organizer = {};
    organizer.players = [];

    function setPlayers(players) {
        organizer.players = players;
    }

    function getEvenGroups() {

        var list = [];

        var permutations = permute(organizer.players);

        for(i = 0; i< permutations.length; i++){

            var teams = createTeams(permutations[i]);
            var teamA = teams[0],
                teamB = teams[1];

            var scoreTeamA = teamA.reduce(sum, 0);
            var scoreTeamB = teamB.reduce(sum, 0);

            var diff = Math.abs(scoreTeamA - scoreTeamB)

            if(!teamIsAlreadyInArray(list,teamA)) {
                list.push({
                    teamA: teamA,
                    teamB: teamB,
                    diff: diff
                });
            }
        }
        return list.sort((a, b) => a.diff - b.diff);
    }

    function teamIsAlreadyInArray(list, team) {

        return false;
        /*
        var found = false;
        for(var i = 0; i < vendors.length; i++) {
            if (vendors[i].Name == 'Magenic') {
                found = true;
                break;
            }
        }
        */
    }

    function sum(total, b) {
        return total + b.score;
    }

    var permArr = [],
        usedItems = [];

    function permute(input) {
        var i, itemSelected;

        for (i = 0; i < input.length; i++) {
            itemSelected = input.splice(i, 1)[0];
            usedItems.push(itemSelected);
            if (input.length == 0) {
                permArr.push(usedItems.slice());
            }
            permute(input);
            input.splice(i, 0, itemSelected);
            usedItems.pop();
        }
        return permArr
    };

    function createTeams(allPlayers) {
        var i = 0,
            l = allPlayers.length,
            n = l / 2;

        return [allPlayers.slice(0, n),
            allPlayers.slice(n, l)]
    }


    return {
        setPlayers: setPlayers,
        run: getEvenGroups
    }

})();


Organizer.setPlayers(players);
var result  = Organizer.run();
console.log(result);