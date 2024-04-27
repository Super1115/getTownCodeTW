var http = require('http');
var url = require('url');
const villageJson = require("./village.json")

http.createServer(function (req, res) {
    var q = url.parse(req.url, true).query;
    var lat = q.lat
    var lon = q.lon
    // res.write('Hello World!'); 
    // res.write(lat)
    // res.write(lon)
    Towns = getTown(lat,lon)
    for(let i in Towns){
        res.write("<!DOCTYPE html>")
        res.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">")
        res.write(Towns[i]+",")
    }
    res.end();
}).listen(8080); 

function getTown(lat,lon){
    const TownsNear = []
    let x = 0
    for (let x in villageJson) {
        if(villageJson[x].max_y>=lat&&villageJson[x].min_y<=lat&&villageJson[x].max_x>=lon&&villageJson[x].min_x<=lon){
            TownsNear.push(villageJson[x].VILLCODE)
        }
      } 
    return TownsNear
}

