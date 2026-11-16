// Import Database Connection and Query Definitions
const db = require("../config/database.js");

const {
  CREATE_ACCOUNT,
  FIND_ALL_ACCOUNTS,
  FIND_ACCOUNT_BY_ID,
  FIND_ACCOUNT_BY_USERNAME,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT,
} = require("../database/queries/accounts-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createAccount = async (username, password) => {
  // Input Validation
  if (!username || !password) {
    throw new Error("Username and password are required.");
  }

  // Execute SQL query
  const [result] = await db.query(CREATE_ACCOUNT, [username, password]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Accounts
const findAllAccounts = async () => {
  const [rows] = await db.query(FIND_ALL_ACCOUNTS);
  return rows;
};

// Get Account by ID
const findAccountById = async (id) => {
  if (!id) {
    throw new Error("Account ID is required.");
  }

  const [rows] = await db.query(FIND_ACCOUNT_BY_ID, [id]);

  return rows[0] || null;
};

// Get Account by Username
const findAccountByUsername = async (username) => {
  if (!username) {
    throw new Error("Username is required.");
  }

  const [rows] = await db.query(FIND_ACCOUNT_BY_USERNAME, [username]);

  return rows[0] || null;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateAccount = async (id, username, password) => {
  if (!id) {
    throw new Error("Account ID is required.");
  }

  const [result] = await db.query(UPDATE_ACCOUNT, [username, password, id]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteAccount = async (id) => {
  if (!id) {
    throw new Error("Account ID is required.");
  }

  const [result] = await db.query(DELETE_ACCOUNT, [id]);

  return result;
};

// ==========================================
// EXPORT ALL FUNCTIONS
// ==========================================
module.exports = {
  createAccount,
  findAllAccounts,
  findAccountById,
  findAccountByUsername,
  updateAccount,
  deleteAccount,
};
