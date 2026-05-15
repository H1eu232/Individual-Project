# NOTES

## Strategy chosen

Used `serverless-http` adapter to run Express on AWS Lambda.

## Reason

This strategy required minimal code changes and kept the original Express application framework-pure.

## Files changed

- Added `lambda.js`
- Updated `app.js`
- Added dependency `serverless-http`

## Cold Start

![Encryption at rest](./images/Encryption-and-MultiAZ-configuration.png)

## API Gateway URL

https://5mhhzzpex8.execute-api.us-west-2.amazonaws.com/default/hieu-byol-node-express
