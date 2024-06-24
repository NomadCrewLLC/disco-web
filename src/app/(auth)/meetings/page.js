'use client'

import { PageWrapper } from '@/components/PageWrapper'
import { getMeetings, supaGenerateSummary } from '@/services/supa.service'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Spinner,
    Tabs,
    Tab,
    Divider,
} from '@nextui-org/react'
import Link from 'next/link'
import dayjs from 'dayjs'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export default function Meetings() {
    const { meetings, error, isLoading, mutationGenerateSummary } = useData()

    function generateSummary(meetingId) {
        mutationGenerateSummary.mutate(meetingId)
    }


    return (
        <PageWrapper>
            {error && <div>Error: {error.message}</div>}
            {isLoading && (
                <>
                    <Spinner />
                </>
            )}
            <div className="mx-36">
                {!isLoading &&
                    meetings.map((meeting) => (
                        <Link
                            key={meeting.id}
                            href={`/meetings/details/${meeting.id}`}
                        >
                            <div className="p-4">
                                <h3>{meeting.id}</h3>
                                {dayjs(meeting.start_time).format('YYYY-MM-DD')}
                                <Divider className="mt-2" />
                            </div>
                        </Link>
                    ))}
            </div>

            {/*
       Navigation
       - Profile
       - Settings
       - Logout
       Main
       - Meetings List -> Individual Meeting
       */}
        </PageWrapper>
    )
}

function useData() {
    const queryClient = useQueryClient()

    // Get meetings
    const {
        data: meetings,
        error: meetingsError,
        isFetching,
    } = useQuery({
        queryKey: ['getMeetings'],
        queryFn: getMeetings,
        // initialData: [],
    })

    // Mutations
    const mutationGenerateSummary = useMutation({
        mutationFn: supaGenerateSummary,
        onSuccess: (res) => {
            console.log(`Generate Summary Result:`, res)
            // Invalidate cache and refetch meetings
            queryClient.invalidateQueries({ queryKey: ['getMeetings'] })
        },
    })

    const error = meetingsError || mutationGenerateSummary.error
    const isLoading = isFetching || mutationGenerateSummary.isPending

    return {
        meetings: meetings,
        error,
        isLoading,
        mutationGenerateSummary,
    }
}
