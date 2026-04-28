const express = require('express')
const AnalysisController = require('../controllers/analysis.controller')
const router = express.Router()
const { verifyToken } = require('../utils/oauth')

router.get('/analysis/general', verifyToken, AnalysisController.getGeneralAnalysis)

module.exports = {
    analysisRouter: router
}