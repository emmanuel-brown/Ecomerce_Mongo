import React from 'react'
// import TheMoment from './images/beInTheMoment.jpg'
// import TheNew from './images/theNew.jpg'
import Oculus from './images/oculus.jpg'
import './home.scss'


const Home = () =>{
    return( //Turn the hero into a video background
        <div id="home">

            <header className="hero">
            <iframe id="video" src="https://www.youtube.com/embed/SEEEaoyE29A?autoplay=1&playsinline=1&loop=1&modestbranding=0&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&theme=light&fs=0&color=white&autohide=0&controls=0&disablekb=1" width="560" height="315" frameborder="0"></iframe>
            </header>
            
            <span className="divider"></span>
            
            <section id="description" className="text-center">
                <h2 id="Welcome">Welcome to Future Fancy</h2>
                <p id="sumUp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quidem alias rerum iste sit, accusamus animi optio magnam, 
                    expedita mollitia ipsam, laboriosam praesentium sapiente eum reiciendis! Voluptas non temporibus totam?Veniam possimus rem 
                    quo amet corrupti modi ipsum laborum blanditiis facilis suscipit incidunt veritatis accusamus sequi nemo vero, consectetur 
                    sed harum natus doloremque neque, eius animi voluptatem. Excepturi, culpa eveniet.</p>
            </section>

            <span className="divider"></span>

            <section id="content">
                <div id="hoverBoard" className="box">
                    <div id="hoverBoard-Img" className="viewer"></div>
                    <div className="backend">
                    <h3>HoverBoard</h3>
                    <p>
                        Be the first get get a hold
                        of this furturistic technology.
                        Imagine floating beaming into the eyes those
                        four wheeled gravity limited contraption.
                    </p>
                    </div>
                </div>
                <div className="extra">
                    <h3>Just</h3>
                </div>
                <div className="extra">
                    <h3>TOO</h3>
                </div>
                <div id="LexusBoard" className="box">
                    <div id="LexusBoard-Img" className="viewer"></div>
                    <div className="backend">
                    <h3>Lexus Hover Board</h3>
                    <p>
                        Take your summer to the next
                        level with to premium hover board.
                        Show off to your friends that your
                        an air surfer.
                    </p>
                    </div>
                </div>
                <div className="extra"></div>
                <div className="extra"></div>
                <div id="contactLenses" className="box">
                    <div id="contactLenses-img" className="viewer"></div>
                    <div className="backend">
                        <h3>Contacts 2.0</h3>
                        <p>
                            Regular contacts these days are just too simple.
                            Be the first to get the power of your phone in a 
                            more visual persective.
                        </p>
                    </div>
                </div>
                <div className="extra">
                    <h3>FANCY</h3>
                </div>
            </section>
        </div>
    )
}

export default Home