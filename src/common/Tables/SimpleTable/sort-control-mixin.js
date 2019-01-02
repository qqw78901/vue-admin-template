/*
 * 排序
 * */
export default {

    data(){
        return {
            sortColumns: {}
        }
    },
    methods: {
        // 是否允许排序
        enableSort(val){
            return !!val;
        },
        // 初始化/源数据改变时排序
        getSortData(data){
            let result=data;
            this.tableHead.forEach(item=>{
                const {key,sortable}=item;
                if(!!key&&!!sortable){
                    result = this.sortData(item,this.sortColumns[key],result)
                }
            });
            return result;
            
        },
        // 允许排序的列集合
        setSortColumns(){
            // var self = this, sortColumns = {};
                // titleRowsToSortInfo = [];

            // if (self.header.length > 0) {
            //     titleRowsToSortInfo = self.header.filter(function (row) {
            //         return !!row.sortable;
            //     })
            // }

            // let collection = titleRowsToSortInfo.length > 0 ? titleRowsToSortInfo : self.header;

            // titleRowsToSortInfo.forEach(function (item, index) {
            //     if (self.enableSort(item.sortable)) {
            //         sortColumns[item.key] = item.orderBy;
            //     }
            // })

            // this.sortColumns = sortColumns;
            // this.singleSortInit();
        },

        // 获取当前排序规则
        getCurrentSort(field){
            return this.sortColumns[field];
        },

        // 排序控制
        sortControl(headItem,orderBy){
            let {key,sortable}=headItem;
            if (this.enableSort(sortable)) {
                this.$set(this.sortColumns,key,orderBy)
                if (!this.multipleSort){
                    for (var col in this.sortColumns) {
                        if (col !== key) {
                            this.sortColumns[col] = '';
                        }
                    }
                }
                this.sortData(headItem,orderBy,this.dataClone);
                this.$emit('sort-change', this.sortColumns);
            }

        },

        // 单排时只允许保留第一个排序规则（‘asc’或者‘desc’）
        // singleSortInit(){

        //     var self = this,
        //         result = false;

        //     if (!self.multipleSort && self.sortColumns) {

        //         for (var col in self.sortColumns) {

        //             if (result) {

        //                 self.sortColumns[col] = '';
        //             }
        //             result = true;
        //         }
        //     }
        // },
        sortData (headItem, type,data) {
            const {key,sortMethod} = headItem;
            // console.log(type)
            return data.sort((a, b) => {
                // console.log(a[key],b[key])
                if (sortMethod) {
                    return sortMethod(a[key], b[key], type,a,b);
                } else {
                    if (type === 'asc') {
                        return a[key] > b[key] ? 1 : -1;
                    } else if (type === 'desc') {
                        return a[key] < b[key] ? 1 : -1;
                    }
                }
            });
           
        },

        // 对外暴露的方法（重置排序规则）
        resetOrder(){

            this.setSortColumns();

            this.$emit('sort-change', this.sortColumns);
        }
    }
}