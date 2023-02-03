import React from "react";


function Form(){
    return(
        <section>
        <div className="max-w-978 w-100 flex border-1 border-black ">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>Register and enjoy the service</span>

                <form id='form'  >
                    <input type="text" placeholder='username' />
                    <input type="text"  placeholder='password' />
                    <input type="text" placeholder='confirm password' />
                    <input type="text" placeholder='mobile number' />
                    
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            
        </div>
    </section>
    )
}

export default Form