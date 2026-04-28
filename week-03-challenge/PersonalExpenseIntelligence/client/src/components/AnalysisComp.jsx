import HTTPClient from "../utils/HTTPClient"

const AnalysisComp = () => {
    const handleClick = () => {
        const client = new HTTPClient()

        client.getGeneralAnalysis()
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <button 
                className="text-gray-700 bg-orange-400 weight-bold px-2 py-2 rounded-lg hover:bg-orange-500 transition shadow-sm font-bold mt-5"
                onClick={handleClick}>Analysis</button>
        </div>
    )
}

export default AnalysisComp