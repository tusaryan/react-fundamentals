import { createRoot } from 'react-dom/client'
import './index.css'

// finds/get the root element from its id in the index.html file
const rootElement = document.getElementById('root');
// creating the root DOM(i.e. React virtual DOM) 
// of this element using the createRoot function from react-dom/client
const rootDom = createRoot(rootElement)
const paragraph = <p>Lorem ipsum dolor sit amet.</p>
const firstName = "Tu";
const lastName = "";
const age = 20;
const altH2Style = {color: 'blue', 
                            backgroundColor: 'black', 
                            display: 'inline', 
                            padding: "4px 10px"};

//ideally we would only want this method to run only once in any project
//renders it
rootDom.render(
  // pass your jsx code here
  <>
    {/* <h1 style={{color: 'blue', backgroundColor: 'black', display: 'inline', padding: "4px 10px"}}>Hello TS</h1> */}
    <h1 style={altH2Style}>Hello TS</h1>
    <h2>Hello AK</h2>

    {/* Two ways to do Conditional rendering */}

    {/* suppose you want to print below line when name is there */}
    {/* so, js first check if firstName is not blank, if yes, then it returns true therefore it executes the expression after "&&" */}
    {lastName && <h3 className="heading">Hey there, this is {firstName}</h3>}

    {/* Using Ternary operator */}
    {age >= 20 ? paragraph : ''}
  </>
)