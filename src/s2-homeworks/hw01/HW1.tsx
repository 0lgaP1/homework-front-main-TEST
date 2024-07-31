import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number;
    user: UserPropsType;
    message: MessagePropsType;
}

export type UserPropsType = {
    avatar: AvatarPropsType;
    name: string;
}

export type MessagePropsType = {
    text: string;
    time: string;
}

export type AvatarPropsType = {
    src: string,
    alt?: string,
    width?: string,
    height?: string,

}
const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: {
            src: avatar,
            alt: 'User avatar',
            width: '49px',
            height: '49px'
        },
        name: 'Olya',  // можно менять
    },
    message: {
        text: 'some textsome textsome textsome textsome textsome textsome text', // можно менять
        time: getCurrentTime(), // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: {
            src: avatar,
            alt: 'FriendUserAvatar',
            width: '60px',
            height: '60px',
        }, // можно менять
        name: 'Jura', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: getCurrentTime(), // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
