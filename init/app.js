const AWS = require("aws-sdk"); 
const response = require("cfn-response"); 
const docClient = new AWS.DynamoDB.DocumentClient(); 
const tableName = process.env.DynamoTableName;
exports.handler = function(event, context) {
    console.log(JSON.stringify(event,null,2));
    console.log("Table:", tableName);
    var itemsArray = [ 
        { PutRequest: { Item: {"word":"Hola"} }},
        { PutRequest: { Item: {"word":"Salut"} }},
        { PutRequest: { Item: {"word":"Ciao"} }},
        { PutRequest: { Item: {"word":"Hallo"} }},
        { PutRequest: { Item: {"word":"Nihao"} }},
        { PutRequest: { Item: {"word":"Ola"} }},
        { PutRequest: { Item: {"word":"Ohio"} }},
        { PutRequest: { Item: {"word":"Hi"} }}
    ];
    const params = {RequestItems: {}};
    params.RequestItems[tableName] =  itemsArray;
    docClient.batchWrite(params, function(err, data) { 
    if (err) {
      response.send(event, context, "FAILED", {});
    } else {
      response.send(event, context, "SUCCESS", {});
    }
  });
};