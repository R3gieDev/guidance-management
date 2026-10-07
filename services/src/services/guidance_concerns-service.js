// 1. Import Database Connection and Query Definitions
const db = require("../config/database.js");
const {
  CREATE_GUIDANCE_CONCERN,
  FIND_ALL_GUIDANCE_CONCERNS,
  FIND_GUIDANCE_CONCERN_BY_ID,
  FIND_GUIDANCE_CONCERN_BY_NAME,
  FIND_ACTIVE_GUIDANCE_CONCERNS,
  FIND_INACTIVE_GUIDANCE_CONCERNS,
  UPDATE_GUIDANCE_CONCERN,
  DELETE_GUIDANCE_CONCERN,
} = require("../database/queries/guidance-concerns-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createGuidanceConcern = async (data) => {
  // Input Validation
  if (!data.name) {
    throw new Error("Concern name is required.");
  }

  // Execute SQL query with parameter binding
  const [result] = await db.query(CREATE_GUIDANCE_CONCERN, [data.name, data.description, data.is_active]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Records
const findAllGuidanceConcerns = async () => {
  const [rows] = await db.query(FIND_ALL_GUIDANCE_CONCERNS);
  return rows;
};

// Get Single Record by Primary Key (ID)
const findGuidanceConcernById = async (id) => {
  if (!id) {
    throw new Error("Concern ID is required.");
  }

  const [rows] = await db.query(FIND_GUIDANCE_CONCERN_BY_ID, [id]);

  return rows[0] || null;
};

// Get Guidance Concern by Name
const findGuidanceConcernByName = async (name) => {
  if (!name) {
    throw new Error("Concern name is required.");
  }

  const [rows] = await db.query(FIND_GUIDANCE_CONCERN_BY_NAME, [name]);

  return rows[0] || null;
};

// Get Active Guidance Concerns
const findActiveGuidanceConcerns = async () => {
  const [rows] = await db.query(FIND_ACTIVE_GUIDANCE_CONCERNS);
  return rows;
};

// Get Inactive Guidance Concerns
const findInactiveGuidanceConcerns = async () => {
  const [rows] = await db.query(FIND_INACTIVE_GUIDANCE_CONCERNS);
  return rows;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateGuidanceConcern = async (id, data) => {
  if (!id) {
    throw new Error("Concern ID is required.");
  }

  const [result] = await db.query(UPDATE_GUIDANCE_CONCERN, [data.name, data.description, data.is_active, id]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteGuidanceConcern = async (id) => {
  if (!id) {
    throw new Error("Concern ID is required.");
  }

  const [result] = await db.query(DELETE_GUIDANCE_CONCERN, [id]);

  return result;
};

// ==========================================
// EXPORT
// ==========================================
module.exports = {
  createGuidanceConcern,
  findAllGuidanceConcerns,
  findGuidanceConcernById,
  findGuidanceConcernByName,
  findActiveGuidanceConcerns,
  findInactiveGuidanceConcerns,
  updateGuidanceConcern,
  deleteGuidanceConcern,
};
