import axios from "axios";

var BASEURL = 'https://www.googleapis.com/books/v1/volumes?q='
var APIKEY = '&key=AIzaSyDNS2op_Ce00hAvNB-o2wam28IBeq8dCZg'


export default {
    getDials: function() {
        return axios.get("/api/dials/session")
    },
    logCall: function(id, data) {
        return axios.post("/api/dials/session/" + id, data)
    },
    saveAppointment: function(id, data) {
        return axios.post("/api/dials/appt/" + id, data)
    },
    saveAppointmentMentor: function(id, data) {
        return axios.post("/api/dials/appt/mentor/" + id, data)
    },
    saveSale: function(data) {
        return axios.post("/api/dials/sales", data)
    },
    saveSaleMentor: function(data) {
        return axios.post("/api/dials/mentor/sales", data)
    },
    getAppointments: function(id) {
        return axios.get("/api/appointments/find/" + id)
    },
    getSales: function(id) {
        return axios.get("/api/dials/sales/" + id)
    },
    getMentorSales: function(id) {
        return axios.get("/api/dials/mentor/sales/" + id)
    },
    getMentorAppts: function(id) {
        return axios.get("/api/dials/mentor/appts/" + id)
    },
    updateAppointment: function(id, data) {
        return axios.put("/api/appointments/edit/" + id, data)
    },
    updateSale: function(id, data) {
        return axios.put("/api/dials/sales/" + id, data)
    },
    deleteAppointment: function(id) {
        return axios.delete("/api/appointments/edit/" + id)
    },
    deleteSale: function(id) {
        return axios.delete("/api/dials/sales/" + id)
    },
    createUser: function(data) {
        return axios.post("/api/supervisor/protege", data)
    },
    createMentor: function(data) {
        return axios.post("/api/supervisor/mentor", data)
    },
    saveNote: function(id, data) {
        return axios.post("/api/protege/note/" + id, data)
    },
    saveNoteMentor: function(id, data) {
        return axios.post("/api/supervisor/mentor/notes/" + id, data)
    },
    getMentorNotes(id) {
        return axios.get("/api/supervisor/mentor/notes/" + id)
    },
    getProtegeNotes(id) {
        return axios.get("/api/protege/notes/" + id)
    },
    completeNote: function(id, data) {
        return axios.put("/api/protege/note/" + id, data)
    },
    uncompleteNote: function(id, data) {
        return axios.get("/api/protege/note/" + id, data)
    },
    deleteNote: function(id) {
        return axios.delete("/api/protege/note/" + id)
    },
    getUserData: function(id) {
        return axios.get("/api/supervisor/user/" + id)
    },
    getUserDataById(id) {
        return axios.get("/api/supervisor/userdata/" + id)
    },
    getProtege: function(id) {
        return axios.get("/api/supervisor/protege/" + id)
    },
    saveSourceToProtege: function(id, data) {
        return axios.post("/api/protege/sources/" + id, data)
    },
    saveTargetMktToProtege: function(id, data) {
        return axios.post("/api/protege/targets/" + id, data)
    },
    getMentor: function(id) {
        return axios.get("/api/supervisor/mentor/" + id)
    },
    getMentorById: function(id) {
        return axios.get("/api/supervisor/mentor/find/" + id)
    },
    addProtegeToMentor: function(id, data) {
        return axios.put("/api/supervisor/mentor/find/" + id, data)
    },
    addMentorToProtege: function(id, data) {
        return axios.put("/api/supervisor/protege/find/" + id, data)
    },
    removeProtegeFromMentor: function(id, data) {
        return axios.post("/api/supervisor/mentor/find/" + id, data)
    },
    removeMentorFromProtege: function(id, data) {
        return axios.post("/api/supervisor/protege/find/" + id, data)
    },
    getMentors: function() {
        return axios.get("/api/supervisor/mentor/")
    },
    getProteges: function() {
        return axios.get("/api/supervisor/protege")
    },
    getContacts: function(id) {
        return axios.get("/api/dials/contacts/" + id)
    },
    randomBooks: function() {
        return axios.get(BASEURL + "Apple" + APIKEY);
    },
    searchBooks: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    },
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}