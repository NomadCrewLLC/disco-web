'use client';

import { getMeetings, supaGenerateSummary } from '@/services/supa.service';
import { Button, Card, CardBody, CardHeader, Spinner } from '@nextui-org/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function Meetings() {
  const { meetings, error, isLoading, mutationGenerateSummary } = useData();

  function generateSummary(meetingId) {
    mutationGenerateSummary.mutate(meetingId);
  }

  return (
    <div
      className="dark darkPrimary text-foreground bg-background overflow-y- min-h-screen scroll-smooth selection:bg-primary/10 selection:text-primary text-center p-4">
      <h1 className="logo">DISCO <span className="emoji">🕺</span></h1>
      {error && <div>Error: {error.message}</div>}
      {isLoading && (
        <>
          <Spinner />
        </>
      )}
      {!isLoading && meetings.map((meeting) => (
        <Card key={meeting.id}>
          <CardHeader>{meeting.id}</CardHeader>
          <CardBody>
            <h3>Transcript</h3>
            <pre>
              {meeting.transcript}
            </pre>
          </CardBody>
          <CardBody>
            <Button onClick={() => generateSummary(meeting.id)}>Generate Summary</Button>
          </CardBody>
          <CardBody>
            <h3>Summary</h3>
            <ul>
              {meeting.summary}
            </ul>
          </CardBody>

        </Card>
      ))}
      {/*
       Navigation
       - Profile
       - Settings
       - Logout
       Main
       - Meetings List -> Individual Meeting
       */}
    </div>
  );
}


function useData() {
  const queryClient = useQueryClient();

  // Get meetings
  const { data: meetings, error: meetingsError, isFetching } = useQuery({
    queryKey: ['getMeetings'],
    queryFn: getMeetings,
    initialData: [],
  });

  // Mutations
  const mutationGenerateSummary = useMutation({
    mutationFn: supaGenerateSummary,
    onSuccess: (res) => {
      console.log(`Generate Summary Result:`, res);
      // Invalidate cache and refetch meetings
      queryClient.invalidateQueries({ queryKey: ['getMeetings'] });
    },
  });

  const error = meetingsError || mutationGenerateSummary.error;
  const isLoading = isFetching || mutationGenerateSummary.isPending;

  return {
    meetings: meetings,
    error,
    isLoading,
    mutationGenerateSummary,
  };
}