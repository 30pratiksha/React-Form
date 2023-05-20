import React, {useState} from 'react';


const App = () => {
  const [fullName, setFullName] = useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
  });


  const inputEvent= (event)=>{
    const {value, name} = event.target;


    setFullName((preValue)=>{ 
       return {
        ...preValue,
        [name]: value,
        
       }
    });
  }

  const  onSubmits=(event)=>{
    event.preventDefault();
    alert("form Submited");
  }

  return(
    <>
    <div className='main_div'>  
    <form onSubmit={onSubmits}>
    <div>
      <h1>
      Hello {fullName.fname} {fullName.lname}
      </h1>
       <p>{fullName.email}</p>
       <p>{fullName.phone}</p>

      <input type="text" 
       placeholder="Enter Your Name"
      name='fname'
      onChange = {inputEvent}  
       value={fullName.fname}
       />
       <br/>
       <input type="text" 
      placeholder="Enter Your lastName"
        name='lname'
         onChange = {inputEvent}  
       value={fullName.lname}
       />
       <br/>
       <input type="email" 
      placeholder='Enter Your Email'
        name='email'
         onChange = {inputEvent}  
         value={fullName.email}
       />
       <br/>
       <input type="number" 
       placeholder='Enter Your Phone number.'
        name='phone'
         onChange = {inputEvent}  
       value={fullName.phone}
       />
       <br/>
      <button type="submit">Submit Me 👍</button>
    </div>
    </form>
    </div>
    </>
  );
}


export default App;
