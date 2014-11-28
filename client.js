var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-1'});

var sqs = new AWS.SQS();

var params = {
    MessageBody: 'Hello this is a test', /* required */
    QueueUrl: 'https://sqs.us-west-2.amazonaws.com/917163518021/SQSWithCloudWatchAlarms-MyQueue-1PJ5331H2CVL', /* required */
    DelaySeconds: 0
};

console.log('Message params to send...');
console.log(params);

sqs.sendMessage(params, function(err, data) {
    if (err) {
        console.log('Fail!');
        console.log(err, err.stack);
    }
    else {
        console.log('OK!');
        console.log(data);
    }
});