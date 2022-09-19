# CDK Assertion Lambda Log Groups

Reproduction of error:

```
CREATE_FAILED        | AWS::Logs::LogGroup   | MyLambda/Resource/LogGroup
Resource handler returned message: "Resource of type 'AWS::Logs::LogGroup' with identifier '{"/properties/LogGroupName":"/aws/lambda/"}' already exists." (RequestToken: 34d906d4-b196-0
277-bf5c-83dd9151a251, HandlerErrorCode: AlreadyExists)
```
