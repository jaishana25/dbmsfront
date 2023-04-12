import React from 'react'

function ClientForm() {
  return (
<form className='container'>
    <div className='header'>
        <h1>
            Client Registration
        </h1>

    </div>
    <div>
        <input type='text3' placeholder='Client Number' name='Cno'>

        </input>
    </div>
    <div>
        <input type='text' placeholder='Enter Full Name' name='name'>
            
        </input>

        
    </div>
    <div>
    <input type='text2' placeholder='Enter Type' name='type'>
            
            </input>
        <input type='text3' placeholder='Rent' name='rent'>
            
        </input>

        
    </div>
    <div>
        <input type='text2'  placeholder='Branch Number' name='brno'>

        </input>
    </div>
    <div>
        <input type='text3' placeholder='Branch Number' name='brno'>

        </input>
        
       
        
    </div>
    <div>
    <input type='text' placeholder='Branch Address' name='address'>

</input>
    </div>
    <div>
        <input type='text2'  placeholder='Registered by' name='registeredby'>

        </input>
        <input type='date'  placeholder='Date Registered' name='date registered'>

        </input>
    </div>
    
    <div>
        <button type='submit'>Submit </button>
    </div>

    

</form>
  )
}

export default ClientForm