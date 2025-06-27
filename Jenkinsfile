pipeline {
    agent {
        docker {
            image 'docker:20.10.24'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
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
    stage('Test Docker Access') {
    steps {
        sh 'docker --version'
        sh 'docker ps'
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
}
    stage('build the image'){
        steps{
            sh 'sudo usermod -aG docker $USER'
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

}

