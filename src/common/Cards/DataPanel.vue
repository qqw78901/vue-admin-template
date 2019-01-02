<template>
    <Card class="data-panel">
        <h4 class="text-center">{{title}}</h4>
        <section class="data-number-pane">
            <h3 class="text-center">{{number}}</h3>
            <template v-if="type==='up'">
                <b class="green">
                    <Icon type="md-arrow-round-up" color="green" />{{percent}}
                </b>
            </template>
            <template v-else-if="type==='down'">
                <b class="red">
                    <Icon type="md-arrow-round-down" color="red" />{{percent}}
                </b>
            </template>

        </section>
    </Card>
</template>

<script>
/**
 * 
 */
export default {
    name: "DataPanel",
    props: {
        title: String,
        number: Number,
        percent: String,
        type: {
            type: String,
            validator(value) {
                return ['up', 'down'].indexOf(value) !== -1
            }
        }
    },
    methods: {
        loadData(params) {
           
        }
    },
    created() {
        this.$on('reSearch', this.loadData)
    }
}
</script>

<style scoped>
.data-panel {
  width: 390px;
  height: 120px;
  margin-left: 10px;
  margin-right: 10px;
}
.data-panel h3 {
  margin-right: 8px;
}
.data-number-pane {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
