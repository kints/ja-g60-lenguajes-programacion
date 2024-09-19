let equipo1 = "Los Ángeles Lakers";
let jugadoresEquipo1 = [["Colin Castleton", 14, "C", 24, "2.08 m", "Florida"],
["Max Christie", 10, "G", 21, "1.96 m", "Michigan State"],
["Anthony Davis", 3, "AP", 31, "2.08 m", "Kentucky"],
["Jordan Goodwin", , "G", 25, "1.93 m", "Saint Louis"],
["Rui Hachimura", 28, "AP", 26, "2.03 m", "Gonzaga"],
["Jaxson Hayes", 11, "C", 24, "2.13 m", "Texas"],
["Blake Hinson", 36, "A", 24, "2.03 m", "Pittsburgh"],
["Jalen Hood-Schifino", 0, "G", 21, "1.96 m", "Indiana"],
["Bronny James", 9, "G", 19, "1.88 m", "USC"],
["LeBron James", 23, "SF", 39, "2.06 m", "--"],
["Kylor Kelley", , "C", 27, "2.13 m", "Oregon State"],
["Dalton Knecht", 4, "G", 23, "1.96 m", "Tennessee"],
["Maxwell Lewis", 21, "A", 22, "2.01 m", "Pepperdine"],
["Quincy Olivari", , "G", 23, "1.91 m", "Xavier"],
["Austin Reaves", 15, "E", 26, "1.96 m", "Oklahoma"],
["Cam Reddish", 5, "SF", 25, "2.01 m", "Duke"],
["DAngelo Russell", 1, "BA", 28, "1.91 m", "Ohio State"],
["Armel Traore", 37, "A", 21, "2.06 m", "--"],
["Jarred Vanderbilt", 2, "AP", 25, "2.03 m", "Kentucky"],
["Gabe Vincent", 7, "BA", 28, "1.88 m", "UC Santa Barbara"],
["Christian Wood", 35, "A", 28, "2.03 m", "UNLV"]];
let equipo2 = "Chicago Bulls";
let jugadoresEquipo2 = [["Lonzo Ball", 2, "BA", 26, "1.98 m", "UCLA"],
["Onuralp Bitim", 17, "SF", 25, "1.98 m", "--"],
["Matas Buzelis", , "A", 19, "2.06 m", "--"],
["Jevon Carter", 5, "BA", 29, "1.85 m", "West Virginia"],
["Torrey Craig", 13, "SF", 33, "1.96 m", "South Carolina Upstate"],
["Marcus Domask", , "A", 26, "1.98 m", "Illinois"],
["Ayo Dosunmu", 12, "E", 24, "1.96 m", "Illinois"],
["Chris Duarte", , "E", 27, "1.96 m", "Oregon"],
["Josh Giddey", , "E", 21, "2.03 m", "--"],
["Talen Horton-Tucker", , "SF", 23, "1.93 m", "Iowa State"],
["Zach LaVine", 8, "E", 29, "1.96 m", "UCLA"],
["E.J. Liddell", , "A", 23, "1.98 m", "Ohio State"],
["Kenneth Lofton Jr.", , "A", 22, "1.98 m", "Louisiana Tech"],
["Julian Phillips", 15, "A", 20, "2.03 m", "Tennessee"],
["Adama Sanogo", 21, "C", 22, "2.06 m", "UConn"],
["Jalen Smith", 25, "AP", 24, "2.06 m", "Maryland"],
["DJ Steward", 9, "G", 22, "1.88 m", "Duke"],
["Dalen Terry", 25, "A", 22, "2.01 m", "Arizona"],
["Nikola Vucevic", 9, "C", 33, "2.08 m", "USC"],
["Coby White", 0, "BA", 24, "1.96 m", "North Carolina"],
["Patrick Williams", 44, "AP", 23, "2.01 m", "Florida State"]];
/*

  document.write("No. " + jugadoresEquipo1[i][1] + " Nombre " + jugadoresEquipo1[i][0]);
  document.write("<br>")
}*/

function ponerJugadores() {
  let htmlElementoJugadores = document.getElementById("lista-equipo1");
  let jugador = "";
  for (i = 0; i < jugadoresEquipo1.length; i++) {
    /*let numeroJugador;
    if (jugadoresEquipo1[i][1] != undefined) {
      numeroJugador = jugadoresEquipo1[i][1];
    } else {
      numeroJugador = "--";
    }*/
    jugador += "<tr>" +
      "<td>" + (jugadoresEquipo1[i][1] != undefined ? jugadoresEquipo1[i][1] : "--") + "</td>" +
      "<td>" + jugadoresEquipo1[i][0] + "</td>" +
      "<td>" + jugadoresEquipo1[i][2] + "</td>" +
      "<td>" + jugadoresEquipo1[i][4] + "</td>" +
      "<td>" + jugadoresEquipo1[i][5] + "</td>" +
      "<td></td></tr>";
  }
  htmlElementoJugadores.innerHTML = jugador;
}
console.log(jugador);