<template>
	<header class="header">
		<div class="header__container container flex justify-between items-center py-4">
			<Logo />
			<div class="header__actions flex">
				<Dropdown 
					:btnIcon="['fas', 'plus']" 
					btnClasses="is-secondary"
					:isOpen="isCreateMenuOpen" 
					@toggle-is-open="toggleCreateMenu"
				>
					<template v-slot:list>
						<ul class="dropdown__elements flex flex-col">
							<li class="dropdown__element border-b-2 border-blue-custom-400">
								<button class="dropdown__btn-logout btn is-tertiary">
									<font-awesome-icon :icon="['fas', 'photo-film']" />
									<span class="ml-1">Добавете снимка / видео</span>
								</button>
							</li>
							<li class="dropdown__element">
								<button class="dropdown__btn-logout btn is-tertiary">
									<font-awesome-icon :icon="['fas', 'book']" />
									<span class="ml-1">Добавете писмо</span>
								</button>
							</li>
						</ul>
					</template>
				</Dropdown>
				<Dropdown 
					:btnIcon="['fas', 'bars']" 
					:isOpen="isMainMenuOpen" 
					btnClasses="is-secondary ml-3"
					@toggle-is-open="toggleMainMenu"
				>
					<template v-slot:list>
						<ul class="dropdown__elements flex flex-col">
							<li 
								class="dropdown__element border-b-2 border-blue-custom-400" 
								v-for="(element, index) in menuElements" 
								:key="index"
							>
								<button class="dropdown__btn-redirect btn is-tertiary">
									<font-awesome-icon :icon="element.icon" class="mr-1" />
									<NuxtLink 
										:to="element.route" 
										v-on:click.native="toggleMainMenu(false)"
									>
										{{element.label}}
									</NuxtLink>
								</button>
							</li>
							<li class="dropdown__element">
								<button class="dropdown__btn-logout btn is-tertiary">
									<font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
									<span class="ml-1">Изход</span>
								</button>
							</li>
						</ul>
					</template>
				</Dropdown>
			</div>
		</div>
	</header>
</template>

<script>
export default {
  data() {
    return {
      menuElements: [
        {
          route: '/gallery',
          label: 'Галерия',
          icon: ['fas', 'photo-film'],
          type: 'primary',
        },
        {
          route: '/letters',
          label: 'Писма',
          icon: ['fas', 'book'],
          type: 'primary',
        },
      ],
			isMainMenuOpen: false,
			isCreateMenuOpen: false,
    }
  },
	methods: {
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
