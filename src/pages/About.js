import React from 'react'
import Banner from '../component/Banner'
import ProjectSlider from '../component/ProjectSlider'

function About() {
  return (
    <>
      <div className="container">
        <Banner title="About Us" />
        <p className='para_one text-center con-75 mb-5'>
          CC Games was Founders in August 2018 by CrazyCorrs. CC Games was made to bring joy and fun gameplay to all Robloxains! <br /> <br />

          CrazyCorrs came out with his First Game in August 30th. The game was called "Zombie Killing Simulator" This game consisted of Killing Zombies and selling their blood which was used for Experiments by Dr Zues. <br /> <br />

          CrazyCorrs's First hit was Giant Dance Off Simulator which was released a 4 Months after ZKS on the 31st of January 2019. This game became a huge success very quickly gaining almost 15 Thousand concurrent players
        </p>
      </div>

      <div className="container">
        <hr className='hr_line' />
      </div>

      <div className="contaier py-5">
        <h1 className='title_one text-center mb-3 mb-md-5'>OUR Projects</h1>
        <ProjectSlider />
      </div>
    </>
  )
}

export default About