'use client'

import { getAuthUser, supaLogin, supaLogout } from '@/services/supa.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Card, CardBody, Button, Spacer } from '@nextui-org/react'
import LoginForm from './LoginForm'

export default function Login() {
    const { authUser, error, isFetching, mutationLogin, mutationLogout } =
        useData()

    async function submitLogin(email, password) {
        mutationLogin.mutate({ email, password })
    }

    return (
        <div className="dark darkPrimary text-foreground bg-background overflow-y- min-h-screen scroll-smooth selection:bg-primary/10 selection:text-primary flex flex-col justify-center items-center p-4">
            <h1>DISCO</h1>
            <Spacer y={8} />
            {error && <div>Error: {error.message}</div>}
            {isFetching ? (
                <div>Loading...</div>
            ) : !authUser ? (
                <Card className="max-w-md w-full">
                    <CardBody>
                        <LoginForm onSubmit={submitLogin} />
                    </CardBody>
                </Card>
            ) : (
                <div>
                    <div>You are logged in</div>
                    <Button
                        shadow
                        color="primary"
                        auto
                        onClick={() => mutationLogout.mutate()}
                    >
                        Logout
                    </Button>
                </div>
            )}
        </div>
    )
}

function useData() {
    // Access the client
    const queryClient = useQueryClient()

    // Get logged in user
    const {
        data: authUser,
        error: authUserError,
        isFetching,
    } = useQuery({
        queryKey: ['authUser'],
        queryFn: getAuthUser,
    })

    // Mutations
    const mutationLogin = useMutation({
        mutationFn: supaLogin,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['authUser'] })
        },
    })
    const mutationLogout = useMutation({
        mutationFn: supaLogout,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['authUser'] })
        },
    })

    const error = authUserError || mutationLogin.error || mutationLogout.error

    return {
        authUser,
        error,
        isFetching,
        mutationLogin,
        mutationLogout,
    }
}
