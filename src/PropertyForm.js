import React from 'react'

function PropertyForm() {
  return (
<form className='container'>
    <div className='header'>
        <h1>
            Property Registration
        </h1>

    </div>
    <div>
        <input type='text3' placeholder='Enter Property Number' name='property'>

        </input>
    </div>
    <div>
        <input type='text3' placeholder='Type' name='type'>
            
        </input>

        <input type='text2' placeholder='Enter Position' name='position'>
            
            </input>
    </div>
    <div>
        <input type='text3' placeholder='Sex' name='sex'>
            
        </input>

        <input type= 'date' placeholder='Date of birth' name='dob'>
        </input>
    </div>
    <div>
        <input type='text2'  placeholder=' Salary' name='salary'>

        </input>
    </div>
    <div>
        <input type='text3' placeholder='Branch Number' name='brno'>

        </input>
        <input type='text2' placeholder='Telephone Number' name='number'>

        </input>
        <input type='text' placeholder='Branch Address' name='address'>

        </input>
        
    </div>
    <div>
        <input type='text2'  placeholder='Supervisor Name' name='supervisor'>

        </input>
        <input type='text2'  placeholder='Manager Start Date' name='supervisor'>

        </input>
    </div>
    <div>
        <input type='text2'  placeholder='Manager Bonus' name='bonus'>

        </input>
    </div>
    <div>
        <button type='submit'>Submit </button>
    </div>

    

</form>
  )
}

export default PropertyForm