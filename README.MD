# Serverless Framework Kinesis Private Subnet Test

## TODO
* create VPC with private subnet and security group with cloudformation or cli
* test whether from a private subnet the lambda function can put-record to Kinesis or use lambda

```
$ aws kinesis create-stream --stream-name lambda_kinesis_test --shard-count 2
```

```
$ aws kinesis put-record --stream-name lambda_kinesis_test --partition-key test --data "hello world"
```

```
$ awslogs get /aws/lambda/sls-kinesis-test-dev-getStream ALL -s1h
```