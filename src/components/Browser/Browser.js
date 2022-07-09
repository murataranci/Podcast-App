import React from 'react'
import { useNavigate} from "react-router-dom";
import './Browser.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsPlay } from 'react-icons/bs'


const Browser = () => {
  const navigate = useNavigate();
  return (
    <div className='browserbackground'>
      <div>
        <div className='titleImage'></div>
        <h1 className='title-text'>Browse</h1>
      </div>
     <form>
      <div className='form-groupp'>
        <input type="text" name='search' placeholder='Search'></input>
        <AiOutlineSearch className='search-icon'/>
      </div>
     </form>
      <div className='tabs'></div>
      <div className='podcast-list'>
        <p className='browser-text'>Podcast (2)</p>
        <div className='podcastAll'>
        <div className='podcast-single'>
             <p className='single-title'>Tincidunt facilisis fermentum nec sed</p>
             <div className='podcast-detail'></div>
             <button className='playButton' onClick={() => {navigate("/podcast")}}><BsPlay className='play-icon'/></button>
        </div>
        <div className='podcast-single2'>
             <p className='single-title'>Nulla leo dictum pharetra ultricies</p>
             <div className='podcast-detail2'></div>
             <button className='playButton' onClick={() => {navigate("/podcast")}}><BsPlay className='play-icon'/></button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Browser