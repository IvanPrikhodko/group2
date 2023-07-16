// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Incident from "../models/incidents"; 
import { InsertOneResult } from "mongodb";


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
          return new Incident(doc['incidentNumber'], doc['description'], doc['email'], doc['priority'], doc['customerName'], doc['status'], doc._id);
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
incidentsRouter.post("/", async (req: Request, res: Response) => {
  try {
      // Check if the collection is connected before trying to use it
      if (!collections.incidents) {
          throw new Error("incidents collection is not connected");
      }

      const incident: Incident = req.body;
      const result = await collections.incidents.insertOne(incident);

      if (result.acknowledged) {
          res.status(201).send("Incident created successfully");
      } else {
          throw new Error("Failed to create incident");
      }
  } catch (error) {
      const err = error as Error;
      res.status(500).send(err.message);
  }
});


// PUT
incidentsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
      // Check if the collection is connected before trying to use it
      if (!collections.incidents) {
          throw new Error("incidents collection is not connected");
      }

      const id = req.params['id'];
      const updatedIncident: Incident = req.body;

      const result = await collections.incidents.updateOne(
          { _id: new ObjectId(id) },
          { $set: updatedIncident }
      );

      if (result.modifiedCount === 1) {
          res.status(200).send("Incident updated successfully");
      } else {
          throw new Error("Failed to update incident");
      }
  } catch (error) {
      const err = error as Error;
      res.status(500).send(err.message);
  }
});

// DELETE
incidentsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
      // Check if the collection is connected before trying to use it
      if (!collections.incidents) {
          throw new Error("incidents collection is not connected");
      }

      const id = req.params['id'];

      const result = await collections.incidents.deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 1) {
          res.status(200).send("Incident deleted successfully");
      } else {
          throw new Error("Failed to delete incident");
      }
  } catch (error) {
      const err = error as Error;
      res.status(500).send(err.message);
  }
});