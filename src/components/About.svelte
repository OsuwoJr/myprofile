<svelte:options runes={true} />

<script>
	const benefits = [
		{
			name: 'Fast',
			icon: 'fa-solid fa-truck-fast',
			description: 'Fast load times and smooth interactions for a seamless user experience.'
		},
		{
			name: 'Intuitive',
			icon: 'fa-solid fa-mobile-screen-button',
			description: 'User-friendly interfaces with a strong focus on usability and simplicity.'
		},
		{
			name: 'Responsive',
			icon: 'fa-solid fa-desktop',
			description: 'Adaptable designs that perform flawlessly across all devices and screen sizes.'
		},
		{
			name: 'Dynamic',
			icon: 'fa-solid fa-database',
			description: 'Data-driven, interactive elements that enhance user engagement and functionality.'
		}
	];
</script>

<section id="about" class="py-20 pt-10 lg:pt-16 relative">
    <!-- Header Section with Artistic Borders -->
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
        <h6 class="text-lg sm:text-xl md:text-2xl">Want to <span class="poppins text-violet-400">know</span> more?</h6>
        <h3>About <span class="poppins text-violet-400">Me</span></h3>
    </div>

    <!-- Benefits Section -->
    <div class="flex flex-col items-center gap-20 w-full mx-auto max-w-[800px]">
        {#each benefits as benefit, index (benefit.name)}
        <div class="flex gap-6 sm:gap-8 py-10 items-start">
            <p class="poppins text-4xl sm:text-5xl md:text-6xl font-bold text-violet-500">0{index + 1}</p>
            <div class="flex flex-col gap-4 sm:gap-6">
                <h3 class="text-2xl sm:text-3xl md:text-5xl font-semibold">{benefit.name}</h3>
                <p class="w-full sm:w-[400px] text-lg sm:text-xl">{benefit.description}</p>
            </div>
        </div>
        {/each}
    </div>

    <!-- Comparison Table with Stronger Visual Hierarchy -->
    <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins mb-8">
        The <span class="text-violet-400">Complete</span> Package
    </h5>
    <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full shadow-lg rounded-lg">
        <table class="bg-white text-slate-700 rounded text-center">
            <thead class="border-b border-slate-200 bg-violet-50">
                <tr>
                    <th></th>
                    <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                    <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                    <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                    <th class="bg-violet-700 text-white p-4 px-8">Me</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-200">
                    <td class="border-r border-slate-200 font-semibold p-4 text-sm">Dedication</td>
                    <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                    <td><i class="fa-solid fa-check text-slate-500"></i></td>
                    <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                    <td><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                <tr class="border-b border-slate-200">
                    <td class="border-r border-slate-200 font-semibold p-4 text-sm">Critical Thought</td>
                    <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                    <td><i class="fa-solid fa-check text-slate-500"></i></td>
                    <td><i class="fa-solid fa-check text-slate-500"></i></td>
                    <td><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                <tr class="border-b border-slate-200">
                    <td class="border-r border-slate-200 font-semibold p-4 text-sm">Interpersonal Skills</td>
                    <td><i class="fa-solid fa-check text-slate-500"></i></td>
                    <td><i class="fa-solid fa-check text-slate-500"></i></td>
                    <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                    <td><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
                <tr>
                    <td class="border-r border-slate-200 font-semibold p-4 text-sm">Programming Ability</td>
                    <td><i class="fa-solid fa-check text-slate-500"></i></td>
                    <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                    <td><i class="fa-solid fa-check text-slate-500"></i></td>
                    <td><i class="fa-solid fa-check text-green-500"></i></td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Subtle Scroll Hint for Small Screens -->
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
        <p>Scroll to see more &rarr;</p>
    </div>

    <!-- Strong Call to Action -->
    <div class="text-center mt-12">
        <p class="text-xl sm:text-2xl font-semibold">So, why not invest in <span class="text-violet-400">the best?</span></p>
        <a href="https://github.com/OsuwoJr" target="_blank" class="mt-4 inline-block px-6 py-3 bg-violet-700 text-white font-bold rounded hover:bg-violet-800 transition duration-300">
            Explore My Projects
        </a>
    </div>
</section>
