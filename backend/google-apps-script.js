/**
 * ENGLISHJIBI CLASSES — Google Apps Script Backend
 * 
 * Handles form submissions from the website and stores data
 * in the linked Google Spreadsheet.
 * 
 * Sheets:
 *   1. Admission_Enquiries — Student admission enquiry data
 *   2. Contact_Messages    — General contact messages
 * 
 * Deployment: Deploy as Web App (Execute as: Me, Access: Anyone)
 */


/* ============================================================
   REQUEST HANDLERS
   ============================================================ */

/**
 * Handles incoming POST requests from the website.
 * Parses JSON body, routes to the correct handler based on formType.
 *
 * @param {Object} e — Google Apps Script event object
 * @returns {TextOutput} JSON response
 */
function doPost(e) {
    try {
        var data = JSON.parse(e.postData.contents);

        if (!data.formType) {
            return createResponse("error", "Missing formType field");
        }

        if (data.formType === "admission") {
            return handleAdmission(data);
        } else if (data.formType === "contact") {
            return handleContact(data);
        } else {
            return createResponse("error", "Invalid formType");
        }
    } catch (error) {
        return createResponse("error", "Invalid request format: " + error.message);
    }
}

/**
 * Handles GET requests (used by browser for CORS preflight or health check).
 *
 * @returns {TextOutput} JSON status response
 */
function doGet() {
    return createResponse("success", "ENGLISHJIBI API is running");
}

/* ============================================================
   FORM HANDLERS
   ============================================================ */

/**
 * Validates and saves admission enquiry data.
 *
 * Expected fields: studentName, parentName, phoneNumber, email, currentClass, school
 *
 * @param {Object} data — Parsed form data
 * @returns {TextOutput} JSON response
 */
function handleAdmission(data) {
    var requiredFields = ["studentName", "parentName", "phoneNumber", "currentClass", "school"];

    for (var i = 0; i < requiredFields.length; i++) {
        var field = requiredFields[i];
        if (!data[field] || String(data[field]).trim() === "") {
            return createResponse("error", "Missing required field: " + field);
        }
    }

    // Validate phone number format (Indian: 10 digits)
    var phone = String(data.phoneNumber).replace(/[\s\-\+]/g, "");
    if (phone.length < 10) {
        return createResponse("error", "Invalid phone number");
    }

    // Validate email format if provided
    if (data.email && String(data.email).trim() !== "") {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(String(data.email).trim())) {
            return createResponse("error", "Invalid email format");
        }
    }

    try {
        var sheet = getSheet("Admission_Enquiries");
        var timestamp = new Date();

        sheet.appendRow([
            timestamp,
            String(data.studentName).trim(),
            String(data.parentName).trim(),
            String(data.phoneNumber).trim(),
            data.email ? String(data.email).trim() : "",
            String(data.currentClass).trim(),
            String(data.school).trim()
        ]);

        return createResponse("success", "Admission enquiry saved successfully");
    } catch (error) {
        return createResponse("error", "Failed to save data: " + error.message);
    }
}

/**
 * Validates and saves contact form messages.
 *
 * Expected fields: name, phone, message
 *
 * @param {Object} data — Parsed form data
 * @returns {TextOutput} JSON response
 */
function handleContact(data) {
    var requiredFields = ["name", "phone", "message"];

    for (var i = 0; i < requiredFields.length; i++) {
        var field = requiredFields[i];
        if (!data[field] || String(data[field]).trim() === "") {
            return createResponse("error", "Missing required field: " + field);
        }
    }

    // Validate phone number format
    var phone = String(data.phone).replace(/[\s\-\+]/g, "");
    if (phone.length < 10) {
        return createResponse("error", "Invalid phone number");
    }

    try {
        var sheet = getSheet("Contact_Messages");
        var timestamp = new Date();

        sheet.appendRow([
            timestamp,
            String(data.name).trim(),
            String(data.phone).trim(),
            String(data.message).trim()
        ]);

        return createResponse("success", "Message received successfully");
    } catch (error) {
        return createResponse("error", "Failed to save data: " + error.message);
    }
}

/* ============================================================
   UTILITIES
   ============================================================ */

/**
 * Returns a sheet reference by name from the configured spreadsheet.
 *
 * @param {string} sheetName — Name of the sheet tab
 * @returns {Sheet} Google Sheets Sheet object
 * @throws {Error} If sheet is not found
 */
function getSheet(sheetName) {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
        throw new Error('Sheet "' + sheetName + '" not found. Please create it in your spreadsheet.');
    }

    return sheet;
}

/**
 * Creates a standardized JSON response.
 *
 * @param {string} status  — "success" or "error"
 * @param {string} message — Human-readable response message
 * @returns {TextOutput} JSON content service response
 */
function createResponse(status, message) {
    var response = {
        status: status,
        message: message
    };

    return ContentService
        .createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);
}
