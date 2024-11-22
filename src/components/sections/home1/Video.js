import VideoPopup from '@/components/elements/VideoPopup'
import {useTranslations} from 'next-intl'
export default function About() {
    const t = useTranslations()
    return (
        <>
            <section className="video-section centred">
                <div
                    className="bg-layer parallax-bg"
                    data-parallax='{"y": 100}'
                    style={{
                        backgroundImage:
                            'url(assets/images/background/video-bg.jpg)',
                    }}></div>
                <div className="auto-container">
                    <div className="inner-box">
                        <h2>{t('about_title')}</h2>
                        <div className="video-btn">
                            {/* <VideoPopup /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
