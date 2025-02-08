import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faBlackTie } from '@fortawesome/free-brands-svg-icons'

const CVthen = () => {
    return (
        <div className="wrapper__job-then">
            <div className="wrapper__mech-eng-cv-info">
                <div className='df__margin-bottom'>
                    <div><FontAwesomeIcon icon={faGraduationCap}/> 2009: University of Minnesota, Bacholor of Engineer: Mechanical Engineering</div>
                    <div><FontAwesomeIcon icon={faGraduationCap} className='job__font-size'/> 2012: Union Graduate College, Master of Science: Mechanical Engineering</div>
                </div>
                <div>
                    <div><FontAwesomeIcon icon={faBlackTie} className='job__font-size'/> 2017 -- 2018: General Atomics, Mechanical Engineer III (contractor)</div>
                    <div><FontAwesomeIcon icon={faBlackTie} className='job__font-size'/> 2014 -- 2017: Naval Nuclear Laboratory, Advanced Mechanical Engineer</div>
                    <div><FontAwesomeIcon icon={faBlackTie} className='job__font-size'/> 2012 -- 2014: Naval Nuclear Laboratory, Intermediate Mechanical Engineer</div>
                    <div><FontAwesomeIcon icon={faBlackTie} className='job__font-size'/> 2010 -- 2012: Naval Nuclear Laboratory, Associate Mechanical Engineer</div>
                </div>
            </div>
            <figure><img className='cv__img' src="https://i.postimg.cc/d1pJ5NWB/coins.png" alt="" /></figure>
        </div>
    )
}

export default CVthen