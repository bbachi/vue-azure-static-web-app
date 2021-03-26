<template>
    <div class="header"
        v-bind:style="{ backgroundColor: settings.headerColor, color: settings.headerTitleColor }"
    >
        Azure Static Web Apps With Vue Demo
    </div>
</template>

<script>
    
    export default {
        name: 'Header',
        props: ['appSettings'],
        data() {
            return {
                tasks: [],
                settings: {headerColor: this.appSettings.headerColor, headerTitleColor: this.appSettings.headerTitleColor}
            }
        }
    }
</script>