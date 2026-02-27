import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CertificatesTimeline from "./components/CertificatesTimeline";

import PageWrapper from "@/components/PageWrapper";

export default function Page() {

return (

<PageWrapper>

{/* NAVBAR */}
<Navbar />

<main className="relative overflow-x-hidden">

{/* HERO SECTION */}
<section id="home">
<Hero />
</section>


{/* ABOUT SECTION */}
<section id="about">
<About />
</section>


{/* EXPERIENCE SECTION */}
<section id="experience">
<Experience />
</section>


{/* CERTIFICATES SECTION */}
<section id="certificates">
<CertificatesTimeline />
</section>


{/* PROJECTS SECTION */}
<section id="projects">
<Projects />
</section>


{/* CONTACT SECTION */}
<section id="contact">
<Contact />
</section>


</main>


{/* FOOTER */}
<Footer />


</PageWrapper>

);

}