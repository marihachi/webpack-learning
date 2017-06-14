<fugu>
	<p>🐡( '-' 🐡 )ﾌｸﾞﾊﾟﾝﾁ{ after }</p>
	<button onclick={ add }>ふぐ！</button>
	<script>
		this.after = '';

		add() {
			this.after += '!';

			// WebSocketでメッセージを送る
			opts.ws.send(`fugu punch${this.after}`);

			this.update();
		}
	</script>
</fugu>
