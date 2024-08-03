import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: ((error: string) => void), setName: ((name: string) => void), addUserCallback: ((name: string) => void)) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name.trim() === '') {
        setError('The name is required')
    } else {
        addUserCallback(name);
        setName('');
        setError('');
    }
}

export const pureOnBlur = (name: string, setError: ((name: string) => void)) => { // если имя пустое - показать ошибку
    if (name.trim() === '') {
        setError('Your name is empty');
    } else {
        setError('');
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: (() => void)) => { // !!!!!!!!!!!!! если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser();
    }

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
    const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
        // деструктуризация пропсов
        const [name, setName] = useState<string>('') // need to fix any
        const [error, setError] = useState<string>('') // need to fix any

        const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
            const newName = e.currentTarget.value
            setName(newName);

            error && setError('')
        }
        const addUser = () => {
            pureAddUser(name, setError, setName, addUserCallback)
        }

        const onBlur = () => {
            pureOnBlur(name, setError)
        }

        const onEnter = (e: any) => {
            pureOnEnter(e, addUser)
        }

        const totalUsers = 0 // need to fix
        const lastUserName = 'some name' // need to fix

        return (
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                onBlur={onBlur}
                onEnter={onEnter}
                error={error}
                totalUsers={totalUsers}
                lastUserName={lastUserName}
            />
        )
    }
}
export default GreetingContainer
