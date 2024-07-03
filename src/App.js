import { useState } from 'react';
import './App.css';

function App() {

  const [student, setStudent] = useState({ fname: "", lname: "", password: "", email: "" })

  const [data, setData] = useState(JSON.parse(localStorage.getItem("d")) || [])

  const fontSubmit = (e) => {
    console.log(e.target.name)
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const submit = () => {
    setData([...data, student])
    localStorage.setItem("d", JSON.stringify([...data, student]))

  }

  const sortFname = () => {

    const sortedData = data.sort((a, b) => { return (a.fname > b.fname ? 1 : -1) });

    setData([...sortedData])
    localStorage.setItem("disha", JSON.stringify(sortedData));


  }



  return (
    <>

      <div style={{ backgroundImage: "url(https://wallpapers.com/blog/wp-content/uploads/2023/06/glitter-golden-bokeh-lights-scaled.jpeg)" }} className="h-[auto]  bg-cover p-2.5  flex  flex-col items-center  justify-center ">

        <div className="flex flex-col gap-[20px]">
          <div >
            <label htmlFor="fname" ><b className="text-xl">Fname:</b></label>
            <input type="text" id="fname" name="fname" value={student.fname} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
          </div>

          <div >
            <label htmlFor="lname"><b className="text-xl">Lname:</b></label>
            <input type="lname" id="lname" name="lname" value={student.lname} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
          </div>

          <div>
            <label htmlFor="password"><b className="text-xl">Password:</b></label>
            <input type="password" id="password" name="password" value={student.password} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
          </div>

          <div>
            <label htmlFor="email"><b className="text-xl ">Email:</b></label>
            <input type="email" id="email" name="email" value={student.email} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent " />
          </div>

          <div>
            <button className="bg-amber-600 h-12 w-24 rounded-xl  border-yellow-500  ml-[70px] mt-6" onClick={submit}><b>Submit</b></button>
          </div>
        </div>

        <div className="flex justify-center mt-[5%]">
          
          <button className="bg-amber-600 h-12 w-24 rounded-xl  border-yellow-500  mr-[50px] mt-6" onClick={() => sortFname()}><b>sort</b></button>
        </div>

        <div className="flex justify-center mt-[5%]">

          <table>
            <thead>
              <th>Fname</th>
              <th>Lname</th>
              <th>Password</th>
              <th>Email</th>
            </thead>

            <tbody>
              {data.map((item, index) => {
                return (
                  <tr>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.password}</td>
                    <td>{item.email}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

        </div>
      </div>


    </>
  );
}

export default App;
