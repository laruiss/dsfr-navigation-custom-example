<script lang="ts" setup>
import { useRoute } from 'vue-router'

const id = useRoute().params.id
</script>

<template>
  Demarche Dossier {{ id }}
</template>
