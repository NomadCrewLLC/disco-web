'use client'

import { Card, CardBody, Button, Input, Spacer } from '@nextui-org/react'
import React, { useState } from 'react'

export function Transript({ messages }) {
    const firstSpeakerId = messages && messages[0].senderId

    return (
        <Card>
            <div className="flex flex-col p-6">
                {messages.map((message) => {
                    const isFirstSpeaker = message.senderId === firstSpeakerId
                    const bubbleColor = isFirstSpeaker ? 'red' : 'blue'
                    const bubblePosition = isFirstSpeaker ? 'flex-start' : 'flex-end'
                    return (
                        <div
                            key={message.insertionOrder}
                            className="h-12 max-w-sm mb-2 p-2"
                            style={{
                                backgroundColor: bubbleColor,
                                alignSelf: bubblePosition,
                            }}
                        >
                            <span>{message.text}</span>
                        </div>
                    )
                })}
            </div>
        </Card>
    )
}
