const pageBuilder = (function() {

  // constructor
  let monsterName = document.getElementById("monster_name");
  let description = document.getElementById("description");


  async function buildHTML(id) {
    let data = await apiRequest.getData(id);

    monsterName.innerHTML = data.art;

    buildImg(data.img);
    buildStats(data.grundegenskaper);
    buildBasicInfo(data);
    buildAttack(data.strid);
    buildSkills(data.färdigheter);
    buildHP(data.kroppsdel, data.kroppspoäng);
    buildAbilities(data.förmågor);
    description.innerHTML = data.beskrivning;
  }


  function buildImg(imgSrc) {
    let backgroundPortrait = document.getElementById("background_portrait");
    let img = document.getElementById("portrait");
    img.setAttribute("src", "/Jorges-lilla" + imgSrc);
    //img.setAttribute("src", imgSrc);
    backgroundPortrait.style.backgroundImage = 'url(' + "/Jorges-lilla" + imgSrc + ')';
    //backgroundPortrait.style.backgroundImage = 'url('+ "../"+imgSrc+')';
  }


  function buildStats(stats) {
    let statsTable = document.getElementById("stats_table");
    statsTable.innerHTML = "";
    let newRow;
    let index = 0;

    for (let property in stats) {
      if (index % 4 === 0) {
        newRow = document.createElement("TR");
      }

      let newCell = document.createElement("TD");

      newCell.appendChild(document.createTextNode(property + ": "));
      newCell.appendChild(document.createElement("br"));
      newCell.appendChild(document.createTextNode(stats[property]));

      newRow.appendChild(newCell);
      statsTable.appendChild(newRow);

      index++;
    }
  }

  function buildBasicInfo(data) {
    let species     = document.getElementById("species");
    let origin      = document.getElementById("origin");
    let prevalence  = document.getElementById("prevalence");
    let typeAge     = document.getElementById("type-age");
    let maxAge      = document.getElementById("max-age");
    let initiative  = document.getElementById("initiative");
    let fear        = document.getElementById("fear");
    let dmgBonus    = document.getElementById("dmg-bonus");
    let moveSpeed   = document.getElementById("movespeed");
    let protection  = document.getElementById("protection");

    species.innerHTML     = data.urstam;
    origin.innerHTML      = data.hemvist;
    prevalence.innerHTML  = data.vanlighet;
    typeAge.innerHTML     = data.typålder;
    maxAge.innerHTML      = data.maxålder;
    initiative.innerHTML  = data.initiativmod;
    fear.innerHTML        = data.skräckfaktor;
    dmgBonus.innerHTML    = data.skadebonus;
    moveSpeed.innerHTML   = data.förflyttning;
    protection.innerHTML  = data.naturligt_skydd;
  }

  function buildHP(body, hp) {
    let bodyTable = document.getElementById("body_table");
    let tkpSys = document.getElementById("tkp-sys");
    let tkp = document.getElementById("tkp");
    let index = 0;
    let newRow;

    bodyTable.innerHTML = "";
    tkpSys.innerHTML = hp.tkp_sys;
    tkp.innerHTML = hp.tkp;

    body.forEach(function(bd) {
      if (index % 3 === 0) {
        newRow = document.createElement("TR");
      }

      let newBodypartCell = document.createElement("TD");
      let newDiceCell = document.createElement("TD");
      let newKPCell = document.createElement("TD");

      newBodypartCell.appendChild(document.createTextNode(bd.namn));
      newDiceCell.appendChild(document.createTextNode(bd.tärning));
      newKPCell.appendChild(document.createTextNode(bd.kp));

      newRow.appendChild(newBodypartCell);
      newRow.appendChild(newDiceCell);
      newRow.appendChild(newKPCell);
      bodyTable.appendChild(newRow);
    });
  }


  function buildAttack(attacks) {
    let attackTable = document.getElementById("attack_table");
    let index = 0;
    let newRow;

    attackTable.innerHTML = "";

    attacks.forEach(function(atk) {
      if (index % 2 === 0) {
        newRow = document.createElement("TR");
      }

      let newNameCell = document.createElement("TD");
      let newFvCell = document.createElement("TD");

      newNameCell.appendChild(document.createTextNode(atk.namn));
      newFvCell.appendChild(document.createTextNode(atk.fv));

      newRow.appendChild(newNameCell);
      newRow.appendChild(newFvCell);
      attackTable.appendChild(newRow);
    });
  }


  function buildSkills(skills) {
    let skillTable = document.getElementById("skills_table");
    let index = 0;

    skillTable.innerHTML = "";

    skills.forEach(function(skill) {
      let newRow = document.createElement("TR");
      let newNameCell = document.createElement("TD");
      let newFvCell = document.createElement("TD");

      newNameCell.appendChild(document.createTextNode(skill.namn));
      newFvCell.appendChild(document.createTextNode(skill.fv));

      newRow.appendChild(newNameCell);
      newRow.appendChild(newFvCell);
      skillTable.appendChild(newRow);
    });
  }


  function buildAbilities(abilities) {
    console.log(abilities);
    let abilitiesWrapper = document.getElementById("abilities_wrapper");
    abilitiesWrapper.innerHTML = "";
    abilities.forEach(function(ability) {
      let newDiv = document.createElement("DIV");
      newDiv.setAttribute("class", "ability");

      let abilityName = document.createElement("h3");
      abilityName.appendChild(document.createTextNode(ability.namn));
      newDiv.appendChild(abilityName);

      let abilityDescription = document.createElement("P");
      abilityDescription.appendChild(document.createTextNode(ability.beskrivning));
      newDiv.appendChild(abilityDescription);

      abilitiesWrapper.appendChild(newDiv);
    })
  }

  function buildSearchResult(data) {
    let resultBar = document.getElementById("result-bar");
    resultBar.innerHTML = "";

    data.forEach(function(results) {
      let newLi = document.createElement("LI");
      newLi.appendChild(document.createTextNode(results.art));
      newLi.onclick = function() {
        resultBar.innerHTML = "";
        buildHTML(results.id);
      }
      resultBar.appendChild(newLi);
    });
  }

  return {
    buildHTML: buildHTML,
    buildSearchResult: buildSearchResult
  }
})();
