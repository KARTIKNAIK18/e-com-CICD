pipeline {
    agent { label 'Built-In Node' }
    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-cred', url: 'https://github.com/KARTIKNAIK18/e-com-CICD.git', branch: 'main'
            }
        }

        stage('List All the Files') {
            steps {
                sh 'ls -l'
                sh 'whoami'
            }
        }

        stage('Test Docker Access') {
            steps {
                sh 'docker --version'
                sh 'docker ps'
            }
        }

        stage('Dockerfile Check') {
            steps {
                script {
                    def backendExists = fileExists('backend/Dockerfile')
                    def frontendExists = fileExists('frontend/Dockerfile')

                    if (!backendExists || !frontendExists) {
                        error "❌ Dockerfile missing: " + 
                              (!backendExists ? "backend/Dockerfile " : "") +
                              (!frontendExists ? "frontend/Dockerfile" : "")
                    } else {
                        echo "✅ Both Dockerfiles are present."
                    }
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    dir('frontend') {
                        sh 'docker build -t kartiknaik/frontend-ecom .'
                    }
                    dir('backend') {
                        sh 'docker build -t kartiknaik/e-com-backend .'
                    }
                }
            }
        }
    }
}


