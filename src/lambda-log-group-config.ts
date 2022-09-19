import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { CfnFunction } from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import { IConstruct } from 'constructs';

/**
 * Configures the log group for all Lambda functions.
 */
export class LambdaLogGroupConfig implements cdk.IAspect {
  #logGroupProps?: logs.LogGroupProps;

  constructor(logGroupProps?: Omit<logs.LogGroupProps, "logGroupName">) {
    this.#logGroupProps = logGroupProps;
  }

  visit(construct: IConstruct): void {
    if (construct instanceof lambda.CfnFunction) {
    // if (cdk.CfnResource.isCfnResource(construct) && construct.cfnResourceType == 'AWS::Lambda::Function') {
      const lambda = construct as CfnFunction;

      new logs.LogGroup(lambda, "LogGroup", {
        ...this.#logGroupProps,
        logGroupName: `/aws/lambda/${construct.functionName}`
      });
    }
  }
}