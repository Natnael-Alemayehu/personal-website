<script lang="ts">
	import PinIcon from '$lib/icons/pin.svelte';
	import CircleIcon from '$lib/icons/circle.svelte';
	import type { WorkExperience } from '$lib/utils/types';;
	import TintHighlight from '$lib/components/molecules/TintHighlight.svelte';

	export let entries: WorkExperience[]= [
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

<div class="resume-experience">
	{#each entries as entry}
		<div class="experience" class:current={entry.current}>
			<div class="timeline">
				<div class="time">
					{#if entry.current}Current{/if}
					<CircleIcon />
					{entry.timeframe.split(' ')[0]}
				</div>
				<div class="line" />
			</div>
			<div class="content">
				<div class="title">
					<div>
						<span class="company-name">
							<TintHighlight color={entry.companySlug}>{entry.company}</TintHighlight>
						</span>
					</div>
					<small>{entry.jobTitle} | <span class="icon"><PinIcon /></span> {entry.location}</small>
				</div>

				<p>{entry.description}</p>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.resume-experience {
		.experience {
			display: flex;
			gap: 10px;

			.timeline {
				width: 60px;
				margin-bottom: -16px;
				display: flex;
				flex-direction: column;
				align-items: center;

				.line {
					border-left: 2px dashed var(--color--primary);
					width: 2px;
					flex: 1;
				}

				.time {
					color: var(--color--text-shade);
					width: 24px;
					padding: 2px;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 2px;
					font-size: 12px;
					word-wrap: none;
					white-space: nowrap;

					:global(svg) {
						width: 20px;
						height: 20px;
						color: var(--color--primary);
					}
				}
			}

			&.current {
				.time {
					:global(svg) {
						padding: 2px;
						background: var(--color--card-background);
						border: 1px solid var(--color--primary);
						border-radius: 50%;
						fill: var(--color--primary);
					}
				}
			}

			&:not(:last-child) {
				padding-bottom: 16px;
			}

			&:last-child {
				.timeline {
					.line {
						display: none;
					}
				}
			}

			.content {
				flex: 1;
			}

			.title {
				div {
					font-size: 18px;
					display: block;
				}

				.company-name {
					color: var(--color--text);
					font-size: 22px;
					font-family: var(--font--title);
					font-weight: 600;
				}

				.icon {
					:global(svg) {
						width: 14px;
						height: 14px;
					}
				}

				small {
					font-size: 14px;
					font-weight: 300;
					color: var(--color--text-shade);
					fill: var(--color--text-shade);
				}
			}

			.icon {
				display: inline-block;
			}

			p {
				margin-top: 10px;
				text-align: justify;
			}
		}
	}
</style>