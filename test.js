import neo4j from 'neo4j-driver';
var driver=neo4j.driver('bolt://localhost:7687',neo4j.auth.basic("neo4j","ironman3"));
var session=driver.session();
const nodes= await session.run("MATCH(x:Person) RETURN x");


nodes.records.forEach(function(record){
    console.log(record._fields[0]);
});



  