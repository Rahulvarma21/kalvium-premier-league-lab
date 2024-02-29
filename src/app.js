//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
function createFormation(form) {
  if (form.length > 0) {
    return {
      defender: form[0],
      midfield: form[1],
      forward: form[2],
    };
  } else {
    return null;
  }
}
//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(yearofDebut) {
  var x = players.filter((player) => player.debut == yearofDebut);
  return x;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let x = players.filter((player) => player.position == position);
  return x;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  const a = [];
  for (let i = 0; i < players.length; i++) {
    let awards = players[i].awards;
    awards.forEach(function (award) {
      if (award.name == awardName) {
        a.push(players[i]);
      }
    });
  }
  return a;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  if (!awardName || !noOfTimes) return [];

  let m = [];
  for (let i = 0; i < players.length; i++) {
    let count = 0;
    let awards = players[i].awards;
    awards?.forEach(function (award) {
      if (award.name == awardName) {
        count += 1;
        if (count == noOfTimes) {
          m.push(players[i]);
        }
      }
    });
  }
  return m;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awards = filterByAward(awardName);
  var m = awards.filter((player) => player.country == country);
  return m;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let x = players.filter(
    (player) =>
      player.age < age &&
      player.team == team &&
      player.awards.length >= noOfAwards
  );
  return x;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  let j = [];
  for (let i = 0; i < players.length; i++) {
    let age = players[i].age;
    j.push(age);
    j.sort(function (a, b) {
      return b - a;
    });
  }
  return j;
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(playerTeam) {
  len = [];
  for (let i = 0; i < players.length; i++) {
    let x = players[i].team;
    if (x == playerTeam) {
      let r = players[i].awards;
      len.push(x.length);
      len.sort(function (a, b) {
        return b - a;
      });
    }
  }
  return l;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(nameofAward, noOfTimes, country) {
  let x = filterByAwardxTimes(nameofAward, noOfTimes);
  let y = x.filter((player) => player.country == country);
  return y.sort(compare);
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  var x = players.filter((player) => player.age > age);
  return x;
}
