pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/asvmahesh/reactlint.git', branch: 'master', changelog: true, credentialsId: '	b459e8c2-3e4c-4d79-b4de-5add9a9febcd', poll: true)
      }
    }
    stage('build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
        cobertura(autoUpdateHealth: true, autoUpdateStability: true, coberturaReportFile: 'jest/cobertura-coverage.xml', fileCoverageTargets: '60', lineCoverageTargets: '60', maxNumberOfBuilds: 60, methodCoverageTargets: '60')
        junit(healthScaleFactor: 44, testResults: 'output/coverage/junit/junit.xml')
      }
    }
  }
  environment {
    CI = 'true'
  }
}