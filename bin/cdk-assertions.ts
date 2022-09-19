#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as logs from 'aws-cdk-lib/aws-logs';
import 'source-map-support/register';
import { CdkAssertionsStack } from '../lib/cdk-assertions-stack';
import { LambdaLogGroupConfig } from '../src/lambda-log-group-config';

const app = new cdk.App();
new CdkAssertionsStack(app, 'CdkAssertionsStack');


cdk.Aspects.of(app).add(new LambdaLogGroupConfig({
  retention: logs.RetentionDays.ONE_DAY
}))