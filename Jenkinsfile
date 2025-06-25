pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-cred', url: 'https://github.com/KARTIKNAIK18/e-com-CICD.git', branch: 'main'
            }
        }
    }
}
