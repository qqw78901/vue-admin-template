<template>
  <Card>
    <Tabs
      value="name1"
      :animated="false"
    >
      <TabPane
        label="表格一"
        name="name1"
      >
        <data-table
          title="用户管理"
          :queryUrl="$api.getUserByPage"
          :addUrl="$api.addUser"
          :editUrl="$api.updateUser"
          :removeUrl="$api.deleteUser"
          pageNumberParamer="pageNo"
          pageSizeParamer="pageSize"
          totalCountsKey='data.count'
          rowsKey="data.entitys"
          :tableHeaders="table1.tableHeaders"
          :addBtn="true"
          :editBtn="true"
          :removeBtn="true"
          removeKey="id"
          :searchBar="false"
          :editOption="table1.editOption"
          :inBox="false"
        ></data-table>
      </TabPane>
      <TabPane
        label="表格二"
        name="name2"
      >
        <Row style="background:#eee;padding:20px">
          <data-table
            title="用户管理"
            :queryUrl="$api.getUserByPage"
            :addUrl="$api.addDept"
            :editUrl="$api.updateDept"
            :removeUrl="$api.removeDept"
            pageNumberParamer="pageNo"
            pageSizeParamer="pageSize"
            totalCountsKey='data.count'
            rowsKey="data.entitys"
            :tableHeaders="table1.tableHeaders"
            :addBtn="true"
            :editBtn="true"
            :removeBtn="true"
            removeKey="id"
            :searchBar="true"
            :editOption="table1.editOption"
            :inBox="true"
          ></data-table>
        </Row>

      </TabPane>
    </Tabs>
  </Card>
</template>

<script>
export default {
  name: "PageTable",
  data() {
    return {
      table1: {
        //编辑、增加的前后端交互配置
        editOption: {
          //get或者post
          type: 'post',
          //传参的类型，提供两种类型，string是 entity:json字符串;object是整个object传参
          editPostType: 'string',
          //选填 如果选择了string
          typeStringKey: 'entity'
        },
        tableHeaders: [{
          title: "ID",
          key: "id",
          //该字段是否可添加和编辑
          editable: false,
          //该字段是否可搜索
          searchable: false
        },
        {
          title: "姓名",
          key: "nickname",
          //该字段是否可添加和编辑
          editable: true,
          //该字段是否可搜索
          searchable: true
        },
        {
          title: "创建时间",
          key: "posttime",
          //format 格式化方式
          format: "datetime",
          sortable: true,
          //该字段是否可添加和编辑
          editable: false,
          //该字段是否可搜索
          searchable: false
        }
        ]
      }
    }
  },
}
</script>

<style scoped>
.ivu-tabs {
  overflow: unset;
}
</style>