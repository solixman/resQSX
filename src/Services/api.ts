const URL = import.meta.env.VITE_API_URL;

console.log(URL);
export async function getAmbulances() {
  const res = await fetch(`${URL}/ambulances`);
  //   console.log(res)
  if (!res.ok) throw new Error("something went wrong");
  return await res.json();
}

export async function getIncidents() {
  const res = await fetch(`${URL}/incidents`);
  if (!res.ok) throw new Error("something went wrong");
  return await res.json();
}

export async function getLast6Incidents() {
 
  const incidents = await getIncidents()

  // this sorting algorithem is a bit in the slower side
  //I only used it cause usually you get this data from backend
  for (let j = 0; j < incidents.length; j++) {
    for (let index = 0; index < incidents.length-1; index++) {
      const date1 = new Date(incidents[index].createdAt);
      const date2 = new Date(incidents[index + 1].createdAt);
      if (date1 > date2) {
        const Tdate = incidents[index];
        incidents[index] = incidents[index + 1];
        incidents[index + 1] = Tdate;
      }
    }
  }
  const LastIncidents=incidents.slice(-6)
  return LastIncidents;

}
