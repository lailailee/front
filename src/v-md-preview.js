import Vue from 'vue'
// import VMdPreview from '@kangc/v-md-editor/lib/codemirror-editor'
import VMdPreview from '@kangc/v-md-editor/lib/preview'

import '@kangc/v-md-editor/lib/style/codemirror-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

// highlightjs
import hljs from 'highlight.js'

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror'
// mode
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/vue/vue'
// edit
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/matchbrackets'
// placeholder
import 'codemirror/addon/display/placeholder'
// active-line
import 'codemirror/addon/selection/active-line'
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/scroll/simplescrollbars.css'
// style
import 'codemirror/lib/codemirror.css'

import zhCN from '@kangc/v-md-editor/lib/lang/zh-CN'

import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index'
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css'
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index'
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css'

import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'

import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align'

import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index'
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'
// import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn'
// import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css'

import Prism from 'prismjs'

VMdPreview.Codemirror = Codemirror
VMdPreview.use(vuepressTheme, {
  Hljs: hljs,
  Prism,
  extend(md) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
  }
})
VMdPreview.use(createTodoListPlugin())
VMdPreview.use(createLineNumbertPlugin())
VMdPreview.use(createHighlightLinesPlugin())
VMdPreview.use(createCopyCodePlugin())
VMdPreview.use(createAlignPlugin())
VMdPreview.use(createEmojiPlugin())
// VMdPreview.use(createMermaidPlugin())

VMdPreview.lang.use('zh-CN', zhCN)
Vue.use(VMdPreview)

