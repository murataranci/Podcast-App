import React from 'react'
import { useNavigate} from "react-router-dom";
import './Podcast.css'
import { BsArrowLeftShort,BsSoundwave,BsThreeDotsVertical } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { GrRotateLeft,GrRotateRight } from 'react-icons/gr'
import { AiOutlinePause,AiOutlineLike,AiOutlineDislike,AiOutlineDownload } from 'react-icons/ai'
import { useSelector } from 'react-redux'




const Podcast = () => {
  // const token = useSelector(state => state.user.token)
  const navigate = useNavigate();
  return (
    <div className='podcast_detail'>
       <div className='podcast_image'>
        <BsArrowLeftShort className='back-icon' onClick={() => {navigate("/browser")}}/>
        <FiMenu className='podcast_menu'/>
        <p className='podcast_title'>About flow and our motivations</p>
        <p className='podcast_desc'>John Doe & Amanda Smith</p>
        <div className='author1'></div>
        <div className='author2'></div>
        <GrRotateLeft className='rotateleft-icon'/>
        <GrRotateRight className='rotateright-icon'/>
        <div className='stop-button'><AiOutlinePause className='pause-icon'/></div>
       </div>
       <div className='podcastplay-detail'>
        <div className='blue_line'></div>
        <div className='white_line'></div>
        <div className='line_circle'></div>
        <AiOutlineLike className='like_icon'/>
        <AiOutlineDislike className='unlike_icon'/>
        <text className='unlike_text'>37 501</text>
        <text className='like_text'>37 501</text>
        <text className='podcast_time'>24:15:05</text>
        <div className='separator'></div>
        <BsSoundwave className='sound_icon'/>
        <text className='sound_text'>Episode 2</text>
        <AiOutlineDownload className='download_icon'/>
        <text className='download_text'>50mb</text>
        <BsThreeDotsVertical className='vertical_icon'/>
        <p className='podcast_statement'>
          The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p>
       </div>
    </div>
  )
}

export default Podcast