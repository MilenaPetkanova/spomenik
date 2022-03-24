<template>
	<div class="letter-post h-full">
		<div class="letter-post__heading">
			<div class="container flex justify-between py-2 pr-1">
				<span class="flex">
					<div v-if="shownLetter.created_on" class="flex items-center mr-6">
						<font-awesome-icon icon="calendar" size="xs" />
						<p class="text-sm ml-2">{{ $moment(shownLetter.created_on).format('LL') }}</p>
					</div>
				</span>
				<ButtonDropdown 
					icon="ellipsis-vertical"
					:isOpen="isMenuShown" 
					classes="is-tertiary is-icon ml-3"
					@toggle-is-open="toggleMenu"
				>
					<template v-slot:list>
						<ul class="dropdown__elements flex flex-col">
							<li class="dropdown__element">
								<Button 
									class="dropdown__btn-edit"
									classes="is-tertiary"
									label="Редактирайте">
								</Button>
							</li>
							<li class="dropdown__element">
								<Button 
									class="dropdown__btn-delete"
									classes="is-tertiary"
									label="Изтрийте">
								</Button>
							</li>
							<li class="dropdown__element">
								<Button 
									class="dropdown__btn-share"
									classes="is-tertiary"
									label="Споделете">
								</Button>
								<Button 
									class="dropdown__btn-copy-link"
									classes="is-tertiary"
									label="Копирайте линка">
								</Button>
							</li>
						</ul>
					</template>
				</ButtonDropdown>
			</div>
		</div>
		<div class="letter-post__body">
			<div class="container py-2">
				<div class="letter-post__content text-left" v-html="shownLetter.content"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	data() {
		return {
			isMenuShown: false,
		}
	},
	computed:{
		...mapGetters('letters', ['shownLetter']),
	},
	methods: {
		toggleMenu(state) {
			this.isMenuShown = state
		}
	}
}
</script>
