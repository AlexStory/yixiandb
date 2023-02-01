<script>
	import Qi from '$lib/components/Keywords/Qi.svelte';
	import Atk from '$lib/components/Keywords/Atk.svelte';
	import Def from '$lib/components/Keywords/Def.svelte';
	import SwordIntent from '$lib/components/Keywords/SwordIntent.svelte';
	import IgnoreDef from '$lib/components/Keywords/IgnoreDef.svelte';
	import CloudHit from '$lib/components/Keywords/CloudHit.svelte';
	import Injured from '$lib/components/Keywords/Injured.svelte';
	export let details;
</script>

<div>
	{#if details.cost}
		<p><Qi /> Cost: <span class="has-text-link has-text-weight-bold">{details.cost}</span></p>
	{/if}

	{#if details.atk}
		<p>
			<span class="has-text-danger has-text-weight-bold">{details.atk} </span><Atk />
		</p>
	{/if}

	{#if details.nAtks}
		<p>Attacks {details.nAtks} times</p>
	{/if}

	{#if details.def}
		<p><Def />+<span class="has-text-warning-dark has-text-weight-bold">{details.def}</span></p>
	{/if}

	{#if details.qi}
		<p><Qi />+<span class="has-text-weight-bold has-text-link">{details.qi}</span></p>
	{/if}

	{#if details.hp}
		<p>+<span class="has-text-weight-bold">{details.hp}</span></p>
	{/if}

	{#if details.swordIntent}
		<p>
			<SwordIntent />+<span class="has-text-weight-bold has-text-danger">{details.swordIntent}</span
			>
		</p>
	{/if}

	{#if details.ignoreDef}
		<p>
			Next {details.ignoreDef} attack(s) <IgnoreDef />
		</p>
	{/if}

	{#if details.returnSwordIntent}
		<p>
			Return the <SwordIntent /> used by this attack
		</p>
	{/if}

	{#if details.intentToQi}
		<p>
			Exhaust <SwordIntent />, add <span class="has-text-weight-bold has-text-link">1</span>
			<Qi /> for each point exhausted
		</p>
	{/if}

	{#if details.text}
		<p>{details.text}</p>
	{/if}

	{#if details.cloudHit}
		<p class="has-text-weight-bold is-size-4 py-2">
			<CloudHit />:
		</p>
		<svelte:self details={details.cloudHit} />
	{/if}

	{#if details.injured}
		<p class="has-text-weight-bold is-size-4 py-2">
			<Injured />:
		</p>
		<svelte:self details={details.injured} />
	{/if}

	{#if details.qiOver}
		<p class="is-size-4 py-2">If <Qi /> is greater than {details.qiOver.req}:</p>
		<svelte:self details={details.qiOver} />
	{/if}
</div>
