const Navigation = () => {
  return (
    <div className="div">
      <div className="navbar">
        <img className="logo" src="../public/Images/logo.jpg" alt="" />

        <form action="">
          <input id="formone" type="search" placeholder="Search here !" />
        </form>
        <button id="buttonone">0 Items Added</button>
        <button id="buttontwo">Login or Sign Up</button>
      </div>
      <div className="navbartwo">
        <ul>
          <li>Features</li>
          <li>Products</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </div>
      <div className="abc">
        <div className="def">
          <p id="disc">Discover Our Latest Products</p>
          <p id="lorem">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Hic,
            impedit nostrum. Nisi blanditiis obcaecati
          </p>
          <button id="buttonthree">Buy Now</button><br />
          <div className="multi"><img src="../public/Images/Ellipse 7.png" alt="" />
          <img src="../public/Images/Ellipse 9.png" alt="" />
          <img src="../public/Images/Ellipse 11.png" alt="" />
          <img src="../public/Images/Ellipse 13.png" alt="" />15k Well Reviews</div>
        </div>
        <div className="ghi">
        <img className="pic" src="../public/Images/photo.jpg" alt="" /><br />
        <div className="head"><img className="pic1" src="../public/Images/image 6.png" alt="" /></div>
         
          
        </div>
      </div>
    </div>
  );
};

export default Navigation;
