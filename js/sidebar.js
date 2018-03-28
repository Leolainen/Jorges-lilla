const sidebar = (function() {

  let races = ["drakjord", "bastjurs", "vattnajol", "yggdrajol", "humanjos", "forfaris", "sergurontjos", "ingen", "okänd"];

  let raceList = document.getElementById("race-list");


  async function buildList(searchIndex) {
    if (searchIndex == null) {
      searchIndex = "";
    }

    raceList.innerHTML = "";
    let monsterData = await apiRequest.search(searchIndex);

    for (var i = 0; i < races.length; i++) {
      let currentMob = sortByRace(monsterData, races[i]);

      if (currentMob.length > 0) {
        let newLabel = document.createElement("h3");
        newLabel.setAttribute("class", "side-bar_label");
        let label = document.createTextNode(races[i]);
        newLabel.appendChild(label);
        raceList.appendChild(newLabel);

        currentMob.forEach(function(mob) {
          let newLi = document.createElement("LI");
          let liText = document.createTextNode(mob.art);
          newLi.appendChild(liText);
          newLi.onclick = function() {
            pageBuilder.buildHTML(mob.id);
            sideBarBtn.classList.toggle("side-bar_button-active");
            sideBar.classList.toggle("side-bar_active");
            searchBar.value = "";
            setTimeout(function() {
              buildList();
            }, 200);
          }
          raceList.appendChild(newLi);
        });

        let lineBreak = document.createElement("br");
        raceList.appendChild(lineBreak);
      }
    }
  }

  function sortByRace(data, race) {
    race = race.toUpperCase();
    data = data.filter(mob => mob.urstam.toUpperCase().includes(race));
    return data;
  }


  return {
    buildList: buildList
  };
})();
