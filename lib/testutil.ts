import AWS from "aws-sdk";

export const getS3 = () => {
  AWS.config.update({
    region: process.env.AWS_BUCKET_REGION,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.AWS_IDENTITY_POOL_ID as string,
    }),
  });
  const S3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: process.env.AWS_BUCKET_NAME },
  });
  return S3;
};
