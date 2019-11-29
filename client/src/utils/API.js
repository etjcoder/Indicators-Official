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
    getAppointments: function(id) {
        return axios.get("/api/appointments/find/" + id)
    },
    updateAppointment: function(id, data) {
        return axios.put("/api/appointments/edit/" + id, data)
    },
    deleteAppointment: function(id) {
        return axios.delete("/api/appointments/edit/" + id)
    },
    createUser: function(data) {
        return axios.post("/api/supervisor/protege", data)
    },
    getUserData: function(id) {
        return axios.get("/api/supervisor/user/" + id)
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