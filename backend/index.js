const express = require('express');
const AWS = require('aws-sdk');

const app = express();
const port = process.env.PORT || 3000;

AWS.config.update({ region: 'us-east-1' });
const dynamo = new AWS.DynamoDB.DocumentClient();

app.get('/', async (req, res) => {
  try {
    const params = {
      TableName: 'Products'
    };
    const data = await dynamo.scan(params).promise();
    res.json(data.Items);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data from DynamoDB');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
