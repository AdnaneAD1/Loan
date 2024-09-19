'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'


export default function VideoPopup({ style, text }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/* <a onClick={() => setOpen(true)} className="lightbox-image"><i className="icon-play" /></a> */}
            {/* <span className="icon-20" onClick={() => setOpen(true)} /> */}
            

            {!style &&
                <div className="video-btn">
                    <a onClick={() => setOpen(true)} className="lightbox-image">
                        <i className="icon-20"></i>
                        <span className="border-animation border-1"></span>
                        <span className="border-animation border-2"></span>
                        <span className="border-animation border-3"></span>
                    </a>
                </div>
            }
                    
            



            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}