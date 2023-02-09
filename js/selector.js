const d = document,
  $img = d.querySelectorAll("img"),
  $container_characters = d.getElementById("container-characters"),
  arr = ["animation", "character-two", "character-three", "character-four"],
  $statisticTable = d.getElementById("statisticTable"),
  $name = d.getElementById("name");

const _privite = new WeakMap();

/* console.log($statisticTable.childNodes);
 */
class Statistics {
  constructor(name, hp, atq, def, atqEsp, defEsp, vel, total) {
    const propirties = {
      _name: name,
      _hp: hp,
      _atq: atq,
      _def: def,
      _atqEsp: atqEsp,
      _defEsp: defEsp,
      _vel: vel,
      _total: total,
    };

    _privite.set(this, { propirties });
  }

  get name() {
    return _privite.get(this).propirties["_name"];
  }

  set name(newName) {
    return (_privite.get(this).propirties["_name"] = newName);
  }

  get hp() {
    return _privite.get(this).propirties["_hp"];
  }

  set hp(newHp) {
    return (_privite.get(this).propirties["_hp"] = newHp);
  }

  get atq() {
    return _privite.get(this).propirties["_atq"];
  }

  set atq(newAtq) {
    return (_privite.get(this).propirties["_atq"] = newAtq);
  }

  get def() {
    return _privite.get(this).propirties["_def"];
  }

  set def(newDef) {
    return (_privite.get(this).propirties["_def"] = newDef);
  }

  get atqEsp() {
    return _privite.get(this).propirties["_atqEsp"];
  }

  set atqEsp(newAtqEsp) {
    return (_privite.get(this).propirties["_atqEsp"] = newAtqEsp);
  }

  get defEsp() {
    return _privite.get(this).propirties["_defEsp"];
  }

  set defEsp(newDefEsp) {
    return (_privite.get(this).propirties["_defEsp"] = newDefEsp);
  }

  get vel() {
    return _privite.get(this).propirties["_vel"];
  }

  set vel(newVel) {
    return (_privite.get(this).propirties["_vel"] = newVel);
  }

  get total() {
    return _privite.get(this).propirties["_total"];
  }

  set total(newTotal) {
    return (_privite.get(this).propirties["_total"] = newTotal);
  }

  statisticsTable() {
    $name.textContent = this.name;
    $statisticTable.childNodes[3].textContent = this.hp;
    $statisticTable.childNodes[7].textContent = this.atq;
    $statisticTable.childNodes[11].textContent = this.def;
    $statisticTable.childNodes[15].textContent = this.atqEsp;
    $statisticTable.childNodes[19].textContent = this.defEsp;
    $statisticTable.childNodes[23].textContent = this.vel;
    $statisticTable.childNodes[27].textContent = this.total;
  }
}

const sabino = new Statistics("Sabino", 477, 365, 141, 71, 118, 251, 1560),
  karen = new Statistics("Karen", 402, 237, 122, 237, 153, 322, 1593),
  agatha = new Statistics("Agatha", 417, 119, 102, 339, 150, 337, 1621);
bruno = new Statistics("Bruno", 430, 306, 123, 306, 123, 340, 1735);

d.addEventListener("DOMContentLoaded", () => {
  d.addEventListener("mouseout", (e) => {
    if (e.target.matches(".img-fluid")) {
      $container_characters.innerHTML = "";
      let uid = e.target.dataset.id;

      for (let index = 0; index < arr.length; index++) {
        if (parseInt(uid) === index) {
          $container_characters.innerHTML += `<li class="${arr[index]}"></li>`;

          const CHOOSE_STATISTIC = {
            animation: () => sabino.statisticsTable(),
            "character-two": () => karen.statisticsTable(),
            "character-three": () => agatha.statisticsTable(),
            "character-four": () => bruno.statisticsTable(),
          };

          console.log(arr[index]);
          let choose = CHOOSE_STATISTIC[arr[index]]();

          choose;
        }
      }
    }
  });
});
