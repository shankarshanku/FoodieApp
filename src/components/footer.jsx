import "../styles/footer.css"
const Footer = () => {
    return (
        <div className=" footer mt-5">
            <div>
                <div className=" d-flex justify-content-evenly px-0">

                    <div className="one">
                        <h2 class=" ">Stories</h2>
                        <p class="mb-5">Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there <br /> live the blind texts.</p>
                        <div>
                            <img class="me-2" src="https://cdn.icon-icons.com/icons2/1/PNG/96/social_Twitter_38.png" height="60px" width="60px" alt="" />
                            <img class="me-2" src="https://cdn.icon-icons.com/icons2/1/PNG/96/social_facebook_fb_35.png" height="60px" width="60px" alt="" />
                            <img class="" src="https://cdn.icon-icons.com/icons2/2428/PNG/96/instagram_black_logo_icon_147122.png" height="60px" width="60px" alt="" />
                        </div>
                    </div>
                    <div className="two">
                        <h2>Information</h2>
                        <p>Terms of Uses</p>
                        <p>About Stories</p>
                        <p>Accessibility Help</p>
                        <p>Advertise with us</p>
                    </div>
                    <div className="third">
                        <h2>Categories</h2>
                        <p>Food</p>
                        <p>Restaurant</p>
                        <p>dessert</p>
                        <p>Life Style</p>
                        <p>Recipies</p>
                    </div>
                    <div className="fourth">
                        <h2>Have a Question ?</h2>
                        <div class="d-flex">
                            <img class="me-2" src="https://cdn.icon-icons.com/icons2/510/PNG/96/location_icon-icons.com_50109.png" height="35px" width="35px" alt="" />
                            <p>	203 Fake St. Mountain View, <br />'' San Francisco, California, <br /> USA</p>
                        </div>
                        <div class="d-flex">
                            <img class="me-2" src="https://cdn.icon-icons.com/icons2/1239/PNG/96/phonecall2_83997.png" height="25px" width="25px" alt="" />
                            <p>+91 9036168958</p>
                        </div>
                        <div class="d-flex">
                            <img class="me-2" src="https://cdn.icon-icons.com/icons2/809/PNG/96/envelope_mail_icon-icons.com_66119.png" height="30px" width="30px" alt="" />
                            <p>Shankarks311@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fifth pt-4">
                <h6>Copyright ©2023 All rights reserved | This template is made with 🤍 by Colorlib</h6>
            </div>
        </div>
    );
}

export default Footer;