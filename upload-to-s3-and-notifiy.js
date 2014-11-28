// Sube un archivo a un bucket de S3 y manda un mensaje a la cola

var AWS = require('aws-sdk'),
    fs = require('fs');

AWS.config.update({region: 'us-west-2'});

var s3 = new AWS.S3(),
    object_key = 'logo_cdr.png';

var s3Object = {
    Bucket: 'rossirix-lab-reports',
    Key: object_key,
    Body: fs.readFileSync('logo_cdr.png')
};

s3.putObject(s3Object, function(err, resp) {
    if (err) {
        console.log('Fail!');
        console.log(err, err.stack);
    }
    else {
        console.log('Uploaded!');
        var message = {
            Key: object_key,
            ETag: resp.ETag
        };

        var sqs = new AWS.SQS();
        var params = {
            MessageBody: JSON.stringify(message),
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

    }
});