<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import Experiences from '$lib/components/organisms/Experience.svelte';
	import type { Feature, BlogPost, WorkExperience } from '$lib/utils/types';
	

	export let data: {
		experienceEntries : WorkExperience[];
		features: Feature[];
		posts: BlogPost[];
	};

	let { features, posts, experienceEntries } = data;
</script>

<div class="container">
	<Hero />
	<About />
	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
	<Features features={features} />
	<Experiences />
</div>
