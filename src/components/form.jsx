import {useState} from "react";

function Form(){
  const [isVisible, setIsVisible] = useState(false)


  const handleClick = () => {
    setIsVisible(true)
  }
  console.log(isVisible)
  

  const active =  (
    <>
      <section>
          <div className="left-col">
            <h1>Welcome to Design Community</h1>
            <p className="already-login">Already have an account? <a href="#">Log in</a></p>
            <div className="email">
              <h3>Email</h3>
              <input type="email" />
            </div>

            <div>
              <h3>Username</h3>
              <input type="text" />
            </div>

            <div>
              <h3>Password</h3>
              <input type="password"  min="8"/>
              <div className="charecters">
                <p>Use 8 or more charecter</p>
                <p>One uppercase charecter</p>
                <p>One lowercase charecter</p>
              </div>
            </div>
            <div className="checkbox-div">
              <input type="checkbox" className="checkbox"/>
              <p>
                  I want to recieve emails about the product, 
                  feature, update, events and marketing promotions
              </p>
            </div>
            <p className="terms-of-use">
              By creating account, you agree to the 
              <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
            </p>
            <button onClick={handleClick}><a href="#">Create an accaunt</a></button>
            <p className="already-login">Already have an accaunt? <a href="#">Log in</a></p>
          </div>

          <div className="right-col"></div>
      </section>
    </>
  )


  const finished = (
    <section>
          <div className="left-col left-col-after">
            <h1>Welcome to Design Community</h1>
            <div className="left-col-after">
              <h1>Thanks for registering</h1>
              <img src="../images/thumsup.png" className="thumsup"/>
            </div>
          </div>

          <div className="right-col"></div>
      </section>
  )


  if (isVisible){
    return finished
  }
  else{
    return active
  }

  
}

export default Form;