<template xmlns:style="http://www.w3.org/1999/xhtml">
	<q-layout view="Lhr Lpr lfr">
		<!--<q-header style="background-color: black"  elevated>
			<div class=" banner" >
				<q-img
				contain
					:src="img_url"
					class="banner-img"
				/>
			</div>
			<div class="row" >
				<q-toolbar  class=" text-white q-my justify-center" style="background-color:#404040" >
					<q-btn-toggle
						v-model="model"
						flat
						
						stretch
						toggle-color="yellow"
						:options="[
							{label: 'Home', value: 'one'},
							{label: 'Links', value: 'two'},
							{label: 'About', value: 'three'},
							{label: 'Contact', value: 'three'}
						]"
					/>
				</q-toolbar>
			</div>
		</q-header>-->
		
		<!--view directives-->
		<q-page-container >
			<div class=" col main-row" >
				<div class="col dead bg-dark"/>
				<div class="col main-col">
					
					<q-header>
						<div class="row miheader">
							<div class="col dead bg-dark"/>
							<div class="bg-black mibanner" >
								<div class="row banner">
									<q-img
									contain
									:src="img_url"
									class="banner-img"
									/>
								</div>
								<div class="row"  >
									<q-toolbar  class=" text-white q-my justify-center" style="background-color:#404040" >
										<q-btn-toggle
											v-model="model"
											flat					
											stretch
											toggle-color="yellow"
											:options="[
											{label: 'Home', value: 'one'},
											{label: 'Links', value: 'two'},
											{label: 'About', value: 'three'},
											{label: 'Contact', value: 'three'}
											]"
										/>
									</q-toolbar>
								</div>
							</div>
							<div class="col dead bg-dark"/>
						</div>
					</q-header>
					<router-view />
					
				</div>
				

				<div class="col dead bg-dark"/>

			</div>
							 
		</q-page-container>

	</q-layout>
	
</template>

<script>
	export default {
		name: 'MainLayout',
		components: {  },
		data () {
				return {
						img_url: 'banner1.png'
				}
		}
}
</script>

<style>
	.mibanner
	{
		width: 61.5em;
		
	}
	.banner-img{
		max-height: 7em;
	}


	

	@media screen and (max-width: 768px) {
		.banner{
				min-width: 100%;
		}
		.banner-img{
				display: none;
		}
		.dead{
			display: none;
		}


}


</style>
