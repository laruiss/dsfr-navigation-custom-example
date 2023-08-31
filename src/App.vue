<script setup lang="ts">
import { ref } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'

import ReloadPrompt from '@/components/ReloadPrompt.vue'
import { useRoute } from 'vue-router'

const serviceTitle = 'Service'
const serviceDescription = 'Description du service'
const logoText = ['Ministère', 'de l’intérieur']

const quickLinks = [
  {
    label: 'Home',
    path: '/',
    icon: 'ri-home-4-line',
    iconAttrs: { color: 'var(--red-marianne-425-625)' },
  },
  {
    label: 'À propos',
    path: '/a-propos',
    class: 'fr-fi-user-line',
  },
]
const searchQuery = ref('')

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW()

const close = () => {
  offlineReady.value = false
  needRefresh.value = false
}

const expandedMenuId = ref()
const activeSubMenu = ref()
const toggle = (id: string | undefined) => {
  if (id === expandedMenuId.value) {
    expandedMenuId.value = undefined
    return
  }
  expandedMenuId.value = id
}

const route = useRoute()

const links = [
  {
    text: 'Sous-menu 1',
    to: '/submenu-id-1',
    id: 'submenu-1',
  },
  {
    text: 'Sous-menu 2',
    to: '/submenu-id-2',
    id: 'submenu-2',
  },
  {
    text: 'Sous-menu 3',
    to: { name: 'SubMenu3' },
    id: 'submenu-3',
  },
]
</script>

<template>
  <DsfrHeader
    v-model="searchQuery"
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
    show-search
  />
  <div class="fr-container">
    <DsfrNavigation>
      <DsfrNavigationItem
        :expanded-id="expandedMenuId"
      >
        <DsfrNavigationMenuLink
          :to="{name: 'Menu1'}"
          text="Lien menu 1"
          @toggle-id="toggle($event)"
        />
      </DsfrNavigationItem>
      <DsfrNavigationItem
        :expanded-id="expandedMenuId"
      >
        <DsfrNavigationMenuLink
          :to="{name: 'Menu2'}"
          text="Lien menu 2"
          @toggle-id="toggle($event)"
        />
      </DsfrNavigationItem>
      <DsfrNavigationItem
        :expanded-id="expandedMenuId"
      >
        <DsfrNavigationMenuLink
          :to="{name: 'Menu3'}"
          text="Lien menu 3"
          @toggle-id="toggle($event)"
        />
      </DsfrNavigationItem>
      <DsfrNavigationItem
        :expanded-id="expandedMenuId"
        :active="activeSubMenu === 'menu-id-4'"
        @click="activeSubMenu = activeSubMenu === 'menu-id-4' ? undefined : 'menu-id-4'"
      >
        <DsfrNavigationMenu
          title="Menu 4 bis"
          :links="links"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        />
      </DsfrNavigationItem>
    </DsfrNavigation>
    <router-view />
    <div class="flex flex-column h-full">
      <p>
        <a
          class="fr-link"
          type="button"
          icon="ri-github-fill"
          href="https://github.com/laruiss/dsfr-navigation-custom-example"
        >
          Aller au code source
          <VIcon name="ri-github-fill" />
        </a>
      </p>
    </div>
  </div>

  <ReloadPrompt
    :offline-ready="offlineReady"
    :need-refresh="needRefresh"
    @close="close()"
    @update-service-worker="updateServiceWorker()"
  />
</template>
