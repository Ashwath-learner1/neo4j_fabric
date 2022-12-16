import { driver as _driver, auth } from 'neo4j-driver';
var driver=_driver('bolt://localhost:7687',auth.basic("neo4j","ironman3"));
var session=driver.session();
 async function nodeCall(node_name){
        const nodes= await session.run(`MATCH(x:${node_name}) RETURN x`);
        nodes.records.forEach(function(record){
            console.log(record._fields[0]);
        });
     
    }
    

const _nodeCall = nodeCall;
export { _nodeCall as nodeCall };