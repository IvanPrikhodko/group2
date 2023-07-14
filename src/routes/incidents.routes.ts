// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Incident from "../models/incidents"; 


// Global Config
export const incidentsRouter = express.Router();

incidentsRouter.use(express.json());

// GET
incidentsRouter.get("/", async (_req: Request, res: Response) => {
  try {
      // Check if the collection is connected before trying to use it
      if (!collections.incidents) {
          throw new Error("incidents collection is not connected");
      }

      // Fetch the incidents from the database
      const incidents = await collections.incidents.find({}).toArray();

      // We map through the results to extract the data we need and create a new Incident array
      const incidentsMapped = incidents.map(doc => {
          return new Incident(doc['incidentNumber'], doc['description'], doc['email'], doc['priority'], doc.['customerName'], doc['status'], doc._id);
      });

      // Send the incidents as the response
      res.status(200).send(incidentsMapped);
  } catch (error) {
      // Send the error message as the response
      const err = error as Error;
      res.status(500).send(err.message);
  }
});
// POST

// PUT

// DELETE