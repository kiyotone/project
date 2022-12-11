import React from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'
import {RxDashboard} from 'react-icons/rx'
import NavContents from './NavContents'

const Navbar=()=> {
  const buttons = [
    {
      name:"Dashboard",
      icon:<RxDashboard/>
    }
    ,
    {
      name:"NetWork",
      icon:<RxDashboard/>
    }
    ,{
      name:"Register",
      icon:<RxDashboard/>
    }
    ,{
      name:"E-wallet",
      icon:<RxDashboard/>
    }
    ,
    {
      name:"ProfileManagement",
      icon:<RxDashboard/>
    }
    ,
    {
      name:"Logout",
      icon:<RxDashboard/>
    }
    
  ]
  return (
    <div className="bg-[#E4E8F0] h-screen w-[300px] flex flex-col">

            <div className="flex flex-col items-center">
              <div className="flex items-center mt-3">
                <Image src={logo} className="w-[60px] h-[60px]"/>
                <div className="text-black font-bold text-xl">Company</div>
              </div>
         
            <div className=" flex flex-col mt-20 w-full">
              
              { 
              
              buttons.map((element)=>
              (
              <NavContents name={element.name} icon ={element.icon} />
              )
              )
            
            }
            
            </div>
            </div>



    </div>
  )
}

export default Navbar