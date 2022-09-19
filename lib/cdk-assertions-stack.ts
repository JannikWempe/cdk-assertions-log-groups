import * as path from 'path';

import * as cdk from 'aws-cdk-lib';
import {
  aws_lambda as lambda,
  aws_lambda_nodejs as lambdaNodeJs
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkAssertionsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myLambda = new lambdaNodeJs.NodejsFunction(this, 'MyLambda', {
      entry: path.join(__dirname, 'lambda', 'index.ts'),
      runtime: lambda.Runtime.NODEJS_16_X,
    });
  }

}
