<template>
    <div>
        <div class="padding-20 " v-if="searchBar"  :class="{box:inBox}">
            <div class="box-body ">
                <div class="row">
                    <div class="col-sm-12">
                        <Form :label-width="80" inline v-model="query">
                            <FormItem :key="index" :prop="item.key" :label="item.title" v-for="(item,index) in tableHeaders" v-if="item.searchable">
                                <!--<template></template>-->
                                <Input type="text" v-model="query[item.key]" v-if="typeof item.format!=='string'"></Input>
                                <DatePicker :type="item.format" v-model="formItem.date" v-else></DatePicker>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
            <div class="box-footer no-border">
                <figure class="pull-right">
                    <Button type="primary" @click="search" class="margin-r-5">查询</Button>
                    <Button type="info" @click="resetSearch">清除</Button>
                </figure>
            </div>
        </div>
        <div class="no-border padding-20" :class="{box:inBox}">
            <!-- /.box-header -->
            <div class="box-body">
                <label v-if="addBtn">
                    <button class="btn btn-primary" @click="showModals('add')">添加</button>
                </label>
                <div class="row">
                    <div class="col-sm-12">
                        <Table :loading="loading" border :columns="column" :data="data" class="table table-bordered table-striped dataTable">
                        </Table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 text-right">
                        <Page :total="pagnation.pageTotal" :page-size-opts="pageSizeOpts" :page-size="pagnation.pageSize" show-sizer show-elevator @on-change="changePageNum" @on-page-size-change="changePageSize"></Page>
                    </div>
                </div>
            </div>
            <!-- /.box-body -->
            <!-- /.table-modals -->

            <!-- /.edit-modal -->
            <Modal v-model="modalsVisible" :title="tableName" @on-ok="saveChange">
                <Form ref="formInline" :model="editedData" inline :label-width="120">
                    <div class="row">
                        <div v-for="(item,key) in column" :key="item.key">
                            <FormItem :key="key" :label="item.title" class="col-sm-10" :prop="item.key" v-if="item.editable">
                                <Input v-model="editedData[item.key]"></Input>
                            </FormItem>
                        </div>
                    </div>
                </Form>
            </Modal>
             <!--<slot name="btns"></slot> -->
            <!-- /.edit-table -->

            <!-- <TableModals :modalsdata="modalsdata" v-model="modalsVisible" :columns="column" /> -->

        </div>
    </div>


</template>
<script>
/**
 * 数据表格
 *
 */
const cloneDeep = require('lodash/cloneDeep');
export default {
    name: 'DataTable',
    props: {
        queryUrl: String,
        removeKey: String,
        addUrl: String,
        editUrl: String,
        title: String,
        inBox:{
            type:Boolean,
            require:false,
            default:true
        },
        removeUrl: String,
        // 分页页码参数
        pageNumberParamer: String,
        pageSizeParamer: String,
        pageSizeDefault:{
          type:Number,
          default:10
        },
        //分页配置
        pageSizeOpts:{
          type:Array,
          default:function () {
            return [10,20,30,40]
          }
        },
        totalCountsKey: {
            type: String,
            required: false
        },
        totalPageKey: {
            type: String,
            required: false
        },
        totalKey: String,
        rowsKey: String,
        tableHeaders: Array,
        addBtn: Boolean,
        // 是否有删除按钮
        editBtn: Boolean,
        // 是否有删除按钮
        removeBtn: Boolean,
        // 隐藏操作按钮
        hideOperate: Boolean,
        // 编辑
        editOption: Object,
        //是否创建搜索
        searchBar: {
            type: Boolean,
            default: true
        },
        inititalLoad: {
            type: Boolean,
            default: true
        }
    },
    data() {
        let editedData = {}
        let query = {};
        this.tableHeaders.forEach(item => {
            editedData[item.key] = null;
            if (item.searchable) {
                query[item.key] = null;
            }
        });
        return {
            tableName: this.title,
            data: [],
            pagnation: {
                pageNo: 1,
                pageSize: this.pageSizeDefault,
                pageTotal: 1,
            },
            query,
            // modal
            modalsVisible: false,
            editedIndex: -1,
            loading: false,
            editedData: editedData
        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "新建" : "编辑";
        },
        column() {
            let editedData = {};
            let query = {};
            const tableHeaders = cloneDeep(this.tableHeaders);
              tableHeaders.forEach(item => {
                editedData[item.key] = null;
                if (item.searchable) {
                    query[item.key] = null;
                }
                if (item.format) {
                    this.setDataRender(item);
                }
                if(item.children&&item.children.length){
                  item.children = item.children.filter(item=>!item.hide);
                  item.children.forEach(child=>{
                     if(child.format){
                       this.setDataRender(child);
                     }
                  })
                }
            });
            const column = [...tableHeaders.filter(item=>!item.hide)];
          /**
           * 额外的操作列
           * @type {{title: string, key: string, width: number, align: string, render: (function(*, *=))}}
           */
            const operation = {
                title: '操作',
                key: 'action',
                width: 250,
                align: 'center',
                render: (h, params) => {
                    let btns = [];
                    this.editBtn && btns.push(h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                // 改变弹窗状态
                                this.showModals('edit', params);
                            }
                        }
                    }, '修改'));
                    this.removeBtn && btns.push(h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        on: {
                            click: () => {
                                this.$Modal.confirm({
                                    title: '确认删除',
                                    content: '是否删除该项内容？',
                                    okText: '确认删除',
                                    loading: true,
                                    onOk: () => {
                                        this.removeItem(params)

                                    }
                                })
                            }
                        }
                    }, '删除'));
                    if(this.$scopedSlots&&this.$scopedSlots.btns){
                      console.log(this.$scopedSlots.btns(params));
                        btns=btns.concat(this.$scopedSlots.btns(params)[0].children)
                    }
                    return h('div', btns);
                }
            };
            if (!this.hideOperate) {
                column.push(operation)
            };
            console.log(column.children)
            return column;
        }

    },
    watch: {
        pagnation: {
            deep: true,
            handler(newVal, oldValue) {
            },
        }
    },
    methods: {
        setDataRender(item) {
            const { format } = item;
            if (typeof format === "string") {
                let formatter = '';
                switch (format) {
                    case 'date':
                        formatter = '$fd'; break;
                    case 'dateTime':
                        formatter = '$fdt'; break;
                    case 'time':
                        formatter = '$ft'; break;
                  case "template":
                    return this.tryRenderBySlots(item);break;
                  default:
                        formatter = '$fdt';
                }
                item.render = (createElement, params) => {
                    return createElement('span', this[formatter](params.row[item.key]));
                }
            } else if (typeof format === "function") {
                item.render = (createElement, params) => {
                  const translate = item.format.call(this, params.row, createElement);
                  return  createElement('div', {
                    domProps: {
                      innerHTML: translate
                    },
                  });
//                    const result =  createElement('div', {
//                        domProps: {
//                            innerHTML: translate
//                        },
//                    });
//                  return this.renderBySlots(createElement,params,item);
                }
//                item.render=(createElement,params)=>this.renderBySlots(createElement,params,item.key)
            }
        },
      tryRenderBySlots(item){
          try {
            const slots=this.$scopedSlots;
            if(!slots||!slots.customItems){
              throw new Error('no slots');
            }
            item.render=(createElement,params)=>{
              const customItems = slots.customItems(params);
              const element = customItems[0].children.find(node=>{
                console.log(node);
                return  node.key===item.key;
              });
              console.log('element');
              console.log(element);
              return element.children||createElement('div',element.data);
            };
          }catch (e){
          }
        },
        resetSearch() {
            this.query = {};
            this.loadPageData();
        },
        showModals(type, params) {
            if (type === 'add') {
                for (let key in this.editedData) {
                    this.editedData[key] = null;
                }
                this.editedIndex = -1;
            } else {
                Object.assign(this.editedData, this.data[params.index]);
                this.editedIndex = params.index;
            }
            this.modalsType = type;
            this.changeModalsVisible(true);
        },
        removeItem({ row }) {
            const key = row[this.removeKey];
            this.$http(this.removeUrl, { [this.removeKey]: key }, 'post').then(resp => {
                this.bsCallBack(resp);
                this.$Modal.remove();
            });
        },
        saveChange() {
            const { editOption } = this;
            if (this.editedIndex < 0) {
                //增加
                const addData = {};
                for (let item in this.editedData) {
                    if (this.editedData[item] !== null) {
                        addData[item] = this.editedData[item];
                    }
                };
                this.$http(this.addUrl, this.getBsEditData(addData), editOption.type).then(resp => {
                    this.loadPageData();
                    this.bsCallBack(resp);
                });
            } else {
                this.$http(this.editUrl, this.getBsEditData(this.editedData), editOption.type).then(resp => {
                    this.loadPageData();
                    this.bsCallBack(resp);
                });
            }
        },
        loadPageData(extendQuery) {
            const { queryUrl, query, pageNumberParamer, pageSizeParamer, rowsKey, totalCountsKey, totalPageKey } = this;
            let dataPost = Object.assign({}, {
                [pageNumberParamer]: this.pagnation.pageNo,
                [pageSizeParamer]: this.pagnation.pageSize
            }, query);
            if (typeof extendQuery !== "undefined") {
                dataPost = Object.assign({}, dataPost, extendQuery);
            }
            Object.keys(dataPost).forEach(key=>{
                if(dataPost[key]===null||dataPost[key]===""){
                    delete dataPost[key];
                }
            });
            console.log(dataPost);
            this.loading = true;
            this.$http(queryUrl, dataPost).then((resp) => {
                this.loading = false;
                let dataList, pageTotal;
                dataList = this.getObjectValue(resp, rowsKey);
                if (totalCountsKey) {
                    pageTotal = this.getObjectValue(resp, totalCountsKey);
                } else {
                    pageTotal = this.getObjectValue(resp, totalPageKey) * this.pagnation.pageSize;
                }
                Object.assign(this, {
                    data: dataList,
                });
                this.pagnation.pageTotal = pageTotal;
                this.$emit('onDataLoaded',resp);
            })
        },

        bsCallBack(resp) {
            if (resp.status == 200) {
                this.$Message.success(resp.message);
            } else {
                this.$Message.error(resp.message);
            };
            this.loadPageData();

        },
        search() {
            this.pagnation.pageNo = 1;
            this.loadPageData();
        },
        load(params) {
            this.pagnation.pageNo = 1;
            this.query = params;
            this.loadPageData(params);
        },
        /**
         * util
         */
        getObjectValue(obj, key) {
            let result = obj;
            const arr = key.split('.');
            arr.forEach(item => {
                result = result[item];
            });
            return result;
        },
        /**
         * util
         */
        getBsEditData(sourseData) {
            const { editOption } = this;
            let dataPost;
            if (editOption && editOption.editPostType === 'string') {
                dataPost = {
                    [editOption.typeStringKey]: JSON.stringify(sourseData)
                }
            } else {
                dataPost = sourseData
            }
            return dataPost;
        },
        /**
         * 修改页码时的操作
         * @param pageNum
         */
        changePageNum(pageNum) {
            this.pagnation.pageNo = pageNum;
            this.loadPageData();
        },
        changePageSize(pageSize) {
            this.pagnation.pageSize = pageSize;
            this.loadPageData();
        },
        changeModalsVisible(visible) {
            this.modalsVisible = visible;
        }

    },
    mounted() {
        if (this.inititalLoad) {
            this.loadPageData();
        }
        console.log(this.$scopedSlots)
    }
}
</script>

<style>
  .ivu-table-tbody .no-padding .ivu-table-cell{
      padding:0;
      height: 100%;
  }
  .ivu-table-tbody .no-padding .ivu-table-cell >div{
    height: 100%;
  }
</style>
