import React from 'react'

function LeaseForm() {
  return (
<form className='container'>
    <div className='header'>
        <h1>
            Lease Form
        </h1>

    </div>
    <div>
        <input type='text3' placeholder='Enter Client Number' name='Cno'>

        </input>
    </div>
    <div>
        <input type='text' placeholder='Enter Full Name' name='name'>
            
        </input>

        
    </div>
    <div>
        <input type='text3' placeholder='Client Signature' name='sign'>
            
        </input>

    </div>
    <div>
        <input type='text2'  placeholder='Property Number' name='pnumber'>

        </input>
    </div>
    <div>
       
        <input type='text' placeholder='Property Address' name='paddress'>

        </input>
        
    </div>
    <div>
        <h3> Rent Start </h3>
        <input type='date'  placeholder='Rent Start' name='start'>

        </input>

        <h3> Rent Finish  </h3>

        <input type='date'  placeholder='Rent Finish' name='finish'>

        </input>
    </div>
    <div>
        <input type='text3'  placeholder='duration' name='duration'>

        </input>
    </div>
    <div>
        <button type='submit'>Submit </button>
    </div>

    

</form>
  )
}

export default LeaseForm