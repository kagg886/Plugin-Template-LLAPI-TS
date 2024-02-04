export type ChatType = {
    uid: string
    name: string
    chatType: string
}

export type Group = ChatType & {
    chatType: 'group'
}

export type Friend = ChatType & {
    chatType: 'friend'
}

export type UnknownSender = {
    uid: string
    memberName: string
    nickName: string
}

export type QQProfile = {
    avatarUrl: string
    bio: string
    nickName: string
    qid: string
    raw: {
        avatarUrl: any
        birthday_day: number
        birthday_month: number
        birthday_year: number
        categoryId: number
        extStatus: number
        isBlock: boolean
        isMsgDisturb: boolean
        isSpecialCareOpen: boolean
        isSpecialCareZone: boolean
        isZPlanCoupleOpen: boolean
        longNick: string
        nick: string
        onlyChat: boolean
        qid: string
        qidianCrewFlag: number
        qidianCrewFlag2: number
        qidianMasterFlag: number
        qzoneNotWatch: boolean
        qzoneNotWatched: boolean
        remark: string
        ringId: string
        sex: number
        status: number
        studyFlag: number
        svipFlag: boolean
        teenagerFlag: boolean
        topTime: string
        uid: string
        uin: string
        vipFlag: boolean
        vipLevel: number
        yearVipFlag: boolean
        zplanCoupleSceneId: number
    }
    sex: "male" | "female"
    uid: string
    uin: string
}

export type GroupMemberProfile = {
    avatarPath: string
    cardName: string
    cardType: number
    isDelete: boolean
    isRobot: boolean
    isSpecialConcerned: boolean
    nick: string
    qid: string
    remark: string
    role: number
    shutUpTime: number
    uid: string
    uin: string
}

export type GroupProfile = {
    avatarUrl: any
    maxMembers: number
    members: number
    name: string
    raw: {
        authGroupType: number
        discussToGroupMaxMsgSeq: number
        discussToGroupTime: number
        discussToGroupUin: string
        groupCode: string
        groupCreditLevel: number
        groupFlagExt: number
        groupFlagExt3: number
        groupName: string
        groupOwnerId: {
            memberUid: string
            memberUin: string
        },
        groupShutupExpireTime: string
        groupStatus: number
        hasMemo: boolean
        hasModifyConfGroupFace: boolean
        hasModifyConfGroupName: boolean
        isConf: boolean
        isTop: boolean
        maxMember: number
        memberCount: number
        memberRole: number
        personShutupExpireTime: string
        privilegeFlag: number
        remarkName: string
        toppedTimestamp: string
    }
    role: "master" | "moderator" | "member"
    uid: string
}