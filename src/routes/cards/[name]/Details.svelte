<script>
	import Qi from '$lib/components/Keywords/Qi.svelte';
	import Atk from '$lib/components/Keywords/Atk.svelte';
	import Def from '$lib/components/Keywords/Def.svelte';
	import SwordIntent from '$lib/components/Keywords/SwordIntent.svelte';
	import IgnoreDef from '$lib/components/Keywords/IgnoreDef.svelte';
	import CloudHit from '$lib/components/Keywords/CloudHit.svelte';
	import Injured from '$lib/components/Keywords/Injured.svelte';
	import Continuous from '$lib/components/Keywords/Continuous.svelte';
	import Hp from '$lib/components/Keywords/Hp.svelte';
	import Chase from '$lib/components/Keywords/Chase.svelte';
	import IncreaseAtk from '$lib/components/Keywords/IncreaseAtk.svelte';
	import Regen from '$lib/components/Keywords/Regen.svelte';
	import GuardUp from '$lib/components/Keywords/GuardUp.svelte';
	import Hexagram from '$lib/components/Keywords/Hexagram.svelte';
	import StarPoint from '$lib/components/Keywords/StarPoint.svelte';
	import StarPower from '$lib/components/Keywords/StarPower.svelte';
	export let details;
</script>

<div>
	{#if details.freeDefOver || details.freeDefOver === 0}
		<p>If you have more thae {details.freeDefOver} <Def />, this card consumes no <Qi /></p>
	{/if}

	{#if details.cost}
		<p><Qi /> Cost: <span class="has-text-link has-text-weight-bold">{details.cost}</span></p>
	{/if}

	{#if details.qi}
		<p><Qi />+<span class="has-text-weight-bold has-text-link">{details.qi}</span></p>
	{/if}

	{#if details.hexagram}
		<p><Hexagram />+<span class="has-text-weight-bold">{details.hexagram}</span></p>
	{/if}

	{#if details.atk || details.atk === 0}
		<p>
			<span class="has-text-danger has-text-weight-bold">{details.atk} </span><Atk />
		</p>
	{/if}

	{#if details.atkRng}
		<span class="has-text-danger has-text-weight-bold">{details.atkRng[0]}</span>~<span
			class="has-text-danger has-text-weight-bold"
			>{details.atkRng[1]}
		</span><Atk />
	{/if}

	{#if details.qiAtkBonus}
		<p>
			Add <span class="has-text-weight-bold">{details.qiAtkBonus}</span>
			<Atk /> for each <Qi /> you have
		</p>
	{/if}

	{#if details.nAtks}
		<p>Attacks {details.nAtks} times</p>
	{/if}

	{#if details.def}
		<p><Def />+<span class="has-text-warning-dark has-text-weight-bold">{details.def}</span></p>
	{/if}

	{#if details.defRng}
		<span class="has-text-warning-dark has-text-weight-bold">{details.defRng[0]}</span>~<span
			class="has-text-warning-dark has-text-weight-bold"
			>{details.defRng[1]}
		</span><Def />
	{/if}

	{#if details.nextDef}
		<p>Add {details.nextDef} <Def /> on your next turn</p>
	{/if}

	{#if details.hp}
		<p><Hp />+<span class="has-text-weight-bold">{details.hp}</span></p>
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

	{#if details.increaseAtk}
		<p>Gain {details.increaseAtk} stacks of <IncreaseAtk /></p>
	{/if}

	{#if details.loseQi}
		<p>Opponent loses {details.loseQi} <Qi /></p>
	{/if}

	{#if details.regen}
		Gain {details.regen} stacks of <Regen />
	{/if}

	{#if details.guardUp}
		Gain {details.guardUp} stacks of <GuardUp />
	{/if}

	{#if details.starNext}
		The next {details.starNext} slots in your deck become <StarPoint />
	{/if}

	{#if details.starPower}
		<StarPower />+<span class="has-text-weight-bold">{details.starPower}</span>
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

	{#if details.qiToDef}
		Add {details.qiToDef} <Def /> for each <Qi /> you have
	{/if}

	{#if details.defAtkBonus}
		<p>Add {details.defAtkBonus} <Atk /> for each 1 <Def /></p>
	{/if}

	{#if details.cloudSwordHeal}
		<p>
			Whenever you play a "Cloud Sword" card, heal {details.cloudSwordHeal}
			<Hp />
		</p>
	{/if}

	{#if details.qiPer2}
		<p>
			Add <span class="has-text-weight-bold">1</span>
			<Qi /> every <span class="has-text-weight-bold">2</span> turns
		</p>
	{/if}

	{#if details.qiPerTurn}
		<p>Add <span class="has-text-weight-bold">1</span> <Qi /> every turn</p>
	{/if}

	{#if details.hexPerTurn}
		At the beginning of your turn, gain <span class="has-text-weight-bold">1</span> <Hexagram />
	{/if}

	{#if details.decreaseSpiritCost}
		<p>
			The "Spirit Sword" card's <Qi /> cost decrease <span class="has-text-weight-bold">1</span>
		</p>
	{/if}

	{#if details.successiveCloudChi}
		<p>For every successive "Cloud Sword" played before this card, add 1 <Qi /></p>
	{/if}

	{#if details.successiveCloudDef}
		<p>
			For each successive "Cloud Sword" played before this card, gain {details.successiveCloudDef}
			<Def />
		</p>
	{/if}

	{#if details.qiToAtk}
		<p>Add {details.qiToAtk} <Atk /> for each <Qi /></p>
	{/if}

	{#if details.qiPerAttack}
		<p>
			Add <span class="has-text-weight-bold">1</span>
			<Qi /> for every attack that <Injured /> the opponent
		</p>
	{/if}

	{#if details.pctChanceAtk}
		<p>
			{details.pctChanceAtk.pct}% chance to make an additional
			<span class="has-text-weight-bold">{details.pctChanceAtk.atk}</span>
			<Atk />
		</p>
	{/if}

	{#if details.atkPerDebuff}
		<p>For each stack of Debuff the opponent has, this card gets {details.atkPerDebuff} <Atk /></p>
	{/if}

	{#if details.exhaustQiToAtk}
		<p>
			Exhaust <Qi />, add <span class="has-text-weight-bold">{details.exhaustQiToAtk}</span>
			<Atk /> for each point exhausted
		</p>
	{/if}

	{#if details.increaseIntent}
		<p>
			Increase your existing <SwordIntent /> stacks by
			<span class="has-text-weight-bold">{details.increaseIntent}</span>%
		</p>
	{/if}

	{#if details.defNoHalve}
		<p>At the beginning of your next {details.defNoHalve} turns, your <Def /> will not halve</p>
	{/if}

	{#if details.qiToSwordIntent}
		<p>Add 1 <SwordIntent /> for each point of <Qi /> (Up to {details.qiToSwordIntent})</p>
	{/if}

	{#if details.unrestrainedInjured}
		<p>
			Whenever an "Unrestrained Sword" card <Injured /> the opponent, add {details.unrestrainedInjured}%
			of damage as <Hp />
		</p>
	{/if}

	{#if details.successiveCloudAttack}
		<p>
			For every successive "Cloud Sword" played before this card, add {details.successiveCloudAttack}
			<Atk />
		</p>
	{/if}

	{#if details.text}
		<p>{details.text}</p>
	{/if}

	{#if details.chase}
		<p class="has-text-primary-dark is-size-5"><Chase /></p>
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
		<p class="has-text-weight-bold is-size-4 py-2">
			If <Qi /> is greater than {details.qiOver.req}:
		</p>
		<svelte:self details={details.qiOver} />
	{/if}

	{#if details.postAction}
		<p class="has-text-weight-bold is-size-4 py-2">Post Action:</p>
		<svelte:self details={details.postAction} />
	{/if}

	{#if details.starPoint}
		<p class="has-text-weight-bold is-size-4 py-2">Star Point:</p>
		<svelte:self details={details.starPoint} />
	{/if}

	{#if details.continuous}
		<p class="has-text-weight-bold is-size-4"><Continuous />:</p>
		<svelte:self details={details.continuous} />
	{/if}
</div>
