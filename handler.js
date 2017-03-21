'use strict';

// module.exports.hello = (event, context) => {
//   eventHandler.getEvents(event, (error, result) => {
//     const response = makeResponse(error, result)
//     context.succeed(response)
//   });
// };

exports.kinesisHandler = function(event, context) {  
  var record = event.Records[0];
  if (record.kinesis) {
    handler(event.Records, context);
  }
};


var handler = function(records, context) {  
  var data = records
    .map(function(record) {
      return new Buffer(record.kinesis.data, 'base64').toString('utf8');
    })
    .join();
  console.log(data);
  context.done();
};