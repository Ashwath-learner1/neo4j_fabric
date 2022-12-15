const neo4j=require('neo4j-driver')
var driver=neo4j.driver('bolt://localhost:7687',neo4j.auth.basic("neo4j","ironman3"));
var session=driver.session();
   async function nodeCall (node_name){
        const nodes= await session.run(`MATCH(x:${node_name}) RETURN x`);
        nodes.records.forEach(function(record){
            console.log(record._fields[0]);
        });
     
    }
    
nodeCall('Person')
exports.nodeCall=nodeCall