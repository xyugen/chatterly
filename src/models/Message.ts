interface Message {
    id: string
    senderId: string
    recipientId: string
    content: string
    dateSent: Date
}

export default Message