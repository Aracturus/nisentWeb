import React from 'react'

const Mainfooter = () => {
    return (
        <>
            <div className = "container d-flex justify-content-center align-items-center mt-lg-4">
                <p className = "p-5" className = "material-1">upto <br/> <span style = {{fontSize : "30px"}}>2Km</span> <br/> Operational Range</p> 
                <p className = "p-5" className = "material-2">upto <br/> <span style = {{fontSize : "30px"}}>30Min</span> <br/> Flight Time</p> 
                <p className = "p-5" className = "material-3">upto <br/> <span style = {{fontSize : "30px"}}>6Kg</span> <br/> Take-off Weight</p>
                
            </div>
   <div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="v" target="_blank">Github</a>
    <a href="v" target="_blank">Stackoverflow</a>
    <a href="v" target="_blank">LinkedIn</a>
    <a href="v" target="_blank">Codepen</a>
    <a href="v" target="_blank">JsFiddle</a>
  </div>
</div>




<div className="overview">
 <div className="about-us">
            <div className="container">
                <h2 className="h1 text-center">About Us</h2>
                <p className="responsive-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            
              <h2 className="h1 text-center">About Us</h2>
                <p className="responsive-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            
                </div>
        </div>
 </div>
        </>
    )
}

export default Mainfooter
