import "../styles/about.css"
import Topimage from "./topimage"

const About = () => {
    return (
         
        <div className="about">
             
            <div className="d1 d-flex pt-4">


                <img className="ms-5 me-5" height="680px" width="550px" src="https://preview.colorlib.com/theme/stories/images/about.jpg.webp" alt="" />

                <div className="content">
                    <h1 style={{width:"300px"}} className="mt-3 ms-5 mb-3 border-bottom border-dark fw-bold">About Stories</h1>
                    <h5 className="ms-5 mb-5">Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia</h5>



                    <div className="blocks ms-4"> 

                       
                       <div className="c1">
                            <h1>10</h1>
                            <h5>years of Experienced</h5>
                        </div>
                      

                        <div className="c1">
                            <h1>200</h1>
                            <h5>Foods</h5>
                        </div>

                        <div className="c1">
                            <h1>300</h1>
                            <h5>LifeStyle</h5>
                        </div>


                        <div className="c1">
                            <h1>40</h1>
                            <h5>Happy Coustomers</h5>
                        </div>

                    </div>


                </div>



            </div>



        </div>

    );
}

export default About;