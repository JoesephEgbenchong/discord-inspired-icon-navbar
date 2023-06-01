import React from 'react'
import { FaFire, FaPoo } from 'react-icons/fa'
import { BsFillLightningFill, BsPlus } from 'react-icons/bs'
import SideBarIcon from './SideBarIcon'


export default function SideBar() {
  return (
    <div className='absolute top-0 left-0 bg-gray-900 h-screen w-24 flex flex-col text-white shadow-lg'>
        <SideBarIcon icon={<FaFire size="28" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
    </div>
  )
}
