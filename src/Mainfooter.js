import React from 'react'
import Overview from "./Overview";

const Mainfooter = () => {
    return (
        <>
            <div className = "container d-flex justify-content-center align-items-center mt-lg-4">
                <p className = "p-5" className = "material-1">upto <br/> <span style = {{fontSize : "30px"}}>2Km</span> <br/> Operational Range</p> 
                <p className = "p-5" className = "material-2">upto <br/> <span style = {{fontSize : "30px"}}>30Min</span> <br/> Flight Time</p> 
                <p className = "p-5" className = "material-3">upto <br/> <span style = {{fontSize : "30px"}}>6Kg</span> <br/> Take-off Weight</p>
                
            </div>
            <Overview/>
        </>
    )
}

export default Mainfooter
