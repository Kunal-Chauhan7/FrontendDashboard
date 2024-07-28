import './MainComponent.css';
import dashboardImage from '../assets/MainComponent.png';
import cardImage from '../assets/CardImage.png';
import addMoreImage from '../assets/Addmore.png'

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
            <img src={addMoreImage} alt="Add more" />
            <div className='AddmoreImageText'>
              <h1>+</h1>
            </div>
            <div className='AddmoreImageTextSpan'>
              <span>find More Courses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
