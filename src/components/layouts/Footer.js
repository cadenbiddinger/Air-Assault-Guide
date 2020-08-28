import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
            <h4 style= {{ color: "#ffcc01"}}>Contact School</h4>
              <ul className="list-unstyled">
                <li>6883 Air Assualt St.</li>
                <li>Fort Campbell, KY 42223</li>
                <li>Email: usarmy.campbell.101-abn-div.mbx.air-assault-school@mail.mil</li>
                <li>Phone: (270) 798-4410</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4 style= {{ color: "#ffcc01"}}>Community and Events</h4>
              <ul className="list-unstyled">
                <li><a href="/https://www.goarmy.com/events.html">Army Events</a></li>
                <li><a href="/https://www.goarmy.com/parents.html">Parents and Family</a></li>
                <li><a href="/https://www.goarmy.com/advocates.html">Army Advocates</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4 style= {{ color: "#ffcc01"}}>Utilities</h4>
              <ul className="list-unstyled">
                <li><a href="/https://www.goarmy.com/downloads.html">Downloads</a></li>
                <li><a href="/https://www.goarmy.com/careers-and-jobs/help-choosing-a-career-job/army-career-explorer.html">Army Career Explorer</a></li>
                <li><a href="/https://www.goarmy.com/videos.html">Army Videos</a></li>
              </ul>
            </div>
            </div>
            {/* Footer Bottom */}
              <div className="footer-bottom">
                <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Air Assualt Guide App - All Rights Reserved
                </p>
          </div>
        </div>
    </div>
  </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainWhite);
  }

  ul li a:hover {
    color: var(--mainYellow)
  }

  p {
    color: #6c757d
  }
`;


// notes

// in class name the className="list-unstyled" will take all the styling off the list items

// bootstrap grid system allows up to 12 column across the page. Bootstrap grid system has 4 classes xs,sm,md,lg and is used for different screen sizes.

// to install styled components in the project run the command npm install --save styled-components in terminal

// 1 rem is = to 16px

// &copy;{new Date().getFullYear()} give you the copyright symbol as well as the current year.