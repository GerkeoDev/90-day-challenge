import { useState } from 'react';

const Form = () => {
    const [colorInput, setColorInput] = useState('');
      const [sizeInput, setSizeInput] = useState('');
      const [data, setData] = useState([]);
      const handleChangeSize = (e) => {
        setSizeInput(e.target.value)
      }
      const handleChangeColor = (e) => {
        setColorInput(e.target.value)
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        setData([
          ...data,
          {
            color: colorInput,
            size: parseInt(sizeInput)
          }
        ])
        setColorInput('')
        setSizeInput('')
      }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Color Boxes</h1>
                </div>
                <div className='gridBox'>
                    <label htmlFor="">Color</label>
                    <input type="text" onChange={handleChangeColor} value={colorInput}/>
                </div>
                <div className='gridBox'>
                    <label htmlFor="">Size (in pixels)</label>
                    <input type="number" onChange={handleChangeSize} value={sizeInput}/>
                </div>
                <div style={{marginBottom: '10px'}}>
                    <button type='submit'>Add</button>
                    <button type='button' onClick={(e)=> console.log(data)}>Log</button>
                    <button type='button' onClick={(e)=> setData([])}>Clear</button>
                </div>
                <div>
                    {
                        [...data].reverse().map((box, index) => (
                            <div key={index} className='flexBox'>
                                <p style={{backgroundColor: (box.color), height: (box.size), width: (box.size)}}></p>
                            </div>
                        ))
                    }
                </div>
            </form>
        </div>
    )
}
export default Form;