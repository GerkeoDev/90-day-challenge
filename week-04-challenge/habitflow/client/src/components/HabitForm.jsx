import { useState } from "react"

const HabitForm = ({onSubmitProp, onClose}) => {
    const [form, setForm] = useState({
        title: '',
        frequency: ''
    })
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

            <div className="bg-white p-8 rounded-lg">
                <h2>Create a new Habit</h2>
                <form onSubmit={onSubmitProp(form)} className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        {/* <label>Name of the Habit</label> */}
                        <input type="text" id="title" onChange={handleChange} value={form.title} required placeholder="Habit" 
                            className="border border-gray-300 p-1 focus:outline-none rounded-md"
                        />
                    </div>
                    <div className="flex flex-col">
                        {/* <label>Frequency</label> */}
                        <select id="frequency" onChange={handleChange} value={form.frequency} required placeholder="Frequency" 
                            className="border border-gray-300 p-1 focus:outline-none rounded-md"
                        >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <button className="bg-gray-300 rounded-md p-1 hover:bg-gray-400" onClick={onClose}>Close</button>
                        <button type="submit" className="bg-gray-300 rounded-md p-1 hover:bg-gray-400" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HabitForm