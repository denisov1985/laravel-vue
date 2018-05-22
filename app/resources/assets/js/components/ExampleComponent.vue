<template>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Hello World
            </h1>
            <p class="subtitle">
                My first website with <strong>Bulma</strong>!
            </p>
            <section>
                <b-dropdown hoverable>
                    <button class="button is-info" slot="trigger">
                        <span>Hover me!</span>
                        <b-icon icon="menu-down"></b-icon>
                    </button>

                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else</b-dropdown-item>
                </b-dropdown>
            </section>
        </div>
    </section>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
