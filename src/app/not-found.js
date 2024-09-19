

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="404 Error">
            <section className="error-section centred pt_120 pb_120">
                <div className="auto-container">
                    <div className="inner-box">
                    <figure className="error-image"><img src="assets/images/icons/error-1.png" alt="" /></figure>
                    <h2>Sorry, Something Went Wrong.</h2>
                    <Link href="/" className="theme-btn btn-one">Back to Homepage</Link>
                    </div>
                </div>
            </section>

            </Layout>
        </>
    )
}
