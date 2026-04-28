import { useState } from "react"

const ExpenseFormComp = (props) => {
    const { onSubmitProp } = props

    const [ dataForm, setDataForm ] = useState({})

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitProp(dataForm)
        setDataForm({})
    }
    
    const inputStyle = "w-full px-4 mb-2 py-2 bg-gray-200 text-gray-900 text-sm rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
    const buttonStyle = "bg-gray-800 text-orange-400 weight-bold px-2 py-2 rounded-lg hover:bg-gray-900 transition shadow-sm"
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" id="amount" placeholder='Amount' className={inputStyle} onChange={handleChange} value={dataForm.amount || ''}/>
                    </span>
                    <span>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" id="description" placeholder='Description' className={inputStyle}  onChange={handleChange} value={dataForm.description || ''}/>
                    </span>
                    <span>
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" id="category" placeholder='Category' className={inputStyle}  onChange={handleChange} value={dataForm.category || ''}/>
                    </span>
                </div>
                <div>
                    <button type="submit" className={buttonStyle}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseFormComp