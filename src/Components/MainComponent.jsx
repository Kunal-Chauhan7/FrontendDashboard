import './MainComponent.css';
import dashboardImage from '../assets/MainComponent.png'
const MainComponent = () => {
  return (
    <div className='Container'>
      <h2>My Dashboard</h2>
      <div className='WelcomeBanner'>
        <div className='WelcomeBannerInner'>
          <h2>Welcome Back ,</h2>
          <h1>Annabeth Chase</h1>
          <div className='spanDiv'>
            <span>You've learned 78% of your goal this week. <br /> Continue learning and improve your progress</span>
          </div>
        </div>
        <img src={dashboardImage} alt=""/>
      </div>
      <div>
        <h2>Your Courses</h2>
        <div className='CardContainer'>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainComponent