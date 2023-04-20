import "../styles/addpost.css"
import Topimage from './components/topimage';

const Addpost = () => {
    return (
        <div className="addpost">
            <Topimage/> 
            <section class="d-flex  pt-5">
                <div class="px-5 mx-3">
                    <img src="/images/leftpic.png" alt="" />
                </div>
                <div className="" class="pb-2 mb-5 mx-5">
                    <div>
                        <h1 style={{width:"240px"}} class="fw-bold border-bottom border-dark border-3 pb-2">ADD POST</h1>
                    </div>
                    <div className="formss mb-4 pe-5">
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Author</label>
                        <input type="text" class="form-control  mb-3" placeholder="Author"></input>
                    </div>
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input type="text" class="form-control mb-3" placeholder="title of the post"></input>
                    </div>
                    <div>
                        <label for="exampleFormControlTextarea1" class="form-label">Summary</label>
                        <textarea class="form-control mb-3" id="exampleFormControlTextarea1" placeholder="Summary of the post" rows="3"></textarea>
                    </div>
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Image</label>
                        <input type="text" class="form-control mb-3" placeholder="image of the post"></input>
                    </div>
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Location</label>
                        <input type="text" class="form-control mb-3" placeholder="Location of the post"></input>
                    </div>
                    </div>
                    <br />
                    <br />
                    <button class="btn bg-danger text-light ">Submit Post</button>
                </div>
            </section>
        </div>
    );
}

export default Addpost;