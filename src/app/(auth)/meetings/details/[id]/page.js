'use client'
import { PageWrapper } from '@/components/PageWrapper'
import { getMeetingById } from '@/services/supa.service'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Spinner, Tab, Tabs, Card, CardBody, Button } from '@nextui-org/react'
import { Transript } from '@/components/Transcript'

export default function Details({ params }) {
    const { id } = params
    const { meetingDetail, error, isLoading } = useData(id)

    return (
        <PageWrapper>
            {error && <div>Error: {error.message}</div>}
            {isLoading && (
                <>
                    <Spinner />
                </>
            )}
            <div className="mx-24">
                <Tabs
                    fullWidth
                    aria-label="Meeting Details"
                    variant="underlined"
                >
                    <Tab key="summary" title="Summary">
                        <Card>
                            <CardBody>
                                <Button
                                    className="rounded-md"
                                    onClick={() => generateSummary(meeting.id)}
                                >
                                    Generate Summary
                                </Button>
                            </CardBody>
                            <CardBody>
                                <h3>Summary</h3>
                                {meetingDetail && (
                                    <ul>{meetingDetail.summary}</ul>
                                )}
                                {meetingDetail && !meetingDetail.summary && (
                                    <span>No meeting summary generated.</span>
                                )}
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="transcript" title="Transcript">
                        <Transript messages={meetingDetail && meetingDetail.messages} />
                    </Tab>
                </Tabs>
            </div>
        </PageWrapper>
    )
}

function useData(id) {
    // Get meeting by id
    const {
        data: meetingDetail,
        error: meetingError,
        isFetching,
    } = useQuery({
        queryKey: ['getMeetingById', id],
        queryFn: () => getMeetingById(id),
    })

    const error = meetingError
    const isLoading = isFetching

    const detail = meetingDetail?.data[0]

    return {
        meetingDetail: detail,
        error,
        isLoading,
    }
}
