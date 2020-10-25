const {
  ENVIRONMENT,
  PROD_CLOUDFRONT_DISTRIBUTION_ID,
  TEST_CLOUDFRONT_DISTRIBUTION_ID,
  PROD_DEPLOYMENT_BUCKET,
  TEST_DEPLOYMENT_BUCKET,
} = process.env;

const distributionId = ENVIRONMENT === "prod" ? PROD_CLOUDFRONT_DISTRIBUTION_ID : TEST_CLOUDFRONT_DISTRIBUTION_ID;

const bucketName = ENVIRONMENT === "prod" ? PROD_DEPLOYMENT_BUCKET : TEST_DEPLOYMENT_BUCKET;

module.exports = {
  site: {
    component: "@sls-next/serverless-component@1.17",
    inputs: {
      bucketName,
      cloudfront: {
        distributionId,
      },
    },
  },
};
