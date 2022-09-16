import React,{useState,useEffect} from "react";
import { useForm } from "react-hook-form";


function DataForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("");
  const [optinWhatsapp_email, setoptinWhatsapp_email] = useState("")

  // function serverUser(){
  //   console.warn(name)
  // }

  const handleSubmit=(e)=>{
    
    fetch("https://sk-qr-data-dbcapture-dev.herokuapp.com/campaign", {

      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        "name": name,
        "phone": contact,
        "email":email,
        "optinWhatsapp_email":optinWhatsapp_email,
        "product":"prod1",
        "therapy":"skin",
        "utm_source":"fbMAr",
        "utm_medium":"qzMed"
    }),
       
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
   
  // Converting to JSON
  .then(response => response.json())

  // Displaying results to console
  .then(json => console.log(json));
   
  // window.location.replace("/BlankPage");
  //props.history.replace({pathname:`/BlankPage`});
  

  }
  

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  
  // const onSubmit = () => {
  //   // console.log(name, email, contact, whatsapp);
      
  // }; 

  return (
    <div className="container">
      {/* <form  class="row"> */}

      <div class="col">
        {/* username */}
          <input onChange={(e)=>setName(e.target.value)} 
              // {...register("firstName", {
              // required: true,
              // maxLength: 20,
              // pattern: /^[A-Za-z]+$/i
              
              // })}
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              
              />
              {/* <span>
              {errors?.firstName?.type === "required" &&
              <p class="alert alert-danger p-firstname" role="alert"> This field is required</p>
              }

              {errors?.firstName?.type === "maxLength" && (
              <p class="alert alert-danger p-firstname" role="alert">First name cannot exceed 20 characters</p>
              )}

              {errors?.firstName?.type === "pattern" && (
              <p class="alert alert-danger p-firstname" role="alert">Alphabetical characters only</p>
              )}
              
              </span> */}
              {/* <div class="alert alert-danger" role="alert">
              This is a danger alert—check it out!
              </div> */}
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        {/* end user name  */}

        <div className="form-flex">
          <div class="col">
            <input onChange={(e)=>setEmail(e.target.value)} 
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              //   onChange={(event) => validEmail(event)}
              // {...register("mail", {
              //   required: true,
              //   pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              //   message: "invalid email address",
              // })}
            />
            {/* <span>
              {errors?.mail?.type === "required" && (
                <p class="alert alert-danger p-email" role="alert">
                  This field is required
                </p>
              )}
              {errors?.mail?.type === "pattern" && (
                <p class="alert alert-danger p-email" role="alert">
                  Invalid Email id
                </p>
              )}
            </span> */}
          </div>
          <div class="col">
            <input onChange={(e)=>setContact(e.target.value)} 
              type="number"
              class="form-control"
              placeholder="Contact"
              aria-label="Contact"
              minLength={10}
              // {...register("number", { required: true, pattern: /[0-9]{10}/ })}
            />
            {/* <span>
              {errors?.number?.type === "required" && (
                <p class="alert alert-danger p-number" role="alert">
                  This field is required
                </p>
              )}
              {errors.number?.type === "pattern" && (
                <p class="alert alert-danger p-number" role="alert">
                  10 digit only{" "}
                </p>
              )}
            </span> */}
          </div>
        </div>
        <div className="wp-content">
          <input type="radio" name="whatsapp" onChange={(e)=>setoptinWhatsapp_email(e.target.value)}/>
          <label htmlFor="whatsapp">
            Get updates on{" "}
            <span style={{ textDecoration: "underline" }} className="green">
              WhatsApp
            </span>
            . You may opt out anytime
          </label>
        </div>
        <div class="col-12">
          <input type="Submit" value="VIEW FOR FREE" 
           onClick={(e)=>handleSubmit(e)}/>
        </div>
      {/* </form> */}
    </div>
  );
}

export default DataForm;
