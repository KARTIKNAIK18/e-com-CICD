pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-cred', url: 'https://github.com/KARTIKNAIK18/e-com-CICD.git', branch: 'main'
            }
        }

    stage('list all the files'){
        steps{
            sh 'ls -l'
        }
    }
    stage('dockerfile check'){
        steps{
            sh 'cd backend'
            script{
                 if (!fileExists('backend/Dockerfile')){
                    error "❌ Dockerfile not found!"    
                }else{
                    echo "✅ Dockerfile is present."
                }   
            }
        }
    }       
  }
}

