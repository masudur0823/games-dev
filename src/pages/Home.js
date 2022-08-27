import bg1 from '../assets/images/bg1.png'
import bg2 from '../assets/images/bg2.png'
import bg3 from '../assets/images/bg3.png'
import Slider from '../component/Home/Slider'

import icon1 from '../assets/images/icons/footer-discord.svg'
import icon2 from '../assets/images/icons/footer-twitter.svg'
import icon3 from '../assets/images/icons/footer-tiktok.svg'
import icon4 from '../assets/images/icons/footer-youtube.svg'
import icon5 from '../assets/images/icons/footer-facebook.svg'

import manImg from '../assets/images/man.png'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

function Home() {
  return (
    <>
    <Header />
      {/* home section one start */}
      <section className='home_section1 py-5'>
        <div className="container">
          <div className="row text-white g-3">

            <div className="col-md-4 position-relative text-center">
              <img src={bg1} className="w-100" alt="" />
              <div className='home_section_overlay'>
                <h5>Total <br /> Group Members</h5>
                <p>89023</p>
              </div>
            </div>
            <div className="col-md-4 position-relative text-center">
              <img src={bg2} className="w-100" alt="" />
              <div className='home_section_overlay'>
                <h5>Total <br /> Concurrent Players</h5>
                <p>7624</p>
              </div>
            </div>
            <div className="col-md-4 position-relative text-center">
              <img src={bg3} className="w-100" alt="" />
              <div className='home_section_overlay'>
                <h5>Average Playtime <br /> or Total Visits</h5>
                <p>672</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* home section one end */}

      {/* home section two start */}
      <div className="section py-2 py-md-5">
        <div className="container">
          <h1 className='title_one text-center mb-3'>OUR Projects</h1>
          <Slider />
        </div>
      </div>

      {/* home section two end */}

      {/* home section three start */}
      <section className='home_sectionThree mb-5 text-white'>
        <div className="container">
          <div className="home_s3">
            <div className='position-relative home_sec3_child1'>
              <img src={manImg} className="manImg" alt="" />
            </div>
            <div className='home_sec3_child2'>
              <div>
                <h1>JOIN OUR COMMUNITY</h1>
                <div className='d-flex flex-wrap gap-2 gap-md-4 mt-2 mt-md-4'>
                  <a href="#!"><img src={icon1} alt="" /></a>
                  <a href="#!"><img src={icon2} alt="" /></a>
                  <a href="#!"><img src={icon3} alt="" /></a>
                  <a href="#!"><img src={icon4} alt="" /></a>
                  <a href="#!"><img src={icon5} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* home section three end */}

      {/* home section four start */}
      <section className='mb-5'>
        <div className="container">
          <h1 className='title_one text-center text-light-blue'>About us</h1>
          <p className='para_one text-center con-75'>
            CC Games was Founders in August 2018 by CrazyCorrs. CC Games was made to bring joy and fun gameplay to all Robloxains! <br /> <br />

            CrazyCorrs came out with his First Game in August 30th. The game was called "Zombie Killing Simulator" This game consisted of Killing Zombies and selling their blood which was used for Experiments by Dr Zues. <br /> <br />

            CrazyCorrs's First hit was Giant Dance Off Simulator which was released a 4 Months after ZKS on the 31st of January 2019. This game became a huge success very quickly gaining almost 15 Thousand concurrent players
          </p>
        </div>
      </section>
      {/* home section four end */}
      <Footer />
    </>
  )
}

export default Home