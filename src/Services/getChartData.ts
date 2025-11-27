import { getIncidents } from "./api";

export default async function getChartData() {
  let incidents = new Array(0);
  incidents = await getIncidents()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });

  const incidentsPerHour = new Array(24).fill(0);
  incidents.forEach((incident) => {
    const hour = new Date(incident.createdAt).getHours();
    incidentsPerHour[hour] = (incidentsPerHour[hour] || 0) + 1;
  });

  const amIncidents = new Array(0);
  const pmIncidents = new Array(0);

  for (let i = 0; i < incidentsPerHour.length; i++) {
    if (i < 12) {
      pmIncidents.push(incidentsPerHour[i]);
    } else {
      amIncidents.push(incidentsPerHour[i]);
    }
  }

  
  return { amIncidents, pmIncidents };
}
