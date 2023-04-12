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

        <input type='text2' placeholder='Rooms' name='rooms'>
            
            </input>
            <input type='text3' placeholder='Rent' name='rent'>
            
        </input>
    </div>
    <div>
        <input type='text' placeholder='Enter Property Address' name='address'>
            
            </input>
    

       
    </div>
    <div>
        <input type='text3'  placeholder='Managed by ' name='staff'>

        </input>
        
    </div>
    <div>
        <input type='text3' placeholder='Owner Number' name='Ono'>

        </input>
        <input type='text2' placeholder='Business Name' name='bname'>

        </input>
        
        
    </div>
    <div>
    <input type='text' placeholder='Address' name='address'>

</input>
    </div>
    <div>
        <input type='text3'  placeholder='Telephone Number' name='number'>

        </input>
        
    </div>
    <div>
        <input type='text2'  placeholder='Type of business' name='business'>

        </input>
        <input type='text3'  placeholder='Contact Name' name='cname'>

</input>
    </div>
    <div>
    <input type='text'  placeholder='Registered at branch' name='branch'>

</input>
    </div>
    <div>
        <button type='submit'>Submit </button>
    </div>

    

</form>
  )
}

export default PropertyForm