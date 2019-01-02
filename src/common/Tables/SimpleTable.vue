<template>
  <div class="table-responsive no-padding">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th v-for="item in tableHead" :key="item.key">
            {{item.title}}
          </th>
        </tr>
      </thead>
      <!-- 表格内容 -->
      <tbody>
        <tr v-for="(tr,trIndex) in data" :key="trIndex">
          <td v-for="(th,key) in tableHead" :key="key">
            <slot :name="th.key" v-bind="tr">
              <div v-html="format(tr,th)"></div>
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
export default {
  name: "SimpleTable",
  props: {
    header: {
      type: Array,
    },
    data: {
      type: Array

    }
  },
  computed: {
    tableHead() {
      try{
        return this.header.filter(item=>!item.hide)
      }catch(e){
        console.error(e);
        return [];
      }
    }
  },
  methods: {

    format(tr, headerConfig) {
      const { key, format } = headerConfig
      if (typeof headerConfig.format === "function") {
        const translate = headerConfig.format.call(this, tr, this.data.slice(0));
        return translate
      }
      return tr[headerConfig.key];

    }
  }

}
</script>
