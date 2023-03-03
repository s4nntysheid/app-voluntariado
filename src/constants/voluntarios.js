/* import axios from "axios"; */

async function getVoluntariosSheet() {
  var getVoluntarios = await fetch(
    "https://sheet.best/api/sheets/43decad9-bd9f-45b8-8e89-65d9d9eeb6d2"
  );
  var all_voluntarios = await getVoluntarios.json();
  
  console.log('all',all_voluntarios)

  return all_voluntarios
}

console.log("aaaaa", await getVoluntariosSheet())

/* var all_voluntarios = axios
  .get("https://sheet.best/api/sheets/43decad9-bd9f-45b8-8e89-65d9d9eeb6d2", )
  .then((response) => {
    console.log('res',response)
    return response;
  }); */

export default all_voluntarios;

/* var all_voluntarios = [
  {
    id: "#1",
    date: "1 Nov, 10:20 AM",
    email: "pedrãodafirma@gmail.com",
    first_name: "Pedrão",
    last_name: "Da Firma",
    status: "Servindo",
  },
  {
    id: "#2",
    date: "1 Nov, 10:20 AM",
    email: "Kauaalemanha@gmail.com",
    first_name: "Eggerrt (sla como escreve)",
    last_name: "Kauã",
    status: "N faz nada",
  },
];
 */
