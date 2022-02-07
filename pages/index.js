import Head from "next/head";
import styles, { customerValue } from "../styles/Home.module.css";
import ActionComponent from "../components/ActionComponent/ActionComponent";
import Footer from "../components/Footer/Footer";
import HowItWorks from "../components/Explanation/HowItWorks";
import SiteTitle from "../components/SiteTitle/SiteTitle";

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Head>
                <title>
                    Allows iframe - API to check if a given site can be opened
                    in an iFrame
                </title>
                <meta
                    name="description"
                    content="Allows iframe - API to check if a given site can be opened in an iFrame"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <SiteTitle />
                <h1 className={styles.title}>Will it open in an iFrame?</h1>
                <article className={styles.article}>
                    <p>
                        Not every site will work in an iFrame! Site owners can
                        turn iFrames off. Good browsers will comply and show an
                        error message.
                    </p>
                    <p className={customerValue}>
                        Use this service to <strong>pre-check</strong> if the
                        given <strong>URL</strong> will open in an{" "}
                        <strong>iFrame</strong>.
                    </p>
                </article>
            </main>
            <ActionComponent />
            <HowItWorks />
            <Footer />
        </div>
    );
}
