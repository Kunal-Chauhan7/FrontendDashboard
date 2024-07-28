import React from 'react'
import imagelogo from '../assets/title.png'
import {IoMdHome , IoMdSettings } from 'react-icons/io'
import {ImBooks} from 'react-icons/im'
import {BsChatTextFill , BsFileBarGraphFill } from 'react-icons/bs'
import './Sidebar.css'
const Sidebar = () => {
return (
    <div>
        <div className='leftSideBarContainer'>
            <div className='SidebarContainer'>
                <img src={imagelogo} alt="logo" className='SidebarLogo'/>
            </div>
            <ul className='iconsList'>
                <li>
                    <IoMdHome/>
                    <h3>Dashboard</h3>
                </li>
                <li>
                    <ImBooks/>
                    <h3>Courses</h3>
                </li>
                <li>
                    <BsChatTextFill/>
                    <h3>Chats</h3>
                </li>
                <li>
                    <BsFileBarGraphFill/>
                    <h3>Grades</h3>
                </li>
                <li>
                    <IoMdSettings/>
                    <h3>Settings</h3>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Sidebar
