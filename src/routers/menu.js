/** var Layout =()=>import('../views/layout/layout.vue')可以按需引入路由，相当于
 var  layout=function(){var component = require('xxxx.vue')  return component }
 需要执行到这个function的时候才回去require某个组件
 如果不需要按需加载，直接 import Layout from '../views/layout/layout.vue'
 */
const Layout =()=>import('../views/layout/layout.vue')
const Dashboard =()=>import('../views/dashboard/')
const UserFunction =()=>import('../views/userfunction/userfunction.vue')
const EventDuration =()=>import('../views/duration/duration.vue')
const UserFunctionDetail =()=>import('../views/userfunctionDetail/userfunctionDetail.vue')
const FunnelList =()=>import('../views/funnelSetting/funnelList.vue')
const EventChangeDetail =()=>import('../views/eventChangeDetail/eventChangeDetail.vue')
const EventGroupList =()=>import('../views/eventGroupSetting/eventGroupList.vue')
const EventGroupDetail =()=>import('../views/eventGroupDetail/eventGroupDetail.vue')
const SelfReprotList =()=>import('../views/selfReportSetting/selfReportList.vue')
const SelfReprotDetail =()=>import('../views/selfReportDetail/selfReportDetail.vue')

/**
 * 菜单——应用趋势菜单
 */
const ActiveUser =()=>import('../views/appTrend/ActiveUser.vue')
const NewUser =()=>import('../views/appTrend/NewUser.vue')
const RetainUser =()=>import('../views/appTrend/RetainUser.vue')
const StartUpTimes =()=>import('../views/appTrend/StartUpTimes')
const TopIver =()=>import('../views/appTrend/TopIver')
const TopIverDetail =()=>import('../views/appTrend/TopIverDetail')
const OnlineUser =()=>import("../views/appTrend/OnlineUser")

const ChannelSource =()=>import('../views/channelSource/channelSource.vue')
const InstallChannel =()=>import('../views/channelSource/installChannel.vue')
const InstallChannelDetail =()=>import('../views/channelSource/installChannelDetail.vue')
const TopOuterRef =()=>import('../views/channelSource/topOuterRef.vue')
const TopOuterRefDetail =()=>import('../views/channelSource/TopOuterRefDetail.vue')
const Function =()=>import('../views/userfunction/function.vue')
const Participation =()=>import('../views/participation/Participation.vue')
const OnlineDuration =()=>import('../views/participation/OnlineDuration.vue')
const UseFrequency =()=>import('../views/participation/UseFrequency.vue')
const UseGap =()=>import('../views/participation/UseGap.vue')

/**
 * 终端属性
 */
const Equipment =()=>import('../views/terminal/Equipment.vue')
const Isp =()=>import('../views/terminal/ISP')
const Area =()=>import('../views/terminal/Area')

/**
 * 菜单——设置
 */
const DimTraceKpi =()=>import('../views/setting/dimTraceKpi.vue')

const Index =()=>import('../views/index/index.vue')

var menus = [
  {
    path: '/index',
    name: '产品汇总数据',
    component: Index,
    hidden: true,
    meta: {
      id: 8,
      icon: 'fa-home'
    }
  },
  {
    path: '/dashboard',
    name: '概览',
    component: Dashboard,
    hidden: false,
    meta: {
      id: 8,
      icon: 'fa-globe'
    }
  },
  {
    path: '/appTrend',
    name: '应用趋势',
    component: Layout,
    hidden: false,
    meta: {
      id: 8,
      icon: 'fa-line-chart'
    },
    children: [
      {
        path: 'listNewUser',
        name: '新增用户',
        component: NewUser,
        meta: {
          id: 8,
        }
      },
      {
        path: 'listActiveUser',
        name: '活跃用户',
        component: ActiveUser,
        meta: {
          id: 8,
        }
      },
      {
        path: 'listRetainUser',
        name: '留存用户',
        component: RetainUser,
        meta: {
          id: 8,
        }
      },
      {
        path: 'listStartUpTimes',
        name: '启动次数',
        component: StartUpTimes,
        meta: {
          id: 8,
        }
      },
      {
        path: 'TopIver',
        name: '版本分布',
        component: TopIver,
        meta: {
          id: 8,
        }
      },
      {
        path: 'TopIverDetail',
        name: '版本分布详情',
        hidden:true,
        component: TopIverDetail,
        meta: {
          id: 8,
        }
      },
      {
        path: 'OnlineUser',
        name: '在线用户',
        component: OnlineUser,
        meta: {
          id: 8,
        }
      },
    ]
  },
  {
    path: '/channelSource',
    name: '渠道-来源',
    component: ChannelSource,
    hidden: false,
    meta: {
      id: 8,
      icon: 'fa-random'
    },
    children: [{
      path: 'listInstallChannel',
      name: '安装渠道',
      component: InstallChannel,
      meta: {
        id: 8,
      }
    },
      {
        path: 'listInstallChannelDetail',
        name: '安装渠道详情',
        hidden:true,
        component: InstallChannelDetail,
        meta: {
          id: 8,
        }
      }
    , {
      path: 'listTopOuterRef',
      name: '启动来源',
      component: TopOuterRef,
      meta: {
        id: 8,
      }
    },{
        path: 'listTopOuterRefDetail',
        name: '启动来源详情',
        hidden:true,
        component: TopOuterRefDetail,
        meta: {
          id: 8,
        }
      }
    ]
  },
  {
    path: '/participation',
    name: '用户参与度',
    component: Participation,
    hidden: false,
    meta: {
      id: 8,
      icon: 'fa-dashboard'
    },
    children: [{
      path: 'listOnlineDuration',
      name: '使用时长',
      component: OnlineDuration,
      meta: {
        id: 8,
      }
    },
      {
        path: 'listUseFrequency',
        name: '使用频率',
        component: UseFrequency,
        meta: {
          id: 8,
        }
      },
      {
        path: 'listUseGap',
        name: '使用间隔',
        component: UseGap,
        meta: {
          id: 8,
        }
      }
    ]
  },
  {
    path: '/fn',
    name: '功能使用',
    hidden: false,
    component: Function,
    meta: {
      id: 8,
      icon: 'fa-windows'
    },
    children: [
      {
        path: 'userfunction',
        name: '自定义事件',
        component: UserFunction,
        hidden: false,
        meta: {
          id: 8,
        }
      },
      {
        path: 'userfunctionDetail',
        name: '自定义事件趋势',
        component: UserFunctionDetail,
        hidden: true,
        meta: {
          id: 8,
        }
      },
      {
        path: 'funnel',
        name: '事件转化率',
        component: FunnelList,
        hidden: false,
        meta: {
          id: 8,
        }
      },
      {
        path: '/eventChangeDetail',
        name: '事件转化率详情',
        component: EventChangeDetail,
        hidden: true,
        meta: {
          id: 8,
        }
      },
      {
        path: 'eventGroupList',
        name: '事件汇总占比',
        component: EventGroupList,
        hidden: false,
        meta: {
          id: 8,
        }
      },
      {
        path: '/eventGroupDetail',
        name: '事件汇总占比详情',
        component: EventGroupDetail,
        hidden: true,
        meta: {
          id: 8,
        }
      },
      {
        path: 'eventDuration',
        name: '事件耗时',
        component: EventDuration,
        hidden: true,
        meta: {
          id: 8,
        }
      },
    ]
  },
  {
    path: '/selfReprotList',
    name: '我的报表',
    component: SelfReprotList,
    hidden: false,
    meta: {
      id: 8,
      icon: 'fa-table'
    }
  },
  {
    path: '/selfReportDetail',
    name: '我的详细报表',
    component: SelfReprotDetail,
    hidden: true,
    meta: {
      id: 8,
      icon: 'fa-dashboard'
    }
  },

  {
    path: '/terminal',
    name: '终端属性',
    component:Layout,
    hidden: false,
    meta: {
      id: 8,
      icon: 'glyphicon glyphicon-phone'
    },
    children: [
      {
        path: 'equipment',
        name: '设备终端',
        component: Equipment,
        meta: {
          id: 8,
          icon: 'fa-hand-o-right'
        }
      },
      {
        path: 'isp',
        name: '网络及运营商',
        component: Isp,
        meta: {
          id: 8,
          icon: 'fa-hand-o-right'
        }
      },
      {
        path: 'area',
        name: '地域',
        component: Area,
        meta: {
          id: 8,
          icon: 'fa-hand-o-right'
        }
      }
    ]
  },

  {
    path: '/setting',
    name: '设置',
    component: Layout,
    hidden: false,
    meta: {
      id: 8,
      icon: 'fa-gear'
    },
    children: [
      {
        path: 'listDimTraceKpi',
        name: '留存事件',
        component: DimTraceKpi,
        meta: {
          id: 8,
        }
      },
    ]
  },

];
// const menus =()=>import('../routers/menu';)
/*var menus = [
  {
    path: '/theme',
    name: '换肤',
    component: Theme,
    hidden: false,
    meta: {
      id: 7,
      icon: 'fa-adjust'
    }
  },
  {
    path: '/',
    name: '组件',
    hidden: false,
    children: [{
      path: '/',
      name: '富文本编辑器',
      hidden: false,
      meta: {
        id: 7
      }
    }, {
      path: '/',
      name: '上传文件',
      hidden: false,
      meta: {
        id: 7
      }
    }, {
      path: '/',
      name: '换肤',
      hidden: false,
      meta: {
        id: 7,
        icon: 'fa-barcode'
      }
    }, {
      path: '/',
      name: '复制',
      hidden: false,
      meta: {
        id: 7,
        icon: 'fa-barcode'
      }
    }],
    meta: {
      id: 7,
      icon: 'fa-th'
    }
  },
  {
    path: '/multipleForm',
    name: '表单页',
    component: MultipleForm,
    hidden: false,
    meta: {
      id: 8,
      icon: 'fa-edit'
    }

  }, {
    path: '/detail',
    name: '详情页',
    component: Detail,
    hidden: false,
    meta: {
      id: 7,
      icon: 'fa-pie-chart'
    }
  }, {
    path: '/UIElements',
    name: 'UI元素',
    component: Layout,
    hidden: false,
    meta: {
      id: 8,
      icon: 'fa-laptop'
    },
    children: [{
      path: 'icons',
      name: 'ICONS',
      component: Icons,
      meta: {
        id: 8,
      }
    }, {
      path: 'buttons',
      name: '按钮',
      component: Buttons,
      meta: {
        id: 8,
      }
    }]
  }, {
    path: '/tables',
    name: '表格',
    component: Layout,
    hidden: false,
    meta: {
      id: 8,
      icon: 'fa-table'
    },
    children: [{
        path: 'baseTable',
        name: '通用表格',
        component: BaseTable,
        meta: {
          id: 8,
        }
      }, {
        path: 'normalTable',
        name: '简单表格',
        component: NormalTable,
        meta: {
          id: 8,
        }
      }, {
        path: 'dynamicTable',
        name: '动态表格',
        component: DynamicTable,
        meta: {
          id: 8,
        }
      }, {
        path: 'inlineEditTable',
        name: '行内编辑表格',
        component: InlineEditTable,
        meta: {
          id: 8,
        }
      }, {
        path: 'dragableTable',
        name: '可拖拽表格',
        component: DragableTable,
        meta: {
          id: 4
        }
      },
      {
        path: 'filterTable',
        name: '可筛选表格',
        component: FilterTable,
        meta: {
          id: 4
        }
      }, {
        path: '/',
        name: '表格导出数据',
        // component: DragableTable,
        meta: {
          id: 4
        }
      }
    ]
  }
];*/
export default menus;
