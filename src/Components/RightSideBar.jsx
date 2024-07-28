import { useState } from 'react';
import Calendar from 'react-calendar';
import { CiBellOn } from 'react-icons/ci';
import profilepic from '../assets/image.png';
import './RightSideBar.css';
import './CalendarStyles.css';
import penIcon from '../assets/penIcon.png';

const RightSideBar = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div>
      <div className='topProfileContainer'>
        <CiBellOn size={30} />
        <div className='profileInfo'>
          <img src={profilepic} alt="" />
          <h4>@chase.anna25@gmail.com</h4>
        </div>
      </div>
      <div>
        <Calendar onChange={setValue} value={value} />
      </div>
      <div className='schedule'>
        <h2>Schedule</h2>
        <h6>View All</h6>
      </div>
      <div>
        <ul className='scheduleList'>
          <li className='scheduleListItem'>
            <div className='scheduleItemContainer'>
              <div className='scheduleItem'>
                <img src={penIcon} alt="" />
                <h3>UI/UX Designing</h3>
              </div>
              <div className='scheduleName'>
                <h6>6:30 - 8:00</h6>
                <h6>|</h6>
                <h6>Kevin LongHart</h6>
              </div>
            </div>
          </li>
          <li className='scheduleListItem'>
            <div className='scheduleItemContainer'>
              <div className='scheduleItem'>
                <img src={penIcon} alt="" />
                <h3>UI/UX Designing</h3>
              </div>
              <div className='scheduleName'>
                <h6>6:30 - 8:00</h6>
                <h6>|</h6>
                <h6>Kevin LongHart</h6>
              </div>
            </div>
          </li>
          <li className='scheduleListItem'>
            <div className='scheduleItemContainer'>
              <div className='scheduleItem'>
                <img src={penIcon} alt="" />
                <h3>UI/UX Designing</h3>
              </div>
              <div className='scheduleName'>
                <h6>6:30 - 8:00</h6>
                <h6>|</h6>
                <h6>Kevin LongHart</h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightSideBar;
