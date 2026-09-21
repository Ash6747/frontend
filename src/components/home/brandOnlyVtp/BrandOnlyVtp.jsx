import { Link } from 'react-router-dom'
import './brandOnlyVtp.css'
const BrandOnlyVtp = () => {
  return (
    <section id="brand_onlyvtp" className="">
            <div className="brand_img_container">
                  <Link to="https://vtppowerofone.com/" aria-label='Power of One' target='_blank'>
                <picture>
                    <source
                        srcSet='/videos/banner/mobileBanner2.webp'
                        // srcSet='/images/doosriDiwali/MobileBaner-2.webp'
                        media="(max-width: 552px)"
                        type="image/webp"
                    />
                    <source
                        srcSet='/images/doosriDiwali/Baner-2.webp'
                        media="(min-width: 553px)"
                        type="image/webp"
                    />
                    <img
                        loading='lazy'
                        src='/images/doosriDiwali/Baner-2.webp'
                        alt='Only Vtp Brand'
                        className="brand_onlyvtp_img"
                    />
                </picture>
                </Link>
            </div>
        </section>
  )
}

export default BrandOnlyVtp
