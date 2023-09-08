import React from 'react'

function TechCard({technology, percent}) {
  return (

    <div className="card text-center">

    <h1 className="mb-5">
    {technology}
    </h1>

    <div className="radial-progress" style={{"--value":percent}}>
    {percent}%
    </div>
    
    </div>

  );
}


const App = () => {
  return (

    <div>

    <h1 className="hero bg-base-200 text-5xl font-bold py-10">
    Technologies
    </h1>

    <div className="hero bg-base-200">
        
        <div className="w-1/2 flex justify-around">

        <TechCard 
        percent={95}
        technology={'React'}
        />

        <TechCard 
        percent={5}
        technology={'HTML5'}
        />

        <TechCard 
        percent={20}
        technology={'Tailwind'}
        />

        <TechCard 
        percent={80}
        technology={'DaisyUI'}
        />

        </div>

    </div>

    </div>
  )
}

export default App