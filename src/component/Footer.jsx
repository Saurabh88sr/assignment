import React from 'react'
import linkdin from '../image/linkdin.svg'
import insta from '../image/insta.svg'
import tweet from '../image/tweet.svg'
import fb from '../image/fb.svg'


const Footer = () => {
  return (
    <>
    <div className="footer ">
        <div className="socialicon">
            <ul>
            <li><a className="nav-link" href="/linkdin"><img src={linkdin} alt="linkdin" /></a></li>
            <li><a className="nav-link" href="/insta"><img src={insta} alt="linkdin" /></a></li>
            <li><a className="nav-link" href="/tweet"><img src={tweet} alt="tweet" /></a></li>
            <li><a className="nav-link" href="/fb"><img src={fb} alt="fb" /></a></li>
            </ul>
        </div>
            <ul>
            <li><a className="nav-link" href="/linkdin">Contact us</a></li>
            <li><a className="nav-link" href="/linkdin">Privacy policy </a></li>
            <li><a className="nav-link" href="/linkdin">Terms of use</a></li>

            </ul>
            <ul>
            <li><a className="nav-link" href="/linkdin">Help center</a></li>
            <li><a className="nav-link" href="/linkdin">About us</a></li>
            <li><a className="nav-link" href="/linkdin">FAQs</a></li>

            </ul>
            <p className='m-4 text-white'>2023 Mentorbridge. All Rights Reserved.</p>

    </div>
    </>
  )
}

export default Footer
