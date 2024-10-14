<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import Experiences from '$lib/components/organisms/Experience.svelte';
	import ContentWithImage from '$lib/components/organisms/ContentWithImage.svelte';
	import type { Feature, BlogPost, WorkExperience } from '$lib/utils/types';
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import AvatarWithBlobs from '$lib/components/molecules/AvatarWithBlobs.svelte';
	

	export let data: {
		experienceEntries : WorkExperience[];
		features: Feature[];
		posts: BlogPost[];
	};

	let { features, posts, experienceEntries } = data;
</script>

<div class="container">
	<Hero />
	<!-- <About /> -->

	<ContentWithImage>
		<div slot="title">
			I am a developer aiming to build things that just
			<SparklingHighlight color="secondary">Work!</SparklingHighlight>
		</div>
		<div slot="content">
			<p>
				I believe that software should be accessible to everyone, both developers and users alike, 
				and that the satisfaction derived from solving problems is crucial to making this a reality.
			</p>
		</div>
		<div slot="image">
			<AvatarWithBlobs />
		</div>
	</ContentWithImage>

	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
	<Features features={features} />
	<Experiences />
</div>
