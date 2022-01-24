import React from "react";
import { useContext, useState, useEffect } from 'react'
import SidebarOption from "./SidebarOption";
import styled from 'styled-components';
import { BsTwitter } from 'react-icons/bs';
import { RiHome7Fill } from 'react-icons/ri';
import { FaHashtag } from 'react-icons/fa';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { RiFileList2Line } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { CgMoreO } from 'react-icons/cg';
import { GoVerified } from 'react-icons/go';
import { UserContext } from ".././contexts/User";
import CreateTweetModal from '../components/Tweet/CreateTweetModal';
import { Link} from "react-router-dom"


const Sidbar = styled.div`
.sidebar {
    border-right: 1px solid rgb(233, 232, 232);
    padding-right: 10px;
    margin-left: 40px;
}

.buttonfortweet {
    width: 180px;
}

.logo {
    color: rgb(51, 185, 238);
    font-size: 30px;
    margin-left: 5px;
}

.post_avatarsidebar {
    margin-top: 35px;
    display: flex;
}

.post_avatarsidebar img {
    border-radius: 50px;
    width: 40px;
    height: 40px;
}

.post_headerspecialsidebar {
    font-weight: 400;
    font-size: 15px;
    color: gray;
    margin-bottom: 10px;
    display: flex;
}

.post_headerspecialsidebar h6 {
    font-weight: 700;
    font-size: 14px;
    color: black;
    margin-bottom: -5px;
}

.post_headerspecialsidebar p {
    font-weight: 400;
    font-size: 14px;
    color: gray;
}

.verified {
    color: rgb(51, 185, 238);
}

.post_avatarsidebar:hover {
    background-color: rgb(228, 224, 224);
    border-radius: 30px;
    color: rgb(32, 180, 238)
}
`

const Sidebar = (props) => {
    const { user, getUser } = useContext(UserContext)
    const [createTweetModalVisible, setCreateTweetModalVisible] = useState(false) 
   
    useEffect(()=> {
        getUser()
    },[])

    if (!user) {
    return <p>Loading...</p>
    }

    return (
        <Sidbar>
            <div className="sidebar">
                <div className="logo">
                    <BsTwitter/>
                </div>
                <br/>
    
                <Link to={'/home'} style={{"text-decoration": "none", "color":"black"}} ><SidebarOption Icon={<RiHome7Fill />} active text="Home"/></Link>

                <SidebarOption Icon={<FaHashtag />} text="Explore"/>

                <SidebarOption Icon={<AiOutlineBell />} text="Notifications"/>

                <SidebarOption Icon={<AiOutlineMail />} text="Messages"/>

                <SidebarOption Icon={<BsBookmark />} text="Bookmarks"/>

                <SidebarOption Icon={<RiFileList2Line />} text="Lists"/>

                <Link to={'/profil'} style={{"text-decoration": "none", "color":"black"}} ><SidebarOption  Icon={ <AiOutlineUser />} text="Profile" /></Link>

                <SidebarOption  Icon={<CgMoreO />} text="More"/>
                
                <div className="buttonfortweet">
                    <button onClick={() => setCreateTweetModalVisible(true)} className="btn btn-primary col-12 rounded-pill fw-bold text-white fs-6">
                    Tweet</button>
                    
                    <CreateTweetModal
                        isOpen={createTweetModalVisible}
                        onClose={() => setCreateTweetModalVisible(false)} 
                    />
                </div>

                <div className="post_avatarsidebar">
                    <span className="post_headerspecialsidebar">
                        <img src="https://ciyaaro.com/wp-content/uploads/2021/05/Chelsea-vs-Real-Madrid.jpg"/>
                        <h6>{user.firstName}{<p>@{user.firstName}{user.lastName}</p>}</h6>
                        {/* <h6>{user.firstName}</h6> */}
                        <div className="verified"><GoVerified/></div>
                    </span>
                </div>
            </div>
        </Sidbar>
    )
}

export default Sidebar;