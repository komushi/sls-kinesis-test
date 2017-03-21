# Serverless Framework Kinesis Test

## TODO
* create VPC with private subnet and security group with cloudformation
* create a kinesis stream before test
* test whether from a private subnet the lambda function can put-record to Kinesis or use lambda

```
$ aws kinesis put-record --stream-name stream_mytopic --partition-key test --data "hello world"
```

```
$ awslogs get /aws/lambda/sls-kinesis-test-dev-getStream ALL -s1h
```