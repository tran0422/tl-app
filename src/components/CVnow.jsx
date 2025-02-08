import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faBlackTie } from '@fortawesome/free-brands-svg-icons'


const CVnow = () => {
    return (
        <div className="wrapper__job">
            <div className='df__width'>
                <div className='df__margin-bottom job__font-size'><FontAwesomeIcon icon={faGraduationCap} className='wrapper__icon'/> 2022: University of San Diego, Master of Science: Cybersecurity Engineering</div>
                <div className='df__margin-bottom'>
                    <div className='job__font-size'><FontAwesomeIcon icon={faBlackTie} className='wrapper__icon'/> 2022 -- Now: CDW, Consulting Engineer</div>
                    <div className='job__font-size'><FontAwesomeIcon icon={faBlackTie} className='wrapper__icon'/> 2020 -- 2022: CDW, Associate Consulting Engineer</div>
                </div>
                <div className='df__margin-bottom job__font-size'>Highlights</div>
                <ul className='df__list'>
                    <li>Breathe across products: Zscaler, Palo Alto Networks Firewalls, Prisma Access, Cisco FTD, Cisco ASA, Azure, Fortigate, Wiz Security.</li>
                    <li>Depth across products: Palo Alto Networks Firewalls, Prisma Access, Globalprotect, Cisco FTD, Anyconnect.</li>
                    <li>Assisted peers and Associates with technial and non-technical questions.</li>
                    <li>Provided guidance and mentorship to interns and Associates.</li>
                </ul>
            </div>
            <div className="wrapper__certs">
                <figure><img className='badge-size' src="https://images.credly.com/images/446e08ae-bbb5-4648-b85d-24b9a939eb8d/CompTIA_Security_2B.png" alt="" /></figure>
                <figure><img className='badge-size' src="https://images.credly.com/images/cd769843-4907-4d1a-9702-0512eb87ae6e/cisco_ccnp_security.png" alt="" /></figure>
                <figure><img className='badge-size' src="https://images.credly.com/images/e27cc736-49eb-43c1-b179-536c02e93c09/image.png" alt="" /></figure>
                <figure><img className='badge-size' src="https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F8oqfpozopokgdg163fiybf4nh%2Fpublic%2F1714151463%2FZscaler-for-Users-Delivery-Specialist-v2.1714151461405.png" alt="" /></figure>
                <figure><img className='badge-size' src="https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png" alt="" /></figure>
            </div>
        </div>
    )
}

export default CVnow