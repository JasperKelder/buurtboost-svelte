<script>
	import { popup } from './popup.js';
</script>

{#if $popup}
	<div class="overlay" on:click={popup.toggle} />
	<div class="modal">
		<div class="modal-content">
			<img src="svg/popup.svg" alt="Adviseur" width="100%" />
			<div class="close" on:click={popup.toggle}>✖</div>
			<h2>Download de gratis brochure</h2>
			<p>Ontvang de BuurtBoost brochure met uitgebreide informatie</p>
			<input type="email" placeholder="E-mail adres" />
			<button onclick="confetti()" on:click={popup.toggle}>Download</button>
		</div>
	</div>
{/if}

<style>
	.overlay {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 5;
		position: fixed;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(3px);
	}

	.modal {
		top: 50%;
		left: 50%;
		z-index: 6;
		position: fixed;
		transform: translate(-50%, -50%);
	}

	.modal-content {
		position: relative;
		width: 500px;
		text-align: center;
	}

	.close {
		position: absolute;
		top: 20px;
		right: 50px;
		cursor: pointer;
		padding: 5px;
		font-size: 20px;
	}

	h2 {
		position: absolute;
		top: 120px;
		left: 75px;
	}

	p {
		position: absolute;
		width: 400px;
		top: 170px;
		left: 44px;
	}

	input {
		background: transparent;
		position: absolute;
		width: 250px;
		height: 35px;
		top: 230px;
		left: 120px;
		border-radius: 20px;
		padding: 0 20px;
	}

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: var(--dark-blue);
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: var(--dark-blue);
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: var(--dark-blue);
	}

	button {
		position: absolute;
		top: 280px;
		left: 200px;
		border-radius: 20px;
		padding: 10px 20px;
		background-color: var(--pink);
		color: white;
		cursor: pointer;
		border: none;
		transition: box-shadow 0.4s;
	}

	button:hover {
		box-shadow: 0 0 2px 1px var(--dark-blue);
	}
</style>
