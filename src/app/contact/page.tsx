import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="pt-32 pb-16 md:pt-48 md:pb-32 px-8 md:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-24 md:mb-32">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-8">
              Get in <span className="italic text-primary">Touch</span>
            </h1>
            <div className="w-24 h-[1px] bg-primary mb-12"></div>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Heather Courage is a digital artist and creative director based in London, available for international projects and collaborations that push the boundaries of visual storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            {/* Contact Info: The Asymmetric Column */}
            <div className="lg:col-span-4 space-y-16">
              <div>
                <h3 className="label-md uppercase tracking-[0.2em] text-primary mb-6">Direct Inquiry</h3>
                <a className="text-xl md:text-2xl font-headline hover:text-primary transition-colors duration-300" href="mailto:heather.courage@gmail.com">
                  heather.courage@gmail.com
                </a>
              </div>
              <div>
                <h3 className="label-md uppercase tracking-[0.2em] text-primary mb-6">Location</h3>
                <p className="text-xl md:text-2xl font-headline">London, United Kingdom</p>
                <p className="text-on-surface-variant mt-2">Open to global assignments</p>
              </div>
              <div>
                <h3 className="label-md uppercase tracking-[0.2em] text-primary mb-6">Network</h3>
                <ul className="space-y-4">
                  <li>
                    <a className="group flex items-center gap-4 text-on-surface hover:text-primary transition-colors duration-300" href="#">
                      <span className="font-headline text-xl">ArtStation</span>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">arrow_outward</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center gap-4 text-on-surface hover:text-primary transition-colors duration-300" href="#">
                      <span className="font-headline text-xl">LinkedIn</span>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">arrow_outward</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Canvas: The Monolith */}
            <div className="lg:col-span-8 bg-surface-container-low p-8 md:p-16 relative">
              <form className="space-y-12">
                <div className="relative">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-primary mb-2" htmlFor="name">Name</label>
                  <input className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-4 font-headline text-xl focus:border-primary focus:outline-none focus:ring-0 placeholder-on-surface-variant/30 transition-colors" id="name" name="name" placeholder="Your full name" type="text" />
                </div>
                <div className="relative">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-primary mb-2" htmlFor="email">Email</label>
                  <input className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-4 font-headline text-xl focus:border-primary focus:outline-none focus:ring-0 placeholder-on-surface-variant/30 transition-colors" id="email" name="email" placeholder="email@example.com" type="email" />
                </div>
                <div className="relative">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-primary mb-2" htmlFor="message">Message</label>
                  <textarea className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-4 font-headline text-xl focus:border-primary focus:outline-none focus:ring-0 resize-none placeholder-on-surface-variant/30 transition-colors" id="message" name="message" placeholder="Project details or inquiry..." rows={4}></textarea>
                </div>
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
                  <p className="text-xs text-on-surface-variant/60 max-w-xs uppercase tracking-widest leading-loose">
                    By sending this message, you acknowledge that your data will be handled with professional discretion.
                  </p>
                  <button className="w-full md:w-auto px-12 py-5 bg-primary text-on-primary font-headline uppercase tracking-[0.2em] text-sm hover:bg-primary-container transition-colors duration-300" type="button">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Visual Texture (Asymmetric Image Placement) */}
          <div className="mt-32 md:mt-64 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-7 h-[400px] md:h-[600px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                alt="Studio scene"
                className="w-full h-full object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB00AXjOhpPEuIu8TmFFIlAn7baFNH9g5OGLoL5kyv8P8520SVwSTmKPJB-VareoBCOEe1wF9FvUSfyuXdT4VtSCouyFv99JM6JDO_gROn07Zr-BF67or_HhzfXoKEJNtqVObbpOeG2bYzorkTXifTlxxuAkR0gIbnLmNBFD_UdZbjMt8ploGaioJlJrESNk3W0j-Kt4GFdyw0_LRTZNMXt_vG3ayvDZrbnImLF24IQ0u4M-Zfzam7oCP1Dcz9lrPkNzunac_yawIg"
              />
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <h4 className="font-headline text-2xl mb-6">Current Availability</h4>
              <p className="text-on-surface-variant leading-relaxed">
                Now accepting commissions for Q2 & Q3 2026. Current time zone: GMT+1. Please allow 48 hours for a response to detailed project briefs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
