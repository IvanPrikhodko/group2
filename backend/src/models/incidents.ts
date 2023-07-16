
// External dependencies
import { ObjectId } from "mongodb";


// Class Implementation
export default class Incident {
  constructor(public incidentNumber: string, public description: string, public email: string, priority: string, customerName: string, status: string, public id?: ObjectId) {}
}




