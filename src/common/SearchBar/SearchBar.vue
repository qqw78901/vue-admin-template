<template>
    <div class="box">
        <div class="box-header with-border" v-if="title">
          {{title}}
        </div>
        <div class="box-body padding-2">
            <div class="row">
                <div class="col-sm-12">
                    <Form :label-width="80" inline v-model="query">
                        <FormItem :prop="item.key" :label="item.title" v-for="(item,index) in header">
                            <template></template>
                            <DatePicker :type="item.format" v-model="query[item.key]" v-if="item.type==='date'"></DatePicker>
                            <template v-else-if="item.type==='select'">
                                <Select v-model="query[item.key]" filterable>
                                    <Option v-for="options in item.selectList" :value="options.value" :key="options.value" :label="options.text"></Option>
                                </Select>
                            </template>
                            <Input type="text" v-model="query[item.key]" v-else></Input>
                        </FormItem>
                      <figure class="pull-right" v-if="btn">
                        <Button type="primary" @click="search" class="mr-2">查询</Button>

                        <Button type="info" @click="resetSearch" >清除</Button>

                      </figure>
                    </Form>
                </div>
            </div>
        </div>
        <!--<div class="box-footer">-->
            <!--<figure class="pull-right" v-if="btn">-->
                <!--<Button type="primary" @click="search" class="mr-2">搜索</Button>-->

                <!--<Button type="info" @click="resetSearch" >清除</Button>-->

            <!--</figure>-->
        <!--</div>-->
    </div>
</template>

<script>
const type = ['date', 'dateTime', 'time', 'select'];
/**
 * 搜索框
 */
export default {
    name: 'SearchBar',
    model: {
        prop: 'query',
        event: 'change'
    },
    props: {
        btn:{
            type:Boolean,
            default:true
        },
        title: {
            type: String
        },
        tableHeader: {
            type: Array
        },
        query: {
            type: Object
        }
    },
    data() {
        const header = this.getHeader(this.tableHeader);
        return {
            header,
            formItem: {}
        }
    },
    methods: {
        getHeader(val) {
            const header = [];
            val.forEach(item => {
                if (item.searchable) {
                    header.push({
                        key: item.key,
                        title: item.title,
                        type: item.searchType,
                        selectList: item.selectList
                    });
                }
            });
            return header;
        },
        /**
         * 重置搜索
         */
        resetSearch() {
            this.$emit('change', {});
            this.$emit('resetSearch');
        },
        /**
         * 搜索
         */
        search(){
            this.$emit('search',this.query);
        }
    },
    watch: {
        tableHeader: {
            deep: true,
            handler(val) {
                // 触发表头更新
                this.header = this.getHeader(val);
            }
        },
        query: {
            deep: true,
            handler(val) {
                this.$emit('change', val);
            }
        }
    }
}
</script>

<style scoped>
.mr-2{
    margin-right: 20px;
}
/*todo*/
.box {
  border-top-color: #ffffff;
}
</style>
