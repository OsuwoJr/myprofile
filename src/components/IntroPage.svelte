<svelte:options runes={true} />

<script>
    import Button from "./Button.svelte";

    // PDF file path
    const resumeLink = "/files/JohnFrederickOdongoOsuwoResume.pdf";
    const currentYear = new Date().getFullYear();
</script>

<section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div class="flex flex-col lg:justify-center items-center md:items-start text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
        <h1 class="hero-headline poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
            <span class="hero-headline-line">Security-Focused Software Engineer</span>
            <span class="hero-headline-sep" aria-hidden="true">|</span>
            <span class="hero-headline-line">Frontend & Blockchain Developer</span>
            <span class="hero-headline-sep" aria-hidden="true">|</span>
            <span class="hero-headline-line">DevSecOps & Application Security Specialist</span>
        </h1>
        <div class="flex flex-col gap-4 bg-slate-900/30 border border-violet-800/30 rounded-lg p-4">
            <div class="flex flex-wrap gap-2 text-sm md:text-base">
                <span class="px-3 py-1 bg-violet-900/50 rounded-full border border-violet-700">Fullstack Engineer</span>
                <span class="px-3 py-1 bg-violet-900/50 rounded-full border border-violet-700">Frontend-Focused</span>
                <span class="px-3 py-1 bg-violet-900/50 rounded-full border border-violet-700">SEO Specialist</span>
                <span class="px-3 py-1 bg-violet-900/50 rounded-full border border-violet-700">Security Expert</span>
            </div>
        </div>
        
        <p class="text-base md:text-lg text-slate-300">
            I'm a <strong>Software Engineer specializing in Frontend Engineering, Blockchain Development, and Application Security (DevSecOps)</strong>. 
            My focus includes <strong>🔐 Application Security</strong>, <strong>DevSecOps</strong>, <strong>Secure Code</strong>, <strong>OWASP</strong> practices, and <strong>CI/CD defense</strong>. 
            I help teams build <strong>secure, scalable, and production-ready applications</strong> by combining strong UI engineering with 
            <strong>secure-by-design principles</strong> across the entire software development lifecycle. 
            I'm passionate about <strong>preventing data leaks</strong>, <strong>reducing attack surfaces</strong>, and writing clean, secure, maintainable code — from backend APIs to CI/CD pipelines.
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

        <!-- Mission & Collaborate (from About) -->
        <div class="space-y-3">
            <p class="text-base text-slate-300">
                <strong class="text-violet-400">Mission:</strong> To bridge <strong>software engineering and cybersecurity</strong> — helping teams ship fast <strong>without compromising safety</strong>.
            </p>
            <p class="text-base text-slate-300">
                I bring hands-on experience in <strong>SEO, digital growth, and media production</strong> — including <strong>videography, audio engineering, and social media</strong> — so I can support product storytelling, developer advocacy, and brand presence alongside secure code.
            </p>
            <p class="text-base text-slate-300"><strong class="text-violet-400">Open to:</strong> Secure software development · Frontend & Web3 projects · DevSecOps & Application Security roles · Open-source security initiatives</p>
        </div>

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

    <!-- Section title: spans both columns on wide screen -->
    <h3 class="text-xl sm:text-2xl font-semibold text-violet-400 lg:col-span-2">
        Why I am the best to work with in {currentYear}
    </h3>

    <!-- Multidisciplinary Edge – left card (below intro on wide screen) -->
    <div class="bg-gradient-to-r from-violet-900/30 to-purple-900/30 border border-violet-800/50 rounded-lg p-6 h-full flex flex-col">
            <h4 class="text-lg font-semibold text-violet-400 mb-4">🧠 Multidisciplinary Edge</h4>
            <p class="text-slate-200 mb-4">
                Combines <strong class="text-white">software engineering, security, SEO, and digital media</strong> to build products that are:
            </p>
            <ul class="grid grid-cols-2 gap-3">
                <li class="flex items-center gap-2">
                    <i class="fa-solid fa-shield-halved text-violet-400"></i>
                    <span class="text-slate-300">Secure</span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="fa-solid fa-search text-violet-400"></i>
                    <span class="text-slate-300">Discoverable</span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="fa-solid fa-palette text-violet-400"></i>
                    <span class="text-slate-300">Visually Compelling</span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="fa-solid fa-user text-violet-400"></i>
                    <span class="text-slate-300">User-centric</span>
                </li>
            </ul>
            <p class="text-slate-200 mt-4">
                Unique ability to align <strong class="text-violet-400">engineering execution with marketing visibility and brand storytelling</strong>.
            </p>
    </div>

    <!-- Strategic Positioning – right card (below image on wide screen) -->
    <div class="flex flex-col bg-gradient-to-r from-violet-900/30 to-purple-900/30 border border-violet-800/50 rounded-lg p-6 h-full">
        <h5 class="text-lg font-semibold text-violet-300 mb-3">🎯 Strategic Positioning</h5>
        <p class="text-slate-200 mb-3">You now position yourself as:</p>
        <ul class="grid grid-cols-1 gap-2 mb-4">
            <li class="flex items-start gap-2 text-slate-200">
                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                <span>Engineer who understands <strong class="text-white">security</strong></span>
            </li>
            <li class="flex items-start gap-2 text-slate-200">
                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                <span>Developer who understands <strong class="text-white">users & UX</strong></span>
            </li>
            <li class="flex items-start gap-2 text-slate-200">
                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                <span>Technologist who understands <strong class="text-white">SEO & growth</strong></span>
            </li>
            <li class="flex items-start gap-2 text-slate-200">
                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                <span>Creative who understands <strong class="text-white">media & storytelling</strong></span>
            </li>
        </ul>
        <p class="text-slate-200 mb-2">This combo is <strong class="text-violet-400">rare</strong> and <strong class="text-violet-400">very attractive</strong> to:</p>
        <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">Startups</span>
            <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">Web3 companies</span>
            <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">Product-led SaaS</span>
            <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">DevRel teams</span>
            <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">Security-first orgs</span>
            <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">Founder-led teams</span>
        </div>
    </div>

    <!-- What I Do Best – left card (under "Why I am the best...") -->
    <div class="bg-gradient-to-r from-violet-900/30 to-purple-900/30 border border-violet-800/50 rounded-lg p-6 h-full flex flex-col">
        <h4 class="text-lg font-semibold text-violet-400 mb-4">🔐 What I Do Best</h4>
        <ul class="grid grid-cols-1 gap-2 text-sm text-slate-200">
            <li class="flex items-start gap-2"><i class="fa-solid fa-code text-violet-400 mt-0.5"></i><span>Frontend: <strong class="text-white">React, Svelte, Next.js, TypeScript</strong></span></li>
            <li class="flex items-start gap-2"><i class="fa-solid fa-link text-violet-400 mt-0.5"></i><span>Blockchain & Web3: <strong class="text-white">Hedera, ICP, Lisk, Smart Contracts, Wallets</strong></span></li>
            <li class="flex items-start gap-2"><i class="fa-solid fa-shield-halved text-violet-400 mt-0.5"></i><span><strong class="text-white">Application Security & DevSecOps</strong></span></li>
            <li class="flex items-start gap-2"><i class="fa-solid fa-magnifying-glass text-violet-400 mt-0.5"></i><span>Secure Code Reviews & Vulnerability Mitigation</span></li>
            <li class="flex items-start gap-2"><i class="fa-solid fa-code-branch text-violet-400 mt-0.5"></i><span>CI/CD Security, Dependency & Container Scanning</span></li>
            <li class="flex items-start gap-2"><i class="fa-solid fa-lock text-violet-400 mt-0.5"></i><span>OWASP Top 10, API Security, Log Hardening</span></li>
            <li class="flex items-start gap-2"><i class="fa-solid fa-users text-violet-400 mt-0.5"></i><span>Product-driven development & UX collaboration</span></li>
        </ul>
    </div>

    <!-- I Specialize In – right card (under "Why I am the best...") -->
    <div class="bg-gradient-to-r from-violet-900/30 to-purple-900/30 border border-violet-800/50 rounded-lg p-6 h-full flex flex-col">
        <h4 class="text-lg font-semibold text-violet-400 mb-4">🧠 I Specialize In</h4>
        <ul class="grid grid-cols-1 gap-2 text-sm text-slate-200">
            <li class="flex items-start gap-2"><i class="fa-solid fa-shield-halved text-violet-400 mt-0.5"></i><span>Application Security & Vulnerability Mitigation</span></li>
            <li class="flex items-start gap-2"><i class="fa-solid fa-code-branch text-violet-400 mt-0.5"></i><span>DevSecOps in CI/CD Pipelines</span></li>
            <li class="flex items-start gap-2"><i class="fa-solid fa-magnifying-glass text-violet-400 mt-0.5"></i><span>Secure Code Reviews & Static/Dynamic Testing</span></li>
            <li class="flex items-start gap-2"><i class="fa-solid fa-lock text-violet-400 mt-0.5"></i><span>Log Hardening & Data Privacy</span></li>
            <li class="flex items-start gap-2"><i class="fa-solid fa-key text-violet-400 mt-0.5"></i><span>API Authentication & Rate-Limiting</span></li>
            <li class="flex items-start gap-2"><i class="fa-solid fa-cloud text-violet-400 mt-0.5"></i><span>OWASP Best Practices, Cloud & Container Security</span></li>
        </ul>
    </div>
</section>
