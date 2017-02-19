/**
 * Created by Andrés Báez on 14/2/2017.
 */


exports.TeamCreator = (function () {

    var players = [];

    function setPlayers(players){
        players = players;
    }

    function createTeams() {

        var input = players;

        var teams = [],
            i = 0,
            scores = [],
            max = input.length;

        scores["A"]=0; scores["B"]=0;
        teams["A"]=[]; teams["B"]=[];

        input.sort((a, b) => b.score - a.score);

        var nextPlayer;
        var teamForNextPlayer;

        for (i = 0; i < max; i++){

            next();
            teams[teamForNextPlayer].push(nextPlayer);
            scores[teamForNextPlayer] += nextPlayer.score;
        }

        function getBest() {
            nextPlayer = input.splice(0, 1)[0]; //Best in list
        }
        function getWorst() {
            nextPlayer =  input.splice(input.length - 1, 1)[0]; //Worst in list
        }
        function next(){
            var counterA = teams["A"],
                counterB = teams["B"],
                scoreA = scores["A"],
                scoreB = scores["B"];

            if(counterA > counterB) { //B has less players than A
                teamForNextPlayer = "B";

                if(scoreB >= scoreA){
                    getWorst();
                }else{
                    getBest();
                }
            }
            else if(counterA < counterB) { //A has less players than B
                teamForNextPlayer = "A";
                if(scoreA >= scoreB){
                    getWorst();
                }else{
                    getBest();
                }
            }
            else //Same amount of players
            {
                getBest();
                teamForNextPlayer = (scoreA >= scoreB) ? "B" : "A";
            }
        }

        return {
            teamA: teams["A"],
            teamB: teams["B"],
            diff: Math.abs(scores["A"] - scores["B"]),
            scoreA: scores["A"],
            scoreB: scores["B"]
        };

    }
    return {
        setPlayers : setPlayers,
        createTeams: createTeams
    }
}());


