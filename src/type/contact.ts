export type ChatType = {
    uid: number
    name: string
    chatType: string
}

export type Group = ChatType & {
    chatType: 'group'
}

export type UnknownSender = {
    uid: string
    memberName: string
    nickName: string
}