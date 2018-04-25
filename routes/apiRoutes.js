app.get("/api/tables", function(req, res) {
    return res.json(tableReserved);
});
app.get("/api/waitlist", function(req, res) {
    return res.json(waitingList);
});