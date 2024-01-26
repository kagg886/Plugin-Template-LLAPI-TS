export class Message {
    readonly type: string
}

export class PlainText extends Message {
    type: 'text'
    content: string
}

export class Image extends Message {
    type: 'image'
    file: string
}

export class face extends Message {
    type: 'face'
    faceIndex: number
    faceType: 'super' | 'normal-extended'
    faceSuperIndex?: number
}

export class UnknownMessageType extends Message {
    type: 'raw'
    raw: any
}