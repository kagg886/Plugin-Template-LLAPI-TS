// 运行在 Electron 主进程 下的插件入口

import {LLAPISupported, NewMessagesEvent} from "./type/listener";
import {Message, PlainText} from "./type/message";

module.exports.onBrowserWindowCreated = (window: Window & LLAPISupported) => {
    window.LLAPI.on('new-messages', (abc: NewMessagesEvent[]) => {
        console.log(abc)
    })
    // window 为 Electron 的 BrowserWindow 实例
}
