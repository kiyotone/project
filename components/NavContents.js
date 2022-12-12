
import React from 'react'

function NavContents({name,icon}) {
  return (
    
    <div className=" ml-1 hover:text-[#734BF9] hover:bg-gradient-to-r from-[#734BF9] to-transparent  text-[#090a0a] rounded-l-3xl border-[2.5px] flex flex-col  justify-center  h-14">
      
      <div className="hover:bg-white rounded-l-3xl ml-[1px] flex flex-col  justify-center w-full h-12">

        <div className="flex pl-3 items-center">
          <div className="">{icon}</div>
          <div className="ml-2">{name}</div>
        </div>  
      </div>
    </div>
  )
}

export default NavContents