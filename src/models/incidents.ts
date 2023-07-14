let mongoose = require('mongoose');
// External dependencies
import { ObjectId } from "mongodb";


// Class Implementation
export default class test {
  constructor(public incidentNumber: string, public description: string, public email: string, priority: string, customerName: string, status: string, public id?: ObjectId) {}
}




