pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID = credentials('aws-access-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        AWS_DEFAULT_REGION = 'us-east-1'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/JUMP-TA/JenkinsCapstone.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm test'
                    } else {
                        bat 'npm test'
                    }
                }
            }
        }

        stage('Deploy to S3') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding', 
                    credentialsId: 'aws-access-key-id'
                ]]) {
                    script {
                        if (isUnix()) {
                            sh 'aws s3 sync . s3://jenkins-bucket-123 --delete'
                        } else {
                            bat 'aws s3 sync . s3://jenkins-bucket-123 --delete'
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
