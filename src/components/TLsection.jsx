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
        <div className='tl__title'>Short Terms (90-days) </div>

        <div className='tl__df'>
          <div className='tl__border' data-aos="flip-right">
            <div className='tl__font'>Mentor & Leader: Identifies IC needs and hurdles.</div>
            <figure className='tl__img-crop'>
              <img className='tl__img' src="https://wiki.gccollab.ca/images/e/e9/Get_to_Know_Your_Team.png" alt="" />
            </figure>
          </div>

          <div className='tl__border' data-aos='flip-left' >
            <div className='tl__font'>Mentor & Leader: Build out KB in Security Wiki for simple migration billables. </div>
            <img className='tl__img' src="https://media.techtribune.net/uploads/2022/07/Atlassian-Confluence-Vulnerability.jpg" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-right'>
            <div className='tl__font'>Mentor & Leader: How to build playbook for migration project.</div>
            <img className='tl__img' src="https://imageio.forbes.com/specials-images/imageserve/5f24217b624fa348727e593b/Coach-Drawing-American-Football-Playbook-Strategy/960x0.jpg" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-right' >
            <div className='tl__font'>Mentor & Leader: Be escalation support to encourage taking on billables. </div>
            <img className='tl__img' src="https://stonly.com/blog/content/images/2020/06/Escalation---Header.jpg" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-left' >
            <div className='tl__font'>Business Development: Better grasp of vendor's offerings vs market's needs. </div>
            <img className='tl__img' src="https://customerthink.com/wp-content/uploads/Align-Your-Brand-with-Customer-Needs.png" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-right' >
            <div className='tl__font'>Personal Development: Complete Zscaler Data Protection specialization. </div>
            <img className='tl__img' src="https://cc.sj-cdn.net/instructor/2ot89qyy7b2f8-zscaler/courses/2gygonty3cmwk/promo-image.1724704637.png" alt="" />
          </div>

          <div className='tl__title'>Long Terms (6-months) </div>

          <div className='tl__border' data-aos="flip-right">
            <div className='tl__font'>Mentor & Leader: Complete needs and clear hurdles.</div>
            <figure className='tl__img-crop'>
              <img className='tl__img' src="https://wiki.gccollab.ca/images/e/e9/Get_to_Know_Your_Team.png" alt="" />
            </figure>
          </div>

          <div className='tl__border' data-aos="flip-left">
            <div className='tl__font'>Mentor & Leader: Aligned with vendor provided training materials (online).</div>
            <figure className='tl__img-crop'>
              <img className='tl__img' src="https://i.ytimg.com/vi_webp/Qe1hjT9kDlM/maxresdefault.webp" alt="" />
            </figure>
          </div>

          <div className='tl__border' data-aos='flip-right' >
            <div className='tl__font'>Mentor & Leader: Instill a design approach casts a larger shadow than any subsequent processes. </div>
            <img className='tl__img' src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*VzpYyx4__TJTbtBzPVM0Tg.jpeg" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-left'>
            <div className='tl__font'>Mentor & Leader: Shadowing discovery and design.</div>
            <img className='tl__img' src="https://images.www.talentlms.com/blog/wp-content/uploads/2023/05/TLMS_20230427_1200x628-1.png" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-right' >
            <div className='tl__font'>Mentor & Leader: Provide peer review of design and playbook. </div>
            <img className='tl__img' src="https://miro.medium.com/v2/resize:fit:1200/format:webp/0*IeEtygoHGsLE9suk.jpg" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-left' >
            <div className='tl__font'>Mentor & Leader: Share my approach to load management. </div>
            <img className='tl__img' src="https://resourceguruapp.com/blog/wp-content/uploads/2023/02/Workload-planning.jpg" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-right' >
            <div className='tl__font'>Business Development: Health Check template for network firewalls. </div>
            <img className='tl__img' src="https://www.itsbalto.com/it/posts/cis-benchmark-best-practices-for-securing-and-hardening-it-infrastructure/img/CIS-Benchmark-Head.png" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-left' >
            <div className='tl__font'>Business Deveopment: Work with co-pilot team to access collective knowwledge. </div>
            <img className='tl__img' src="https://i0.wp.com/techit-services.com/wp-content/uploads/2024/01/Copilot.jpg" alt="" />
          </div>

          <div className='tl__border' data-aos='flip-right' >
            <div className='tl__font'>Personal Development: Zscaler Specialist and other certs as needed. </div>
            <img className='tl__img' src="https://img.securityinfowatch.com/files/base/cygnus/siw/image/2016/12/bigstock_Authenticity_Certificate_115934999.58596eedbff4a.png" alt="" />
          </div>

          <div className='tl__footer' >
          </div>

        </div>
      </section>
    </>
  )
}

export default TLsection