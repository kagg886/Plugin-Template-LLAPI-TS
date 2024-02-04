import {ChatType, Group, GroupMemberProfile, GroupProfile, QQProfile, UnknownSender} from "./contact";
import {Message, OfflineMessage} from "./message";

export type Event = {
    'new-messages': NewMessagesEvent[]
}

export type LLAPISupported = {
    LLAPI: {
        on: <T extends keyof Event>(type: T, call: (msg: Event[T]) => void) => void
        sendMessage: (peer: ChatType, elements: OfflineMessage[]) => Promise<any>
        getAccountInfo: () => Promise<Pick<QQProfile, 'uid' | 'uin'>>,
        getUserInfo: (uid: string) => Promise<QQProfile>
        getFriendList: (forced?: boolean) => Promise<QQProfile[]>
        getGroupsList: (forced?: boolean) => Promise<GroupProfile[]>
        getGroupMemberList: (groupId: number, num: number) => Promise<GroupMemberCallBack>
    }
}

export type GroupMemberCallBack = {
    errCode: number
    errMsg: string
    result: {
        finish: boolean
        hasRobot: boolean
        ids: {
            [key: string]: {
                uid: string,
                index: number
            };
        };
        infos: Map<String,GroupMemberProfile>
    }
}

export type NewMessagesEvent = {
    peer: ChatType,
    sender: UnknownSender,
    elements: Array<Message>,
    raw: {
        anonymousExtInfo: any
        atType: any
        avatarFlag: any
        avatarMeta: any
        avatarPendant: any
        categoryManage: any
        channelId: any
        channelName: any
        chatType: any
        clientIdentityInfo: any
        clientSeq: any
        cntSeq: any
        commentCnt: any
        directMsgFlag: any
        directMsgMembers: any
        editable: any
        elements: any
        emojiLikesList: any
        extInfoForUI: any
        feedId: any
        fileGroupSize: any
        foldingInfo: any
        freqLimitInfo: any
        fromAppid: any
        fromChannelRoleInfo: any
        fromGuildRoleInfo: any
        fromUid: any
        generalFlags: any
        guildCode: any
        guildId: any
        guildName: any
        isImportMsg: boolean
        isOnlineMsg: boolean
        levelRoleInfo: any
        msgAttrs: Map<number, any>
        msgId: any
        msgMeta: any
        msgRandom: any
        msgSeq: any
        msgTime: any
        msgType: any
        multiTransInfo: any
        nameType: any
        peerName: any
        peerUid: any
        peerUin: any
        personalMedal: any
        recallTime: any
        records: any
        roleId: any
        roleType: any
        sendMemberName: any
        sendNickName: any
        sendRemarkName: any
        sendStatus: any
        sendType: any
        senderUid: any
        senderUin: any
        subMsgType: any
        timeStamp: any
    }
}