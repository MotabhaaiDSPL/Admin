// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/home/orison/Documents/React/my-project/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from 'components/Loader/Loader';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__index' */'@/layouts/index.js'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/AirportCoordComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__AirportCoordComponent' */'@/pages/chart/ECharts/AirportCoordComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/BubbleGradientComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__BubbleGradientComponent' */'@/pages/chart/ECharts/BubbleGradientComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/CalendarComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__CalendarComponent' */'@/pages/chart/ECharts/CalendarComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/ChartAPIComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__ChartAPIComponent' */'@/pages/chart/ECharts/ChartAPIComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/ChartShowLoadingComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__ChartShowLoadingComponent' */'@/pages/chart/ECharts/ChartShowLoadingComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/ChartWithEventComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__ChartWithEventComponent' */'@/pages/chart/ECharts/ChartWithEventComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/DynamicChartComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__DynamicChartComponent' */'@/pages/chart/ECharts/DynamicChartComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/EchartsComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__EchartsComponent' */'@/pages/chart/ECharts/EchartsComponent.js'), loading: LoadingComponent}),
        "propTypes": {}
      },
      {
        "path": "/chart/ECharts/GCalendarComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__GCalendarComponent' */'@/pages/chart/ECharts/GCalendarComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/GaugeComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__GaugeComponent' */'@/pages/chart/ECharts/GaugeComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/GraphComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__GraphComponent' */'@/pages/chart/ECharts/GraphComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/LiquidfillComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__LiquidfillComponent' */'@/pages/chart/ECharts/LiquidfillComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/LunarCalendarComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__LunarCalendarComponent' */'@/pages/chart/ECharts/LunarCalendarComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/MainPageComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__MainPageComponent' */'@/pages/chart/ECharts/MainPageComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/MapChartComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__MapChartComponent' */'@/pages/chart/ECharts/MapChartComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/ModuleLoadChartComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__ModuleLoadChartComponent' */'@/pages/chart/ECharts/ModuleLoadChartComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/SimpleChartComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__SimpleChartComponent' */'@/pages/chart/ECharts/SimpleChartComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/ThemeChartComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__ThemeChartComponent' */'@/pages/chart/ECharts/ThemeChartComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/TransparentBar3DComPonent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__TransparentBar3DComPonent' */'@/pages/chart/ECharts/TransparentBar3DComPonent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts/TreemapComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__TreemapComponent' */'@/pages/chart/ECharts/TreemapComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/ECharts",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__ECharts__index' */'@/pages/chart/ECharts/index.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/Recharts/AreaChartComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__Recharts__AreaChartComponent' */'@/pages/chart/Recharts/AreaChartComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/Recharts/BarChartComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__Recharts__BarChartComponent' */'@/pages/chart/Recharts/BarChartComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/Recharts/Container",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__Recharts__Container' */'@/pages/chart/Recharts/Container.js'), loading: LoadingComponent}),
        "propTypes": {}
      },
      {
        "path": "/chart/Recharts/LineChartComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__Recharts__LineChartComponent' */'@/pages/chart/Recharts/LineChartComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/Recharts/ReChartsComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__Recharts__ReChartsComponent' */'@/pages/chart/Recharts/ReChartsComponent.js'), loading: LoadingComponent}),
        "propTypes": {}
      },
      {
        "path": "/chart/Recharts",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__Recharts__index' */'@/pages/chart/Recharts/index.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/highCharts/HighChartsComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__highCharts__HighChartsComponent' */'@/pages/chart/highCharts/HighChartsComponent.js'), loading: LoadingComponent}),
        "propTypes": {}
      },
      {
        "path": "/chart/highCharts/HighMoreComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__highCharts__HighMoreComponent' */'@/pages/chart/highCharts/HighMoreComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/highCharts/HighmapsComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__highCharts__HighmapsComponent' */'@/pages/chart/highCharts/HighmapsComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/highCharts/HighstockComponent",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__highCharts__HighstockComponent' */'@/pages/chart/highCharts/HighstockComponent.js'), loading: LoadingComponent})
      },
      {
        "path": "/chart/highCharts",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart__highCharts__index' */'@/pages/chart/highCharts/index.js'), loading: LoadingComponent})
      },
      {
        "path": "/dashboard",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__index' */'@/pages/dashboard/index.js'), loading: LoadingComponent}),
        "propTypes": {}
      },
      {
        "path": "/editor",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__index' */'@/pages/editor/index.js'), loading: LoadingComponent})
      },
      {
        "path": "/",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'@/pages/index.js'), loading: LoadingComponent})
      },
      {
        "path": "/login",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login__index' */'@/pages/login/index.js'), loading: LoadingComponent}),
        "propTypes": {}
      },
      {
        "path": "/post",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__post__index' */'@/pages/post/index.js'), loading: LoadingComponent}),
        "propTypes": {}
      },
      {
        "path": "/request",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__request__index' */'@/pages/request/index.js'), loading: LoadingComponent})
      },
      {
        "path": "/user",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__index' */'@/pages/user/index.js'), loading: LoadingComponent}),
        "propTypes": {}
      },
      {
        "path": "/user/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__id__index' */'@/pages/user/[id]/index.js'), loading: LoadingComponent}),
        "propTypes": {}
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404.tsx'), loading: LoadingComponent})
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
