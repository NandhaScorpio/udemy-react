function Navbar()
{
    return (
        <div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>

        </div>

        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for anything here. Tech, Business, Art ..."/>

        </div>

        <div class="navbar__s3">
            <p>Courses</p>
            <div class="mylearning">
                <p>My Learning</p>
                <div class="mylearning__popup">
                    <p>You did not purchase anything yet</p>
                </div>
            </div>
            <i class="fa-solid fa-cart-shopping nav-i"></i>
            <i class="fa-solid fa-bell nav-i"></i>
            <i class="fa-solid fa-user nav-i" ></i>

        </div>

        <div class="navbar__s4" onclick="openNavbar()">
            <i class="fa-solid fa-bars"></i>
        </div>


    </div>
    )
}

export default Navbar