import { useState } from "react"

const HabitForm = ({onSubmitProp, onClose}) => {
    const [form, setForm] = useState({
        title: '',
        frequency: 'daily'
    })
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        onSubmitProp(form)
        setForm({
            title: '',
            frequency: 'daily'
        })
    }
    return (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"> {/* Overlay */}

            <div className="bg-white p-8 rounded-lg">{/* Modal */}
                <h2>Create a new Habit</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        {/* <label>Name of the Habit</label> */}
                        <input type="text" name="title" onChange={handleChange} value={form.title} required placeholder="Habit" 
                            className="border border-gray-300 p-1 focus:outline-none rounded-md"
                        />
                    </div>
                    <div className="flex flex-col">
                        {/* <label>Frequency</label> */}
                        <select name="frequency" onChange={handleChange} value={form.frequency} required placeholder="Frequency" 
                            className="border border-gray-300 p-1 focus:outline-none rounded-md"
                        >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <button className="bg-gray-300 rounded-md py-1 px-2 hover:bg-gray-400 hover:text-white cursor-pointer" onClick={onClose}>Close</button>
                        <button type="submit" className="bg-gray-300 rounded-md py-1 px-2 hover:bg-gray-400 hover:text-white cursor-pointer" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HabitForm