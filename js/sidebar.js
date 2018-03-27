const sidebar = (function() {

  let races = ["drakfjord", "bastjurs", "vattnajol", "yggdrajol", "humanjos", "forfaris", "sergurontjos", "ingen", "okänd"];

  let raceList = document.getElementById("race-list");

  async function buildList() {

    for (var i = 0; i < races.length; i++) {
      let currentMob = await apiRequest.searchRace(races[i]);
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
        }
        raceList.appendChild(newLi);
      });

      let lineBreak = document.createElement("br");
      raceList.appendChild(lineBreak);
    }

  }



  return {
    buildList: buildList
  };
})();