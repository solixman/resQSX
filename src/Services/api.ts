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
