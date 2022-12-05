import React from 'react'
import './Box.css'
import planeIcon from './plane.png'
import listIcon from './list.png'
import calIcon from './cal.png'


const Box = () => {
    return (
        <div className='box'>

            <div className='box-item1'>
                <div className='box-title1'> ● Total Plan</div>
                <div className='box-content'>
                    <div className='box-icon'>
                        <img src={planeIcon} alt="Plane Icon" />
                    </div>
                    <div className='box-right-details'>
                        <div className='box-right-details-number'>1502</div>
                        <div className='box-right-details-text'>All Assign Task</div>
                    </div>
                </div>
            </div>



            <div className='box-item2'>
                <div className='box-title2'> ● Complete Plan</div>
                <div className='box-content'>
                    <div className='box-icon'>
                        <img src={listIcon} alt="List Icon" />
                    </div>
                    <div className='box-right-details'>
                        <div className='box-right-details-number'>302</div>
                        <div className='box-right-details-text'>Task Finished</div>
                    </div>
                </div>
            </div>

            <div className='box-item3'>
                <div className='box-title3'> ● Total Plan</div>
                <div className='box-content'>
                    <div className='box-icon'>
                        <img src={listIcon} alt="List Icon" />
                    </div>
                    <div className='box-right-details'>
                        <div className='box-right-details-number'>502</div>
                        <div className='box-right-details-text'>Ending Today</div>
                    </div>
                </div>
            </div>

            <div className='box-item4'>
                <div className='box-title4'> ● Total Plan</div>
                <div className='box-content'>
                    <div className='box-icon'>
                        <img src={calIcon} alt="Calender Icon" />
                    </div>
                    <div className='box-right-details'>
                        <div className='box-right-details-number'>102</div>
                        <div className='box-right-details-text'>Delayed Task</div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Box

