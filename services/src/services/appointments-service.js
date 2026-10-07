// 1. Import Database Connection and Query Definitions
const db = require("../config/database.js");
const {
  CREATE_APPOINTMENT,
  FIND_ALL_APPOINTMENTS,
  FIND_APPOINTMENT_BY_ID,
  FIND_APPOINTMENTS_BY_STUDENT_ID,
  FIND_APPOINTMENTS_BY_STAFF_ID,
  FIND_APPOINTMENT,
  UPDATE_APPOINTMENT,
  DELETE_APPOINTMENT,
} = require("../database/queries/appointments-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createAppointment = async (data) => {
  // Input Validation
  if (!data.student_id || !data.staff_id || !data.appointment_date || !data.appointment_time || !data.purpose) {
    throw new Error("Required fields are missing.");
  }

  // Execute SQL query with parameter binding
  const [result] = await db.query(CREATE_APPOINTMENT, [
    data.student_id,
    data.staff_id,
    data.appointment_date,
    data.appointment_time,
    data.purpose,
    data.status,
    data.remarks,
  ]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Records
const findAllAppointments = async () => {
  const [rows] = await db.query(FIND_ALL_APPOINTMENTS);
  return rows;
};

// Get Single Record by Primary Key (ID)
const findAppointmentById = async (id) => {
  if (!id) {
    throw new Error("Appointment ID is required.");
  }

  const [rows] = await db.query(FIND_APPOINTMENT_BY_ID, [id]);

  return rows[0] || null;
};

// Get Appointments by Student ID
const findAppointmentsByStudentId = async (studentId) => {
  if (!studentId) {
    throw new Error("Student ID is required.");
  }

  const [rows] = await db.query(FIND_APPOINTMENTS_BY_STUDENT_ID, [studentId]);

  return rows;
};

// Get Appointments by Staff ID
const findAppointmentsByStaffId = async (staffId) => {
  if (!staffId) {
    throw new Error("Staff ID is required.");
  }

  const [rows] = await db.query(FIND_APPOINTMENTS_BY_STAFF_ID, [staffId]);

  return rows;
};

// Get Appointment by Student, Staff, Date, and Time
const findAppointment = async (studentId, staffId, appointmentDate, appointmentTime) => {
  if (!studentId || !staffId || !appointmentDate || !appointmentTime) {
    throw new Error("Student, staff, date, and time are required.");
  }

  const [rows] = await db.query(FIND_APPOINTMENT, [studentId, staffId, appointmentDate, appointmentTime]);

  return rows[0] || null;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateAppointment = async (id, data) => {
  if (!id) {
    throw new Error("Appointment ID is required.");
  }

  const [result] = await db.query(UPDATE_APPOINTMENT, [
    data.student_id,
    data.staff_id,
    data.appointment_date,
    data.appointment_time,
    data.purpose,
    data.status,
    data.remarks,
    id,
  ]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteAppointment = async (id) => {
  if (!id) {
    throw new Error("Appointment ID is required.");
  }

  const [result] = await db.query(DELETE_APPOINTMENT, [id]);

  return result;
};

// ==========================================
// EXPORT
// ==========================================
module.exports = {
  createAppointment,
  findAllAppointments,
  findAppointmentById,
  findAppointmentsByStudentId,
  findAppointmentsByStaffId,
  findAppointment,
  updateAppointment,
  deleteAppointment,
};
