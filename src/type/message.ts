export type Message = {
    readonly type: string
    raw: {
        arkElement: any
        avRecordElement: any
        calendarElement: any
        elementId: any
        elementType: any
        extBufForUI: any
        faceBubbleElement: any
        faceElement: any
        fileElement: any
        giphyElement: any
        grayTipElement: any
        inlineKeyboardElement: any
        liveGiftElement: any
        markdownElement: any
        marketFaceElement: any
        multiForwardMsgElement: any
        picElement: any
        pttElement: any
        replyElement: any
        shareLocationElement: any
        structLongMsgElement: any
        structMsgElement: any
        taskTopMsgElement: any
        textElement: any
        textGiftElement: any
        tofuRecordElement: any
        videoElement: any
        walletElement: any
        yoloGameResultElement: any
    }
}

export type PlainText = Message & {
    type: 'text'
    content: string
}

export type Image = Message & {
    type: 'image'
    file: string
}

export type face = Message & {
    type: 'face'
    faceIndex: number
    faceType: 'super' | 'normal-extended'
    faceSuperIndex?: number
}

export type UnknownMessageType = Message & {
    type: 'raw'
}