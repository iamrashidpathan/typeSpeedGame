
import React from "react"
import './styles.css'






function App(){
    
    const [values, setValues] = React.useState({
        textTyped: "type here",
        clicked : false,    
        time: 15,
        wordCount:0
    })
    
    
    
    function handleTextChange(e){
        //console.log(e.target.value)
        var v=e.target.value
        setValues((prevValues)=>(
            
           {
                ...prevValues,
                textTyped: v
            }
           ))
        //console.log(values)
    } 
    
    function stopwatch(){
        //console.log(values)
        setValues((prevValues)=>(
                {
                    ...prevValues,
                    time: prevValues.time-1
            }
            ))
            
    }
    
    React.useEffect(()=>{
        if(values.time >0 && values.clicked){
            window.setTimeout(stopwatch, 1000)
            //console.log("effect")
        }
        
         
    },[values.time, values.clicked])
    //console.log(values)
    
    if(values.time===0){
        end()
    }
    
    function start(e){
    e.preventDefault();
    
        setValues((prevValues)=>(
            {
                ...prevValues,
                clicked: true,
                textTyped: ""
                
            }
        ))
       //startInterval= window.setInterval(stopwatch, 1000)
       
    }
    
    function end(){
        let tempval = (values.textTyped.trim().split(" "));
        console.log(tempval)
        tempval = tempval.filter(x=> x.length !==0)
        console.log(tempval)
        let len = tempval.length
        // console.log("hi")
         console.log(len);
        setValues((prevValues)=>(
            {
            ...prevValues,
            clicked: false,
            wordCount: len,
            time: 15,
            
            }
            ))
            //clearInterval(startInterval)
    } 
    
      
       
        
    
     
     
        
        
    return(
        <div>
            <h1>Type Speed</h1>
            <form onSubmit={start}>
            <textarea disabled={!values.clicked} onChange={handleTextChange} value={values.textTyped}/>
            {values.clicked === true && <h4>Time remaining {values.time} secs</h4>}
            <button disabled={values.clicked}>Start</button>
            </form>
            {values.wordCount !==0 && <h1>Word count: {values.wordCount}</h1>}
        </div>
    ) 
    
    


}



    


export default App