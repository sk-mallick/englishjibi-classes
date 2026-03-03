/**
 * ENGLISHJIBI CLASSES — Frontend API Connector
 *
 * Provides async functions to submit form data to the
 * Google Apps Script Web App backend.
 *
 * Usage:
 *   const result = await EnglishjibiAPI.submitAdmission(formDataObj);
 *   const result = await EnglishjibiAPI.submitContact(formDataObj);
 */
var EnglishjibiAPI = (function () {
    "use strict";

    /* ── Configuration ─────────────────────────────────────── */

    /**
     * Google Apps Script Web App deployment URL.
     * Replace with your own after deploying.
     */
    var WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx3JfgqG5i_Fgo1K0lGvIzixtpTaB6By_6j42n7pBmpRJOEW2fdKB1iDhVE9EUuUXVk/exec";

    /* ── Private Helpers ───────────────────────────────────── */

    /**
     * Sends a POST request to the backend.
     *
     * Google Apps Script Web Apps redirect on POST, so we
     * follow the redirect and parse the final JSON response.
     *
     * @param {Object} payload — Data to send
     * @returns {Promise<Object>} Parsed JSON response
     */
    async function sendRequest(payload) {
        try {
            var response = await fetch(WEB_APP_URL, {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(payload),
                redirect: "follow",
            });

            // GAS may return opaque redirect; try parsing
            if (!response.ok) {
                throw new Error("Server responded with status " + response.status);
            }

            var text = await response.text();

            try {
                return JSON.parse(text);
            } catch (_) {
                // If GAS redirected to googleusercontent, body may not be JSON
                // Treat a 200 with non-JSON body as success
                return { status: "success", message: "Data submitted successfully" };
            }
        } catch (error) {
            return {
                status: "error",
                message: error.message || "Network error. Please try again.",
            };
        }
    }

    /* ── Public API ────────────────────────────────────────── */

    /**
     * Submit admission enquiry form data.
     *
     * @param {Object} formData — { studentName, parentName, phoneNumber, email, currentClass, school }
     * @returns {Promise<Object>} { status, message }
     */
    async function submitAdmission(formData) {
        var payload = {
            formType: "admission",
            studentName: formData.studentName || "",
            parentName: formData.parentName || "",
            phoneNumber: formData.phoneNumber || "",
            email: formData.email || "",
            currentClass: formData.currentClass || "",
            school: formData.school || "",
        };

        return sendRequest(payload);
    }

    /**
     * Submit contact form data.
     *
     * @param {Object} formData — { name, phone, message }
     * @returns {Promise<Object>} { status, message }
     */
    async function submitContact(formData) {
        var payload = {
            formType: "contact",
            name: formData.name || "",
            phone: formData.phone || "",
            message: formData.message || "",
        };

        return sendRequest(payload);
    }

    /* ── Module Exports ────────────────────────────────────── */

    return {
        submitAdmission: submitAdmission,
        submitContact: submitContact,
    };
})();
