<template>
	<div class="person-container">
		<section class="header-box">
			<img :src="headerImg" class="headerImg">
			<p class="headerName">{{ $store.state.authorName }}</p>
		</section>
		<section class="classify-box">
			<div class="classify" @click="viewDetail(opt.value)" v-for="(opt, index) in classify" :key="index">
				<p class="class-num">{{ opt.value }}</p>
				<p class="class-name">{{ opt.label }}</p>
			</div>
		</section>
		<section>
			<ul class="my-sources-box">
				<li v-for="(opt, index) in $store.state.mySources" :key="index">
					<Poptip v-if="index == 1" :title="$store.state.myEmail" :content="opt.value">
						{{ opt.name }}
					</Poptip>
					<a :href="opt.target" target="_blank" v-else>{{ opt.name }}</a>
				</li>
			</ul>
		</section>
		<section>
			<div class="recommendTitle">
				<Icon class="recommendIcon" type="ios-link" />
				<span>{{ $store.state.recommendReading }}</span>
			</div>
			<div class="recommendContent">
				<a :href="opt.url" v-for="(opt, index) in $store.state.recommendUrls" :key="index" target="_blank">{{ opt.name }}</a>
			</div>
		</section>
		<section>
			<div class="timeClass">
				当前时间：{{ currentTime | formatDate }}
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data: () => ({
		headerImg: require('static/mylove.jpg'),
		classify: [{
			value: 0,
			label: '日志'
		}, {
			value: 0,
			label: '分类'
		}, {
			value: 0,
			label: '标签'
		}],
		currentTime: '',
		setTime: null
	}),
	mounted () {
		this.currentTime = Number(new Date())
		this.setTime = setInterval(() => {
			this.currentTime = Number(new Date())
		}, 1000)
	},
	methods: {
		viewDetail (val) {
			if (val === 0) {
				this.$Message.warning('没有更多了')
			}
		}
	},
	beforeDestroy () {
		clearInterval(this.setTime)
	}
}
</script>

<style>
	.person-container {
		padding: 15px 0;
	}

	.header-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.headerImg {
		display: block;
		width: 110px;
		height: 110px;
		border: 2px double #444;
		padding: 2px;
	}

	.headerName {
		color: #fff;
		padding-top: 5px;
	}

	.classify-box {
		display: flex;
		justify-content: space-between;
		padding: 0 70px;
	}

	.classify {
		text-align: center;
	}

	.classify:hover p {
		color: #fff;
		transition: all .25s;
	}

	.classify:not(:last-child) {
		border-right: 1px solid #444;
		padding-right: 15px;
	}

	.classify p {
		color: #aaa;
		cursor: pointer;
		transition: all .25s;
	}

	.class-name {
		font-size: 15px;
	}

	.class-num {
		font-weight: bold;
		font-size: 18px;
	}

	.my-sources-box {
		display: flex;
		justify-content: space-between;
		padding: 20px 80px;
	}

	.my-sources-box li {
		color: #aaa;
		cursor: pointer;
		transition: all .25s;
		border-bottom: 1px solid #555;
	}

	.my-sources-box li:before {
		display: inline-block;
		vertical-align: middle;
		content: '';
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: #75fbd7;
		margin-right: 8px;
	}

	.my-sources-box li a, .my-sources-box li div {
		color: #aaa;
		transition: all .25s;
	}
	
	.my-sources-box li a:hover,.my-sources-box li div:hover {
		color: #fff;
		transition: all .25s;
	}

	.recommendTitle {
		text-align: center;
		color: #666;
	}

	.recommendIcon {
		color: #666;
		margin-right: 5px;
	}

	.recommendIcon:before, .recommendTitle span {
		color: #999;
	}

	.recommendContent {
		padding: 30px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}

	.recommendContent a {
		margin: 6px 10px;
		color: #aaa;
		font-size: 14px;
		border-bottom: 1px solid #555;
	}

	.timeClass {
		position: absolute;
		bottom: 20px;
		left: 40px;
		color: #666;
	}

</style>