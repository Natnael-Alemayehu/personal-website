<script lang="ts">
	import type { WorkExperience } from '$lib/utils/types';
	import ExperienceCard from '$lib/components/molecules/ExperienceCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import Button from '../atoms/Button.svelte';

	let entries: WorkExperience[] = [
        {
            companySlug: 'online-marketplace',
			company: 'Spare-Pal',
			jobTitle: "Co-Founder and Lead Developer",
			timeframe: "2024 -> Now",
			current: true,
			location: "Addis Ababa, Ethiopia",
			description: 'Co-Founder and Lead Developer for an online marketplace application that connects customers with spare parts suppliers in Addis Ababa, Ethiopia. The platform is designed to streamline the process of sourcing and purchasing vehicle spare parts, making it easier for users to find the right parts quickly and efficiently.',
			tags: [{ label: 'React Native', color:'secondary' }, { label: 'eCommerce' }]
		},
        {
            companySlug: 'Noble Care Transportation',
            company: 'Noble Care Transportation',
            jobTitle: "Website Developer",
            timeframe: "2024 -> Now",
            current: false,
            location: "remote",
            description: 'Noble Care Transportation is a website built for a client remotely based in the USA. The goal of the website was providing reliable and compassionate transport services for elders and people in need.',
            tags: [{ label: 'Freelance' },{label:'Wordpress'}]
        },
		{
			companySlug: 'Phase2Growth',
			company: 'Phase 2 Growth',
			jobTitle: "Feeelance Backend Engineer",
			timeframe: "2023->2024",
			current: false,
			location: "Addis Ababa, Ethiopia",
			description: 'Developed Power BI dashboards using data from the company’s multilead API to showcase key performance indicators. Collaborating remotely, I built and hosted solutions with Python and Flask, delivering a tailored dashboard that met client needs while utilizing Agile methodologies for timely project delivery.',
			tags: [{ label: 'Freelance' },{ label: 'Python' }, {label:"Flask",  color: 'secondary'}]
		}
	];

</script>

<ContentSection
	id="experience"
	title="Work Experience"
	description="Over the past 5+ years, I've worked on a lot of cool projects with great people."
>
	<!-- <div slot="button">
		<Button color="secondary" href="/resume">View Resume</Button>
	</div> -->
	<div class="grid">
        {#if entries && entries.length > 0}
        {#each entries as entry}
            <ExperienceCard
                companySlug={entry.companySlug}
                company={entry.company}
                jobTitle={entry.jobTitle}
                timeframe={entry.timeframe}
                description={entry.description}
                tags={entry.tags}
            />
        {/each}
    {:else}
        <p>Loading...</p>
    {/if}
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 20px;
		:global(> *) {
			flex: 1 0 320px;
		}
	}
</style>