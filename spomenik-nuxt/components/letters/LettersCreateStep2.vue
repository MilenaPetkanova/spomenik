<template>
	<Modal 
		class="letter-create-s2"
		v-show="shownModal === modalsEnum.LetterCreateStep2" 
		@close-modal="showModal(null)">
		<template v-slot:header>
			<div class="flex items-center justify-between px-1">
				<Button
					class="is-tertiary is-icon"
					icon="xmark"
					@click.native="showModal(null)">
				</Button>
				<span class="flex items-center">
					<Button
						class="is-tertiary is-icon"
						icon="share-nodes"
						@click.native="showModal(modalsEnum.Share)">
					</Button>
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
				</span>
			</div>
		</template>
		<template v-slot:body>
			<LettersDetails />
		</template>
	</Modal>
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
		...mapGetters('modals', ['shownModal', 'modalsEnum']),
	},
	methods: {
    ...mapActions('modals', ['showModal']),
		toggleMenu(state) {
			this.isMenuShown = state
		},
	},
}
</script>
