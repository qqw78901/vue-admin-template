/** var Layout =()=>import('../views/layout/layout.vue')可以按需引入路由，相当于
 var  layout=function(){var component = require('xxxx.vue')  return component }
 需要执行到这个function的时候才回去require某个组件
 如果不需要按需加载，直接 import Layout from '../views/layout/layout.vue'
 */
const Layout =()=>import(/* webpackChunkName: "layout"*/'../views/layout/layout.vue')
const Dashboard =()=>import(/* webpackChunkName: "dashboard"*/'../views/dashboard/')
const UserFunction =()=>import(/* webpackChunkName: "userfunction"*/'../views/userfunction/userfunction.vue')
const EventDuration =()=>import(/* webpackChunkName: "duration"*/'../views/duration/duration.vue')
const UserFunctionDetail =()=>import(/* webpackChunkName: "userfunctiondetail"*/'../views/userfunctionDetail/userfunctionDetail.vue')
const FunnelList =()=>import(/* webpackChunkName: "funnellist"*/'../views/funnelSetting/funnelList.vue')
const EventChangeDetail =()=>import(/* webpackChunkName: "eventchangedetail"*/'../views/eventChangeDetail/eventChangeDetail.vue')
const EventGroupList =()=>import(/* webpackChunkName: "eventgrouplist"*/'../views/eventGroupSetting/eventGroupList.vue')
const EventGroupDetail =()=>import(/* webpackChunkName: "eventgroupdetail"*/'../views/eventGroupDetail/eventGroupDetail.vue')
const SelfReprotList =()=>import(/* webpackChunkName: "selfreportlist"*/'../views/selfReportSetting/selfReportList.vue')
const SelfReprotDetail =()=>import(/* webpackChunkName: "selfreportdetail"*/'../views/selfReportDetail/selfReportDetail.vue')

/**
 * 菜单——应用趋势菜单
 */
const ActiveUser =()=>import(/* webpackChunkName: "activeuser"*/'../views/appTrend/ActiveUser.vue')
const NewUser =()=>import(/* webpackChunkName: "newuser"*/'../views/appTrend/NewUser.vue')
const RetainUser =()=>import(/* webpackChunkName: "retainuser"*/'../views/appTrend/RetainUser.vue')
const StartUpTimes =()=>import(/* webpackChunkName: "startuptimed"*/'../views/appTrend/StartUpTimes')
const TopIver =()=>import(/* webpackChunkName: "topiver"*/'../views/appTrend/TopIver')
const TopIverDetail =()=>import(/* webpackChunkName: "topiverdetail"*/'../views/appTrend/TopIverDetail')
const OnlineUser =()=>import(/* webpackChunkName: "onlineuser"*/"../views/appTrend/OnlineUser")

const ChannelSource =()=>import(/* webpackChunkName: "channelsource"*/'../views/channelSource/channelSource.vue')
const InstallChannel =()=>import(/* webpackChunkName: "installchannel"*/'../views/channelSource/installChannel.vue')
const InstallChannelDetail =()=>import(/* webpackChunkName: "installchanneldetail"*/'../views/channelSource/installChannelDetail.vue')
const TopOuterRef =()=>import(/* webpackChunkName: "topouterref"*/'../views/channelSource/topOuterRef.vue')
const TopOuterRefDetail =()=>import(/* webpackChunkName: "topouterrefdetail"*/'../views/channelSource/TopOuterRefDetail.vue')
const Participation =()=>import(/* webpackChunkName: "participation"*/'../views/participation/Participation.vue')
const OnlineDuration =()=>import(/* webpackChunkName: "onlineduration"*/'../views/participation/OnlineDuration.vue')
const UseFrequency =()=>import(/* webpackChunkName: "usefrequency"*/'../views/participation/UseFrequency.vue')
const UseGap =()=>import(/* webpackChunkName: "usegap"*/'../views/participation/UseGap.vue')

/**
 * 终端属性
 */
const Equipment =()=>import(/* webpackChunkName: "equipment"*/'../views/terminal/Equipment.vue')
const Isp =()=>import(/* webpackChunkName: "isp"*/'../views/terminal/ISP')
const Area =()=>import(/* webpackChunkName: "area"*/'../views/terminal/Area')

const ErrorPage =()=>import(/* webpackChunkName: "error"*/'../views/error/error.vue')
const ErrorDetail =()=>import(/* webpackChunkName: "errordetail"*/'../views/error/errorDetail.vue')
const ErrorDistribution =()=>import(/* webpackChunkName: "errordistribution"*/'../views/error/errorDistribution.vue')
/**
 * 菜单——设置
 */
const DimTraceKpi =()=>import(/* webpackChunkName: "dimtracekpi"*/'../views/setting/dimTraceKpi.vue')

const Index =()=>import(/* webpackChunkName: "index"*/'../views/index/index.vue')
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
    path: '/function',
    name: '功能使用',
    hidden: false,
    component: Layout,
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
      {
        path: 'error',
        name: '错误分析',
        component: ErrorPage,
        hidden: false,
        meta: {
          id: 8,
        }
      },
      {
        path: 'errorDetail',
        name: '错误分析详情',
        component: ErrorDetail,
        hidden: true,
        meta: {
          id: 8,
        }
      },
      {
        path: 'errorDistribution',
        name: '错误分布',
        component: ErrorDistribution,
        hidden: true,
        meta: {
          id: 8,
        }
      }
    ]
  },


  {
    path: '/terminal',
    name: '终端属性',
    component:Layout,
    hidden: false,
    meta: {
      id: 8,
      icon: 'fa-laptop'
    },
    children: [
      {
        path: 'equipment',
        name: '设备终端',
        component: Equipment,
        meta: {
          id: 8,
        }
      },
      {
        path: 'isp',
        name: '网络及运营商',
        component: Isp,
        meta: {
          id: 8,
        }
      },
      {
        path: 'area',
        name: '地域',
        component: Area,
        meta: {
          id: 8,
        }
      }
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
export default menus;
