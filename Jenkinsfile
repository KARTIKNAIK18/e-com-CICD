pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // git credentialsId: 'github-token', url: 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'
                git credentialsId: 'github-token', url: 'https://github.com/KARTIKNAIK18/e-com-CICD.git'
            }
        }

        stage('List Files') {
            steps {
                sh 'ls -la'
            }
        }
    }
}
