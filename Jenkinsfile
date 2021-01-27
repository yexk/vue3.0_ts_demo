pipeline {
    agent {
        docker {
            image 'node:12-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('run') { 
            steps {
                sh 'npm run build' 
            }
        }
        stage('done') { 
            steps {
                echo 'success'
            }
        }
        
    }
}