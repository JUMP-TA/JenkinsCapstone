# Deploying a Jenkins Pipeline to the Cloud

This capstone project integrates several aspect of Jenkins Pipelines. You'll develop a CI/CD pipeline with automated testing using Jenkins and deploy it to AWS S3, providing hands-on experience with modern DevOps practices.

#### Step 1: Ensure Project Structure and Dependencies
Verify that the project structure includes the necessary files and directories, and that `package.json` has the required dependencies and scripts.

**Project Structure:**
```
jenkinscapstone/
├── Dockerfile
├── index.html
├── main.js
├── style.css
├── app.js
├── tests/
│   ├── app.test.js
│   └── frontend.test.js
├── package.json
└── package-lock.json
```

#### Step 2: Create the Jenkinsfile
In the root of the project directory, create a `Jenkinsfile` like the one included here.

#### Step 3: Configure AWS S3
Ensure the S3 bucket `jenkins-bucket-123` (or whatever name is available) is created and configured for static website hosting.

1. **Create an S3 Bucket**:
   - Go to the S3 service in your AWS Management Console.
   - Click "Create bucket".
   - Enter something like`jenkins-bucket-123` as the bucket name and select the region.
   - Click "Create bucket".

2. **Configure S3 Bucket for Static Website Hosting**:
   - Select your newly created bucket.
   - Go to the "Properties" tab.
   - Scroll down to "Static website hosting" and click "Edit".
   - Enable static website hosting.
   - Set "index.html" as the index document.
   - Click "Save changes".

3. **Update S3 Bucket Permissions**:
   - Go to the "Permissions" tab.
   - Edit the bucket policy to allow public access:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::jenkins-bucket-123/*"
       }
     ]
   }
   ```

#### Step 4: Configure Jenkins
1. **Install Required Plugins**:
   - Docker Pipeline
   - Pipeline: AWS Steps
   - Git
   - NodeJS
   - Blue Ocean

2. **Set Up Credentials**:
   - Store your AWS credentials in Jenkins as `aws-access-key-id` and `aws-secret-access-key`.
   - Store your DockerHub credentials as `dockerhub-credentials`.

3. **Create Pipeline Job**:
   - Go to Jenkins Dashboard > New Item > Pipeline.
   - Name your pipeline, select Pipeline, and click OK.
   - In the pipeline configuration, set the Pipeline script path to `Jenkinsfile`.

#### Step 5: Run the Pipeline
1. **Trigger the Pipeline**:
   - Manually trigger the pipeline by clicking "Build Now" in Jenkins.

2. **Monitor the Pipeline**:
   - Use the Jenkins Blue Ocean interface to monitor the pipeline stages.

#### Step 6: Verify the Deployment
1. **AWS S3**:
   - Go to your AWS S3 dashboard to verify the files have been uploaded to your bucket.

2. **Access the Application**:
   - Use the S3 bucket static website URL to access your application and verify everything is working.