import './Home.css'
import AboutMe from './AboutMe/AboutMe'
import FeaturedWorks from './FeaturedWorks/FeaturedWorks'
import RecentPosts from './RecentPosts/RecentPosts'

function Home() {
  return (
    <div className="Home">
      <AboutMe />
      <FeaturedWorks />
      <RecentPosts />
    </div>
  )
}

export default Home
