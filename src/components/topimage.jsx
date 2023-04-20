import "../styles/topimage.css"
const Topimage = (props) => {
    let title1=props.data
    return ( 
                <div className="banner d-flex align-items-center justify-content-center">
                    <div className="Title">
                        <h1 className='text-light  fw-bolder text-align-center'>{title1}</h1>
                    </div>
                </div>

        // <div className="topimage align-items-center justify-content-center">


        //     {/* <img  src="/images/navimage.webp" alt="" /> */}

        // </div>
     );
}
 
export default Topimage ;