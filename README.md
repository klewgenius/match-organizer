# Team creator

Given a list of players, this library will create 2 even teams

## How to use it.
```
var players = [
                { "name": "Andres", "score": 6},
                { "name": "Waldemar", "score": 4},
                { "name": "Gonzalo", "score": 7},
                { "name": "Paco", "score": 3},
                { "name": "Charly", "score": 9},
                { "name": "Pelu", "score": 6},
                { "name": "Joaco", "score": 5},
                { "name": "Guti", "score": 2},
                { "name": "Carlico", "score": 1},
                { "name": "Rivera", "score": 6},
                { "name": "Milton", "score": 5},
                { "name": "Colo", "score": 3}
              ];

TeamCreator.setPlayers(players);
TeamCreator.createTeams());
```

##  Nice to have

- [x] First version
- [ ] Make it generic
- [ ] Give more result options
- [ ] Improve documentation
- [ ] Create more examples
- [ ] Improve algorithm
- [ ] Support more than 2 teams