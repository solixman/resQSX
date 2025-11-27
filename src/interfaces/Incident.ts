export interface Incident {
  id: number;
  address: string;
  patient: string;
  severity: string; 
  status: string; 
  assignedAmbulanceId: number | null;
  lat: number;
  lng: number;
  createdAt: string;
}
