# Serverless Framework Kinesis Private Subnet Test

## TODO
* test whether from a private subnet the lambda function can put-record to Kinesis or use lambda
* Modify Kinesis get stream to use Fn::GetAtt: instead of arn directly - wating for the serverless framework update
* create VPC with private subnet and security group with cloudformation or cli

```
$ aws kinesis create-stream --stream-name lambda_kinesis_test --shard-count 2
```

```
$ aws kinesis put-record --stream-name lambda_kinesis_test --partition-key test --data "hello world"
```

```
$ awslogs get /aws/lambda/sls-kinesis-test-dev-getStream ALL -s1h
```