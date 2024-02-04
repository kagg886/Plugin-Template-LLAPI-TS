import {ChatType, Group, UnknownSender} from "./contact";
import {Message} from "./message";

export type Event = {
    'new-messages': NewMessagesEvent[]
}
export type LLAPISupported = {
    LLAPI: {
        on: <T extends keyof Event>(type: T, call: (msg: Event[T]) => void) => void

    }
}

export type NewMessagesEvent = {
    peer: ChatType,
    sender: UnknownSender,
    elements: Array<Message>
}

//[
//     {
//         "allDownloadedPromise": {},
//         "elements": [
//             {
//                 "type": "text",
//                 "content": "什么时候上原版fd）",
//                 "raw": {
//                     "elementType": 1,
//                     "elementId": "7328245361124073287",
//                     "extBufForUI": "0x",
//                     "textElement": {
//                         "content": "什么时候上原版fd）",
//                         "atType": 0,
//                         "atUid": "0",
//                         "atTinyId": "0",
//                         "atNtUid": "",
//                         "subElementType": 0,
//                         "atChannelId": "0",
//                         "linkInfo": null,
//                         "atRoleId": "0",
//                         "atRoleColor": 0,
//                         "atRoleName": "",
//                         "needNotify": 0
//                     },
//                     "faceElement": null,
//                     "marketFaceElement": null,
//                     "replyElement": null,
//                     "picElement": null,
//                     "pttElement": null,
//                     "videoElement": null,
//                     "grayTipElement": null,
//                     "arkElement": null,
//                     "fileElement": null,
//                     "liveGiftElement": null,
//                     "markdownElement": null,
//                     "structLongMsgElement": null,
//                     "multiForwardMsgElement": null,
//                     "giphyElement": null,
//                     "walletElement": null,
//                     "inlineKeyboardElement": null,
//                     "textGiftElement": null,
//                     "calendarElement": null,
//                     "yoloGameResultElement": null,
//                     "avRecordElement": null,
//                     "structMsgElement": null,
//                     "faceBubbleElement": null,
//                     "shareLocationElement": null,
//                     "tofuRecordElement": null,
//                     "taskTopMsgElement": null
//                 }
//             }
//         ],
//         "raw": {
//             "msgId": "7328245361124073288",
//             "msgRandom": "2121726137",
//             "msgSeq": "838698",
//             "cntSeq": "0",
//             "chatType": 2,
//             "msgType": 2,
//             "subMsgType": 1,
//             "sendType": 0,
//             "senderUid": "u_3B6WR1lDu7JBCWdPPRgE0g",
//             "peerUid": "935656001",
//             "channelId": "",
//             "guildId": "",
//             "guildCode": "0",
//             "fromUid": "0",
//             "fromAppid": "0",
//             "msgTime": "1706240084",
//             "msgMeta": "0x",
//             "sendStatus": 2,
//             "sendRemarkName": "",
//             "sendMemberName": "末影殆夜",
//             "sendNickName": "",
//             "guildName": "",
//             "channelName": "",
//             "elements": [
//                 {
//                     "elementType": 1,
//                     "elementId": "7328245361124073287",
//                     "extBufForUI": "0x",
//                     "textElement": {
//                         "content": "什么时候上原版fd）",
//                         "atType": 0,
//                         "atUid": "0",
//                         "atTinyId": "0",
//                         "atNtUid": "",
//                         "subElementType": 0,
//                         "atChannelId": "0",
//                         "linkInfo": null,
//                         "atRoleId": "0",
//                         "atRoleColor": 0,
//                         "atRoleName": "",
//                         "needNotify": 0
//                     },
//                     "faceElement": null,
//                     "marketFaceElement": null,
//                     "replyElement": null,
//                     "picElement": null,
//                     "pttElement": null,
//                     "videoElement": null,
//                     "grayTipElement": null,
//                     "arkElement": null,
//                     "fileElement": null,
//                     "liveGiftElement": null,
//                     "markdownElement": null,
//                     "structLongMsgElement": null,
//                     "multiForwardMsgElement": null,
//                     "giphyElement": null,
//                     "walletElement": null,
//                     "inlineKeyboardElement": null,
//                     "textGiftElement": null,
//                     "calendarElement": null,
//                     "yoloGameResultElement": null,
//                     "avRecordElement": null,
//                     "structMsgElement": null,
//                     "faceBubbleElement": null,
//                     "shareLocationElement": null,
//                     "tofuRecordElement": null,
//                     "taskTopMsgElement": null
//                 }
//             ],
//             "records": [],
//             "emojiLikesList": [],
//             "commentCnt": "0",
//             "directMsgFlag": 0,
//             "directMsgMembers": [],
//             "peerName": "丹东MAIMAI舞萌DX街机音",
//             "freqLimitInfo": null,
//             "editable": false,
//             "avatarMeta": "",
//             "avatarPendant": "",
//             "feedId": "",
//             "roleId": "0",
//             "timeStamp": "0",
//             "clientIdentityInfo": null,
//             "isImportMsg": false,
//             "atType": 0,
//             "roleType": 0,
//             "fromChannelRoleInfo": {
//                 "roleId": "0",
//                 "name": "",
//                 "color": 0
//             },
//             "fromGuildRoleInfo": {
//                 "roleId": "0",
//                 "name": "",
//                 "color": 0
//             },
//             "levelRoleInfo": {
//                 "roleId": "0",
//                 "name": "",
//                 "color": 0
//             },
//             "recallTime": "0",
//             "isOnlineMsg": true,
//             "generalFlags": "0x",
//             "clientSeq": "0",
//             "fileGroupSize": null,
//             "foldingInfo": null,
//             "multiTransInfo": null,
//             "senderUin": "3484322581",
//             "peerUin": "935656001",
//             "msgAttrs": {},
//             "anonymousExtInfo": null,
//             "nameType": 0,
//             "avatarFlag": 0,
//             "extInfoForUI": null,
//             "personalMedal": null,
//             "categoryManage": 0
//         }
//     }
// ]