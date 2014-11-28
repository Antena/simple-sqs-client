// Manda un mensaje a la cola con un cuerpo de texto

var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-1'});

var sqs = new AWS.SQS();
var params = {
    MessageBody: 'Hello this is a test',
    QueueUrl: 'https://sqs.us-west-2.amazonaws.com/917163518021/SQSWithCloudWatchAlarms-MyQueue-1PJ5331H2CVL',
    DelaySeconds: 0
};

console.log('Message params to send...');
console.log(params);
console.log('\n');

sqs.sendMessage(params, function(err, data) {
    if (err) {
        console.log('Fail!');
        console.log(err, err.stack);
    }
    else {
        console.log('OK! Response data:');
        console.log(data);
    }
});