pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // git credentialsId: 'github-token', url: 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'
                git clone : 'github-cred', url: 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'
            }
        }

        stage('List Files') {
            steps {
                sh 'ls -la'
            }
        }
    }
}
