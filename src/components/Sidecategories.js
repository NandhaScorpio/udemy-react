function Sidecategories()
{
    return (
        <div>
            <div className="side-categories-popup">
                <p style={{textAlign:"right"}}>
                   <i class="fa-solid fa-xmark side-categories-popup-i" style={{color: "white"}}></i>
                </p>
                <div className="side-categories-links">
                    <p className="side-categories-link" style={{color : "orange"}}>Courses</p>
                    <p className="side-categories-link" style={{color : "orange"}}>My Learning</p>
                    <p class="side-categories-lin" style={{marginBottom: "30px"}}>------------</p>
                    <p class="side-categories-link"><a href="#">Development</a></p>
                    <p class="side-categories-link"><a href="#">Business</a></p>
                    <p class="side-categories-link"><a href="#">IT & Software</a></p>
                    <p class="side-categories-link"><a href="#">Personal Development</a></p>
                    <p class="side-categories-link"><a href="#">Design</a></p>
                    <p class="side-categories-link"><a href="#">Marketing</a></p>
                    <p class="side-categories-lin"><a href="#">------------</a></p>
                </div>
            </div>
        </div>
    )
}

export default Sidecategories