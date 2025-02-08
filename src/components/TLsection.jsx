import React, { useEffect } from 'react'
import '../css/tlSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TLsection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className='container__technical-lead color__Gold'>
        <div className='tl__title'>Value Added as Technical Lead</div>

        <div className='tl__df'>
          <div className='tl__border' data-aos="flip-right">
            <div className='tl__font'>Training: Aligned with vendor provided training materials (online).</div>
            <figure className='tl__img-crop'>
              <img className='tl__img' src="https://i.ytimg.com/vi_webp/Qe1hjT9kDlM/maxresdefault.webp" alt="" />
            </figure>
          </div>

          <div className='tl__border' data-aos='flip-left' >
            <div className='tl__font'>Training: Work Security Wiki into training. </div>
            <img className='tl__img' src="https://media.techtribune.net/uploads/2022/07/Atlassian-Confluence-Vulnerability.jpg" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-right' >
            <div className='tl__font'>Training: Instill a design and plan approach as casting the larger shadow. </div>
            <img className='tl__img' src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*VzpYyx4__TJTbtBzPVM0Tg.jpeg" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-left'>
            <div className='tl__font'>OJT, Consulting: Shadowing kickoff and discovery calls.</div>
            <img className='tl__img' src="https://images.www.talentlms.com/blog/wp-content/uploads/2023/05/TLMS_20230427_1200x628-1.png" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-right'>
            <div className='tl__font'>OJT, Technical: Build work plan or runbook for migration project.</div>
            <img className='tl__img' src="https://imageio.forbes.com/specials-images/imageserve/5f24217b624fa348727e593b/Coach-Drawing-American-Football-Playbook-Strategy/960x0.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default TLsection