const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME;
const params = {
  TableName: tableName,
};


exports.handler = async event => {
  var scanResults = [];
  var items;
  do {
    items =  await docClient.scan(params).promise();
    items.Items.forEach((item) => scanResults.push(item));
    params.ExclusiveStartKey  = items.LastEvaluatedKey;
  } while(typeof items.LastEvaluatedKey !== "undefined");

  var random = scanResults[Math.floor(Math.random() * scanResults.length)];
  console.log(random)
  return { 
    statusCode: 200,
    headers: {},
    body: JSON.stringify(random.word)
  };
};
