<template>
    <div>
        Testing component look
    </div>
</template>

<script>
import store from "../store/index"

export default {
    name: "Input",
    store,
    data() {
        return {
            newItem: ''
        }
    }
}
</script>