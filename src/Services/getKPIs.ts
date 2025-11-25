import { getAmbulances, getIncidents } from "@/Services/api";

async function getKPIs() {
 

  const ambulances = await getAmbulances()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });

  const incidents = await getIncidents()
    .then((data) => {
       return  data;
    })
    .catch((err) => {
      return err;
    });

    console.log(ambulances)

    let NAA = 0;
    for (let index = 0; index < ambulances.length; index++) {
    if (ambulances[index].status == "Available") {
      NAA++;
    }
  }

  let NII = 0;
  let NIP = 0;
  for (let j = 0; j < incidents.length; j++) {
    if (incidents[j].status == "Pending") NIP++;
    if (incidents[j].status == "In Progress") NII++;
  }

console.log( { NAA, NII, NIP })
  return { NAA, NII, NIP };
}

export default getKPIs;
