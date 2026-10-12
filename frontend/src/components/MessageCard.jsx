import { useUserStore } from "../store/useUserStore"

const MessageCard = ({ userId, likes, content, username, createdAt }) => {
    const {session} = useUserStore()
    return (
        <div className="message-card">
            <div className="message-content">{content}</div>
            <div className="message-meta">
                <span className="message-author">@{username}</span>
                <span className="message-time">{createdAt}</span>
            </div>
            <div className="message-actions">
                {session?.user && (
                    <>
                    <button className="action-button">
                    <span>{likes} 💗🤍</span>
                    <span>Нравится</span>
                </button>
                
                <button className="action-button">
                    <span>🚩</span>
                    <span>Пожаловаться</span>
                </button>
                </>
                )}
                { userId === session?.user.id && (
                    <button className="action-button delete">
                    <span>❌</span>
                    <span>Удалить</span>
                </button>
    )}
            </div>
        </div>
    )
}

export default MessageCard
