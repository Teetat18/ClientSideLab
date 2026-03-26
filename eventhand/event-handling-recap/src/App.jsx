
import { useState } from "react";
import "./App.css";
function App() {
  
  const [data, setData] = useState({
    name: "",
    genre : "",
    isAccepted: false,
    isActive: false,
    status: false

  });
  const [result, setResult] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  const handleInputChange = (e) => {
    console.log(e.target.name);
    setData({...data, [e.target.name]: e.target.value });
  }
  const handleCheckedChange = (e) => {
    setData({...data, [e.target.name]: e.target.checked });
  }
  const handleOnFocus = (e) => {
    console.log("input focused");
  }
  const handleOnBlur = (e) => {
    console.log("input blurred");
  }
  const handleKeyUp = (e) => {
    console.log("release key: " + e.key);
  }
  const handleKeyDown = (e) => {
    console.log("press key: " + e.key);
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(`Hello, ${data.status === "Male" ? "Mr. " : "Ms. "} ${data.name}`);
    console.log("form submitted");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" onChange={handleInputChange} onFocus={handleOnFocus} onBlur={handleOnBlur} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} name="name"/>
        <br />
        <input type="checkbox" onChange={handleCheckedChange} name="isAccepted" />
        <label>I agree.</label>
        <br />
        <input type="radio" onChange={handleInputChange} name="status" value="Male" />
        <label>Male</label>
        <input type="radio" onChange={handleInputChange} name="status" value="Female" />
        <label>Female</label>
        <br />
        <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Hello World
        </h1>
        {isHovered && <div className="tooltip">Tooltip</div>}
        <button type="submit" disabled={!data.isAccepted}>Submit</button>
        <h3>
          {result}
        </h3>
      </form>
    </>
  );
}
export default App;
