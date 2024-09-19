import VideoPopup from '@/components/elements/VideoPopup'
export default function About() {
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
                        <h2>La Banque Commerciale Privée de 3ème Génération</h2>
                        <div className="video-btn">
                            <VideoPopup />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
