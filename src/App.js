 import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

import './App.css';
 
function App() {
    
  // const[num,setNum]=useState(0)
  // const[pr,setPr]=useState(0)
  const[main,setMain]=useState([])
  // const[reset,setReset]=useState(-1)
  // const[initialValues,setinitialValue]=useState(-1)
  const[re,setRe]=useState(-1)
  const[value1,setValue1]=useState(
    {
      firstName: '',
      lastName: '',
      guj: '',
      eng: '',
      total:'',
      pr:''
    }
  )

  const deletehandler=(index)=>{
    const copy=[...main]
    copy.splice(index,1)
    setMain(copy)
  }

  const edithandler=(values,index)=>{
    setValue1(values)
    setRe(index)
  }

  return (
    <div className="App">
      <Formik
      enableReinitialize
      initialValues={value1}

      
     let onSubmit={ async (values,{ resetForm},value1)=>{
       const sum=parseInt(values.guj)+parseInt(values.eng)
       const total=sum/2;
       if(values.firstName&&values.lastName&&values.guj&&values.eng)
       {
       if(re>=0)
       {
        let copy=[...main]
         copy.splice(re,1,{firstName:(values.firstName),lastName:(values.lastName),guj:(values.guj),eng:(values.eng),total:(sum),pr:(total)})
         setMain(copy)
        //  value1()    
      }
      else 
      {
        let copy=[...main]
        copy.push({firstName:(values.firstName),lastName:(values.lastName),guj:(values.guj),eng:(values.eng),total:(sum),pr:(total)})
        setMain(copy)
      }
      setValue1({  firstName: '',
      lastName: '',
      guj: '',
      eng: '',
      total:'',
      pr:''})

        // resetForm()

        setRe(-1)

      } 
      }
      }
    >
      <Form>

        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="enter name"  />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="enter last name" />

        <label htmlFor="guj">guj</label>
        <Field id="guj" name="guj" placeholder="enter guj" />

        <label htmlFor="eng">eng</label>
        <Field id="eng" name="eng" placeholder="enter eng" />

        <button type="submit">Submit</button>
         
      </Form>
    </Formik>

    <table border={1}>
      <tr>
        <td>firstName</td>
        <td>lastName</td>
        <td>guj</td>
        <td>eng</td>
        <td>total</td>
        <td>pr</td>
        <td>delete</td>
        <td>edit</td>
      </tr>
      {
        main.map((values,index)=>{
          return(
            <tr>
              <td>{values.firstName}</td>
              <td>{values.lastName}</td>
              <td>{values.guj}</td>
              <td>{values.eng}</td>
              <td>{values.total}</td>
              <td>{values.pr}</td>
              <td><button onClick={()=>deletehandler(index)}>delete</button></td>
              <td><button onClick={()=>edithandler(values,index)}>edit</button></td>
            </tr>
          )
        })
        
      }

    </table>

    </div>
  );
}

export default App;
