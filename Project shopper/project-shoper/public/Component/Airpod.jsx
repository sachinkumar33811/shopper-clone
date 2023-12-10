const Airpod = () => {
  return (
    <div className="fullair">
      <div className="navbar3">
        <div className="leftpic">
          <img className="png1" src="../public/Images/image 17.png" alt="" />
          <img className="png2" src="../public/Images/image 18.png" alt="" />
        </div>
        <div className="opd">
          <p id="anc">Airpod 500 Anc</p>
          <p id="dolor">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            mollitia doloribus provident similique asperiores
          </p>
          <p id="rupes">Price: $45.99</p>

          <div className="kart">
            <button id="button3">Add to cart </button>
            <p id="exp">Explor more</p>
          </div>
        </div>
      </div>
      <div className="endfooter">
        <div className="endfooter1">
          <p id="ef1">Ready to get started?</p>

          <button id="button4">Get started </button>
        </div>
        <br />
        <br />
        <hr />
        <div className="endfooter2">
          <div className="edleft">
            <p id="edleft1">
              Subscribe to our <br /> Website
            </p>
            <form action="">
              <input id="formtwo" type="search" placeholder="Email adress !" />
            </form>
            <hr />
          </div>
          <div className="edright">
            <ul id="xyz">
              <li id="xyz1">Services</li>
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
            <ul id="xyz">
              <li id="xyz1">About</li>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
            <ul id="xyz">
              <li id="xyz1">Help</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="endfooter3">
          <ul id="pqr">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
           
          </ul>
          <img  src="public/Images/photo_2023-12-09_15-14-17.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Airpod;
