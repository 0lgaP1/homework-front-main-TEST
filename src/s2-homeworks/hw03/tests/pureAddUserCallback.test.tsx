import React from 'react'
import {pureAddUserCallback, UserType} from '../HW3'

let initialState: any[]
const setName = (a: any[]) => {
    initialState = a
    return initialState
}

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setName as React.Dispatch<React.SetStateAction<UserType[]>>, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
