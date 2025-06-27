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
            script{
                 if (!fileExists('backend/Dockerfile')){
                    error "❌ Dockerfile not found!"    
                 if (!fileExists('frontend/Dockerfile')){
                    error "❌ Dockerfile not found!"    
                }else{
                    echo "✅ Dockerfile is present."
                }   
            }
        }
    }
    stage('build the image'){
        steps{
            script{
                dir('frontend'){
                   sh  'docker build -t kartiknaik/frontend-ecom .'
                }
                dir('backend'){
                   sh  'docker build -t kartiknaik/e-com-backend .'
                }
            }
        }
    }       
  }
}

