<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<div class="pdf-viewer">
				<iframe src={data} width="100%" height="600px" frameborder="0" title="resume">
					Your browser does not support viewing PDFs.
					<a href={data} target="_blank">Click here to view the PDF</a>
				</iframe>
			</div>

			<a href={data} download>
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;

		.pdf-viewer {
			width: 90%;
			max-width: 800px;
			border: 1px solid #ddd;
			margin-bottom: 20px;
		}

		& > a {
			color: inherit;
		}
	}

	/* Hide PDF viewer on small screens */
	@media screen and (max-width: 768px) {
		.pdf-viewer {
			display: none;
		}

		h2 {
			display: none;
		}
	}
</style>
