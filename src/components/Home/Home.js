import './Home.css'

export default  function Home() {
  return (
    <section id="home">
      <button id='user_profile'>User Profile</button>
        <div className="image">
            <img src="/portfolio.png" alt="Profile Image"/>
            <div className="intro">
                <h1 className="name">Nitheeshreddy Annapareddy</h1>
                <p className="tagline">AEM Developer & UI/UX Designer</p>
                <p className="bio">
                    Hi there! I'm a passionate digital creator at <strong>Bhasaka Technologies</strong>, blending design
                    thinking with technical expertise. With over 2 years of experience in Adobe Experience Manager and
                    UI/UX design, I specialize in building seamless, scalable, and visually engaging user experiences.
                </p>
            </div>
        </div>
    </section>
  )
}
