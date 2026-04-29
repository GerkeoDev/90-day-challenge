

const AnalysisComp = (props) => {
    const { analysis } = props
    
    return analysis && analysis.totalSpent ? (
        <div className="text-white mt-10">
            <p className="text-2xl text-orange-400 mb-5">Analysis</p>
            <div>
                <p>Your total spent: <span className="text-orange-400">${analysis.totalSpent}</span></p>
                <p>Your biggest expense is: <span className="text-orange-400">${analysis.biggestExpense.amount}</span></p>
                <p>You mostly spend on: <span className="text-orange-400">{analysis.mainCategory}</span></p>
                <p>Warning: {analysis.warning? <span className="text-red-400">High spending detected</span> : <span className="text-blue-400">No high spending detected</span>}</p>
            </div>
        </div>
    ) : (
        <div className="text-center p-5">
            <span>You have no expenses yet</span>
        </div>
    )
}

export default AnalysisComp