import React from 'react'

const Skill = ({imageName}) => {

    // const[showName,setShowName]=useState(false)
    // const NameShowHandler=()=>{
    //     setShowName(!showName)
    // }
  return (
    <React.Fragment>
            <main className='items-center bg-slate-800 flex flex-col '>
        
       
            
            <img src={imageName} alt='logo'
                // onMouseEnter={NameShowHandler} 
                // onMouseLeave={NameShowHandler} 
                className={` h-36 w-36 p-5 transform hover:scale-110`} 
            />

            {/* {showName && (
            <div className=' h-20 w-40 text-black bg-white text-xl z-20 absolute'>
            {imageName}
          </div>
            )} */}
            
        
    </main>
    </React.Fragment>
  )
}

export default Skill