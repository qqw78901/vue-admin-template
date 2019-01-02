<template>
  <div class="table-responsive no-padding">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th v-for="item in tableHead" :key="item.key">
            <span v-html="item.title"></span>
            <span class="ivu-table-sort" v-if="enableSort(item.sortable)">
                <i 
                 @click.stop="sortControl(item,'asc')"
                :class="['ivu-icon','ivu-icon-md-arrow-dropup',getCurrentSort(item.key) ==='asc' ? 'on':'']"></i> 
                <i 
                           @click.stop="sortControl(item,'desc')"
                :class="['ivu-icon','ivu-icon-md-arrow-dropdown',getCurrentSort(item.key) ==='desc' ? 'on':'']" :title="getCurrentSort(item.key)"></i>
            </span>
            <!-- <span @click.stop="sortControl(col.field)" class="v-table-sort-icon" v-if="enableSort(col.orderBy)">
                    <i :class='["v-icon-up-dir",getCurrentSort(col.field) ==="asc" ? "checked":""]'></i>
                    <i :class='["v-icon-down-dir",getCurrentSort(col.field) ==="desc" ? "checked":""]'></i>
                  </span> -->
          </th>
        </tr>
      </thead>
      <!-- 表格内容 -->
      <tbody>
        <tr v-for="(tr,trIndex) in dataClone" :key="trIndex">
          <td v-for="(th,key) in tableHead" :key="key">
            <slot :name="th.key" v-bind="tr">
              <div v-html="format(tr,th,trIndex)"></div>
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  /**
    UI：bootstrap
    描述：简单渲染的表格
    特点：无分页；响应式，缩小会自动出横向滚动条
    API:
   */
  import sortControlMixin from './SimpleTable/sort-control-mixin.js'
  import cloneDeep from 'lodash/cloneDeep'
  export default {
    name: "SimpleTable",
    mixins:[sortControlMixin],
    props: {
      header: {
        type: Array,
      },
      data: {
        type: Array
      }
    },
    data() {
      return {
        dataClone: cloneDeep(this.data)||[]
      }
    },
    watch:{
      data(newData){
        const data =cloneDeep(newData);
        this.dataClone = this.getSortData(data);
      }
    },
    computed: {
      tableHead() {
        try {
          return this.header.filter(item => !item.hide)
        } catch (e) {
          console.error(e);
          return [];
        }
      }
    },
    created(){
        // this.setSortColumns();
    },
    methods: {
      format(tr, headerConfig,index) {
        const {
          key,
          format
        } = headerConfig
        if (typeof headerConfig.format === "function") {
          const translate = headerConfig.format.call(this, tr,index,this.data.slice(0));
          return translate
        }
        return tr[headerConfig.key];
      }
    }
  }
</script>
