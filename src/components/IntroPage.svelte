<svelte:options runes={true} />

<script>
    import Button from "./Button.svelte";

    // PDF file path
    const resumeLink = "/files/JohnFrederickOdongoOsuwoResume.pdf";
</script>

<section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div class="flex flex-col lg:justify-center items-center md:items-start text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
        <div class="flex flex-col gap-4">
            <h1 class="font-semibold text-3xl md:text-5xl lg:text-6xl">
                👋 Hi, I'm <span class="poppins text-violet-400">Osuwo Odongo John Frederick</span>
            </h1>
            <div class="flex flex-wrap gap-2 text-sm md:text-base">
                <span class="px-3 py-1 bg-violet-900/50 rounded-full border border-violet-700">Fullstack Engineer</span>
                <span class="px-3 py-1 bg-violet-900/50 rounded-full border border-violet-700">Frontend-Focused</span>
                <span class="px-3 py-1 bg-violet-900/50 rounded-full border border-violet-700">SEO Specialist</span>
                <span class="px-3 py-1 bg-violet-900/50 rounded-full border border-violet-700">Security Expert</span>
            </div>
            <div class="bg-slate-900/30 border border-violet-800/30 rounded-lg p-3">
                <p class="text-sm text-violet-400 font-semibold">
                    🔐 Application Security | DevSecOps | Secure Code | OWASP | CI/CD Defender | Kenya 🇰🇪
                </p>
            </div>
        </div>
        
        <p class="text-lg md:text-xl leading-relaxed">
            <strong class="poppins text-violet-400">Security-Focused Software Engineer</strong> | 
            <strong class="poppins text-violet-400">Frontend & Blockchain Developer</strong> | 
            <strong class="poppins text-violet-400">DevSecOps & Application Security Specialist</strong>
        </p>
        
        <div class="bg-violet-900/20 border border-violet-700/50 rounded-lg p-4">
            <p class="text-sm md:text-base text-slate-200 italic">
                <strong class="text-violet-400">LinkedIn Headline:</strong> Security-Focused Software Engineer | 
                Frontend (React, Svelte, Next.js) | Blockchain (Hedera, ICP, Lisk) | 
                Application Security & DevSecOps | OWASP | CI/CD
            </p>
        </div>
        
        <p class="text-base md:text-lg text-slate-300">
            I'm a <strong>Software Engineer specializing in Frontend Engineering, Blockchain Development, and Application Security (DevSecOps)</strong>. 
            I help teams build <strong>secure, scalable, and production-ready applications</strong> by combining strong UI engineering with 
            <strong>secure-by-design principles</strong> across the entire software development lifecycle.
        </p>

        <p class="text-base md:text-lg text-slate-300">
            I have hands-on experience building <strong>decentralized applications (dApps)</strong> including 
            <strong>meme coins, DAOs, NFT platforms, and blockchain dashboards</strong> using 
            <strong>React, Svelte, Next.js, TypeScript</strong>, and blockchain platforms such as 
            <strong>Hedera, Internet Computer (ICP), and Lisk</strong>.
        </p>

        <p class="text-base md:text-lg text-slate-300">
            Beyond building features, I focus on <strong>embedding security early</strong> — from 
            <strong>secure code reviews and OWASP best practices</strong> to 
            <strong>CI/CD pipeline hardening, dependency scanning, and log protection</strong>. 
            I bridge the gap between <strong>engineering, security, and product</strong>, ensuring systems are not only 
            functional and beautiful, but also <strong>resilient and safe</strong>.
        </p>

        <p class="text-base md:text-lg text-slate-300">
            I bring a <strong>product-oriented mindset</strong>, with experience in 
            <strong>MVP design, UX flow optimization, and feature prioritization</strong>, 
            helping reduce onboarding friction and align technical execution with business goals.
        </p>

        <!-- Contact & Links -->
        <div class="flex flex-col gap-3 w-full">
            <div class="flex flex-wrap gap-3">
                <a href="mailto:johnfredosuwo@gmail.com" class="text-violet-400 hover:text-violet-300 flex items-center gap-2">
                    <i class="fa-solid fa-envelope"></i>
                    <span>johnfredosuwo@gmail.com</span>
                </a>
            </div>
            <div class="flex flex-wrap gap-4">
                <a href="https://github.com/osuwojr" target="_blank" class="text-violet-400 hover:text-violet-300 flex items-center gap-2">
                    <i class="fa-brands fa-github"></i>
                    <span>GitHub: @osuwojr</span>
                </a>
                <a href="https://www.linkedin.com/in/JohnFrederickOdongoOsuwo" target="_blank" class="text-violet-400 hover:text-violet-300 flex items-center gap-2">
                    <i class="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
            </div>
            <div class="bg-slate-900/30 border border-violet-800/30 rounded-lg p-4 space-y-2">
                <p class="text-sm text-slate-300">
                    👀 <strong>Interested in:</strong> Making UIs look more artistic, interesting with easy to use interaction interfaces
                </p>
                <p class="text-sm text-slate-300">
                    🌱 <strong>Currently learning:</strong> TypeScript
                </p>
                <p class="text-sm text-slate-300">
                    💞️ <strong>Looking to collaborate on:</strong> Projects that allow TailwindCSS, ReactJS, and Svelte, with ambition of limitless creativity
                </p>
                <p class="text-sm text-slate-300">
                    📫 <strong>Reach me:</strong> Search and DM <strong>OSUWOJR</strong> everywhere
                </p>
                <p class="text-sm text-slate-400 italic mt-2">
                    ⚡ Fun fact: I'm also a <strong>music & video producer</strong> and artist (<strong>OSUWOJR</strong>), 
                    and owner of <strong>KenyanTroublerMusic</strong>.
                </p>
            </div>
        </div>

        <!-- Button for viewing and downloading resume -->
        <div class="flex flex-wrap gap-4">
            <Button text="View Resume" link={resumeLink} target="_blank" />
            <Button text="Download Resume" link={resumeLink} download />
        </div>
    </div>

    <div class="relative shadow-2xl grid place-items-center">
        <img
            src="images/profile.webp"
            alt="Osuwo Odongo John Frederick - Security-Focused Software Engineer, Frontend & Blockchain Developer, DevSecOps Specialist"
            class="object-cover z-[2] max-h-[70vh] rounded-lg"
        />
    </div>
</section>
