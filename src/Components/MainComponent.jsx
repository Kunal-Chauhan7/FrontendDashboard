import './MainComponent.css';
import dashboardImage from '../assets/MainComponent.png';
import cardImage from '../assets/CardImage.png';
import {Bar} from 'react-chartjs-2'
import BarChart from './BarChart';

const MainComponent = () => {
  return (
    <div className='Container'>
      <h2>My Dashboard</h2>
      <div className='WelcomeBanner'>
        <div className='WelcomeBannerInner'>
          <h2>Welcome Back,</h2>
          <h1>Annabeth Chase</h1>
          <div className='spanDiv'>
            <span>You've learned 78% of your goal this week.<br />Continue learning and improve your progress</span>
          </div>
        </div>
        <img src={dashboardImage} alt="Dashboard" />
      </div>
      <div>
        <h2>Your Courses</h2>
        <div className='CardContainer'>
          <div className="cardBorder">
            <div className='Card'>
              <img src={cardImage} alt="Course" />
              <div className='cardTitle'>
                <span>Complete JavaScript Course for Beginners</span>
              </div>
              <div className='Progress'>
                <progress id="progress-bar" value="35" max="100"></progress>
                <div className='ValueOfProgress'>
                  <span>Completed 35%</span>
                  <span> Days 12/92</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cardBorder">
            <div className='Card'>
              <img src={cardImage} alt="Course" />
              <div className='cardTitle'>
                <span>Complete JavaScript Course for Beginners</span>
              </div>
              <div className='Progress'>
                <progress id="progress-bar" value="35" max="100"></progress>
                <div className='ValueOfProgress'>
                  <span>Completed 35%</span>
                  <span> Days 12/92</span>
                </div>
              </div>
            </div>
          </div>
          <div className='AddmoreImageContainer'>
            <div className='FindMoreCoursesContainer'>
              <div className='displayCourse'>
                <p id='PlusIcon'>+</p>
                <p id='FindMoreCoueses'>Find more <br /> Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='statics'>
        <div className='BarGraphContainer'>
        <div className='barGraph'>
          <div className='HourSpend'>
            <h2>Hours Spent</h2>
            <p>View All</p>
          </div>
            <p>12 h 32 min</p>
            <div className='barChart'>
              <BarChart/>
            </div>
        </div>
        </div>
        <div className='PieGraphContainer'>
          <div className='titleOfProgress'>
            <h2>Your Progress</h2>
          <div className='PieGraph'>
            <div className='PieGraphvalue'>
              <h4>78</h4>
              <span>%</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
