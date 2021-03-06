// @ts-nocheck
import { Component } from 'react';
import { ApplyPluginsType } from 'umi';
import dva from 'dva';
// @ts-ignore
import createLoading from '/home/orison/Documents/React/my-project/node_modules/dva-loading/dist/index.esm.js';
import { plugin, history } from '../core/umiExports';
import ModelApp0 from '/home/orison/Documents/React/my-project/src/models/app.js';
import ModelDetail1 from '/home/orison/Documents/React/my-project/src/pages/user/[id]/models/detail.js';
import ModelModel2 from '/home/orison/Documents/React/my-project/src/pages/dashboard/model.js';
import ModelModel3 from '/home/orison/Documents/React/my-project/src/pages/login/model.js';
import ModelModel4 from '/home/orison/Documents/React/my-project/src/pages/post/model.js';
import ModelModel5 from '/home/orison/Documents/React/my-project/src/pages/user/model.js';
import dvaImmer, { enableES5, enableAllPlugins } from '/home/orison/Documents/React/my-project/node_modules/dva-immer/dist/index.js';

let app:any = null;

export function _onCreate(options = {}) {
  const runtimeDva = plugin.applyPlugins({
    key: 'dva',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    // @ts-ignore
    ...(typeof window !== 'undefined' && window.g_useSSR ? { initialState: window.g_initialProps } : {}),
    ...(options || {}),
  });
  
  app.use(createLoading());
  app.use(dvaImmer());
  (runtimeDva.plugins || []).forEach((plugin:any) => {
    app.use(plugin);
  });
  app.model({ namespace: 'app', ...ModelApp0 });
app.model({ namespace: 'detail', ...ModelDetail1 });
app.model({ namespace: 'model', ...ModelModel2 });
app.model({ namespace: 'model', ...ModelModel3 });
app.model({ namespace: 'model', ...ModelModel4 });
app.model({ namespace: 'model', ...ModelModel5 });
  return app;
}

export function getApp() {
  return app;
}

/**
 * whether browser env
 * 
 * @returns boolean
 */
function isBrowser(): boolean {
  return typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
}

export class _DvaContainer extends Component {
  constructor(props: any) {
    super(props);
    // run only in client, avoid override server _onCreate()
    if (isBrowser()) {
      _onCreate()
    }
  }

  componentWillUnmount() {
    let app = getApp();
    app._models.forEach((model:any) => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // ?????? app???for gc
      // immer ?????? app ??? read-only ???????????? try catch ??????
      app = null;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    let app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
