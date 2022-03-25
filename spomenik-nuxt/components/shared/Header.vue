<template>
	<header class="header">
		<div class="header__container container flex justify-between items-center py-4">
			<Logo />
			<div class="header__actions flex">
				<ButtonDropdown 
					icon="plus"
					classes="is-secondary"
					:isOpen="isCreateMenuOpen" 
					@toggle-is-open="toggleCreateMenu"
				>
					<template v-slot:list>
						<ul class="dropdown__elements flex flex-col">
							<li class="dropdown__element border-b-2 border-blue-custom-400">
								<Button 
									class="dropdown__btn-create"
									classes="is-tertiary"
									icon="photo-film"
									label="Добавете снимка / видео">
								</Button>
							</li>
							<li class="dropdown__element">
								<Button 
									class="dropdown__btn-create"
									classes="is-tertiary"
									icon="book"
									label="Добавете писмо">
								</Button>
							</li>
						</ul>
					</template>
				</ButtonDropdown>
				<ButtonDropdown 
					icon="user"
					:isOpen="isMainMenuOpen" 
					classes="is-secondary ml-3"
					@toggle-is-open="toggleMainMenu"
				>
					<template v-slot:list>
						<ul class="dropdown__elements flex flex-col">
							<li class="dropdown__element">
								<Button 
									class="dropdown__btn-redirect"
									classes="is-tertiary"
									icon="arrow-right-from-bracket"
									label="Изход"
									@click.native="logout(); $router.push('auth/login')">
								</Button>
							</li>
						</ul>
					</template>
				</ButtonDropdown>
			</div>
		</div>
	</header>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  data() {
    return {
			isMainMenuOpen: false,
			isCreateMenuOpen: false,
    }
  },
	methods: {
		...mapActions('auth', ['logout']),
		toggleMainMenu(state) {
			this.isCreateMenuOpen = false
			this.isMainMenuOpen = state
		},
		toggleCreateMenu(state) {
			this.isMainMenuOpen = false
			this.isCreateMenuOpen = state
		},
	}
}
</script>
