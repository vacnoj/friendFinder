app.get("/survey", function(req, res) {
    console.log(res);
    res.send(readFile("/public/survey.html"));
});
    
app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
    
});