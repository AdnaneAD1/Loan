export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">close</div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="m" className="letters-loading">
                                m
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                e
                            </span>
                            <span data-text-preloader="t" className="letters-loading">
                                t
                            </span>
                            <span data-text-preloader="r" className="letters-loading">
                                r
                            </span>
                            <span data-text-preloader="o" className="letters-loading">
                                o
                            </span>
                            <span data-text-preloader="b" className="letters-loading">
                                b
                            </span>
                            <span data-text-preloader="a" className="letters-loading">
                                a
                            </span>
                            <span data-text-preloader="n" className="letters-loading">
                                n
                            </span>
                            <span data-text-preloader="k" className="letters-loading">
                                k
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
