import "../styles/home.css"
const Home = () => {
    return (
        <div className="home">
            <section className="navbar" class=" d-flex justify-content-between">
                <div className="titles p-3 ms-5 ps-5 ">
                    <h1 style={{ fontFamily: "Poppins", fontWeight: "bolder" }}>Foodie</h1>
                </div>
                <div class=" d-flex p-4 pe-5 me-5">
                    <p><a class="pe-4 link-dark text-decoration-none fw-semibold  " href="">Home</a></p>
                    <p><a class="pe-4 link-dark text-decoration-none fw-semibold  " href="">About</a></p>
                    <p><a class="pe-4 link-dark text-decoration-none fw-semibold " href="">Foods</a></p>
                    <p><a class="pe-4 link-dark text-decoration-none fw-semibold  " href="">Lifestyle</a></p>
                    <p><a class="pe-4 link-dark text-decoration-none fw-semibold  " href="">Contact</a></p>
                </div>
            </section>
            <section class=" mb-5 pb-5">
                <div class=" d-flex">
                    <div className="imag" class="ms-5 ps-5">
                        <img style={{ height: "700px" }} src="/images/foodpic1.png" alt="" />
                    </div>
                    <div>
                        <div style={{ height: "620px" }} className="post" class="bg-warning ps-5 pe-5">
                            <p class="pt-5 fw-light">FEATURED POSTS</p>
                            <h1 style={{ fontWeight: 900, fontFamily: "Poppins", fontSize: "55px" }}> I am a <br /> Blogger & I <br /> <span class="border-bottom border-dark pb-2 fw-bolder">Love Foods</span> </h1>
                            <p class="pt-5 fw-light fs-5 pb-5" >A small river named Duden flows <br /> by their place and supplies it with <br /> the necessary regelialia</p>
                            <button class="btn bg-dark text-light rounded-1 btn-lg ">Read More  →</button>
                        </div>
                        <button class="btn-outline-secondary " style={{ height: "80px", width: "210px" }}>← FORWARD</button>
                        <button style={{ height: "80px", width: "210px" }}>NEXT →</button>
                    </div>
                </div>
            </section>
            <h2 class="pb-5 ms-5 ps-5" style={{ fontFamily: "Poppins", fontWeight: "bolder" }}>Recent Stories</h2>
            <div class="d-flex justify-content-around">
                <div class="">
                    <div class="d-flex">
                        <div>
                            <img class="pb-4 me-5 ms-5" style={{ height: "180px", width: "280px" }} src="/images/smallfood4.png" alt="" />
                            <p class="ms-5 fw-light">Dessert ----- March 01,2023  </p>
                            <h4 class="mb-3 me-5 ms-5" style={{ fontfamily: "Playfair Display ", fontFamily: "serif", fontWeight: 500 }}>Tasty and delicious foods</h4>
                            <button class="btn bg-white text-danger text-decoration-none pb-4 mb-5 ms-5 fw-bold">Read More →</button>
                        </div>
                        <div>
                            <img class="pb-4" style={{ height: "180px", width: "280px" }} src="/images/smallfood3.png" alt="" />
                            <p class=" fw-light">Dessert ----- March 01,2023  </p>
                            <h4 class="mb-3" style={{ fontfamily: "Playfair Display ", fontFamily: "serif", fontWeight: 500 }}>Tasty and delicious foods</h4>
                            <button class="btn bg-white text-danger text-decoration-none pb-4 fw-bold">Read More →</button>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div>
                            <img class="pb-4 me-5 ms-5" style={{ height: "180px", width: "280px" }} src="/images/smallfood2.png" alt="" />
                            <p class="ms-5 fw-light">Dessert ----- March 01,2023  </p>
                            <h4 class="mb-3 me-5 ms-5" style={{ fontfamily: "Playfair Display ", fontFamily: "serif", fontWeight: 500 }}>Tasty and delicious foods</h4>
                            <button class="btn bg-white text-danger text-decoration-none pb-4 mb-5 ms-5 fw-bold">Read More →</button>
                        </div>
                        <div>
                            <img class="pb-4" style={{ height: "180px", width: "280px" }} src="/images/smallfood1.png" alt="" />
                            <p class=" fw-light">Dessert ----- March 01,2023  </p>
                            <h4 class="mb-3" style={{ fontfamily: "Playfair Display ", fontFamily: "serif", fontWeight: 500 }}>Tasty and delicious foods</h4>
                            <button class="btn bg-white text-danger text-decoration-none pb-4 fw-bold">Read More →</button>
                        </div>
                    </div>
                </div>
                <div  class="me-5 ps-0">
                    <div className="sidepic">
                    <h5 style={{paddingTop:"460px" ,paddingLeft:"40px", color:"yellow"}} class=" fw-bolder">Food</h5>
                    <h1 style={{paddingTop:"0px" ,paddingLeft:"40px",fontFamily :"Playfair Display",fontfamily:"serif"}} class="text-light fw-bolder">tasty and Delicious Food</h1>
                    <button style={{marginTop:"63px" ,marginLeft:"425px", height:"70px" , width:"175px",textDecoration:"none", borderRadius:"0px", backgroundColor:"white"}} class="btn bg-light ">Read More →</button>
                    </div>
                    {/* <img style={{ height: "680px", width: "600px" }} src="/images/image2.jpg.webp" alt="" /> */}
                </div>
            </div>
            <section>

            </section>
        </div>
    );
}

export default Home;