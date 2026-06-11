"use client"
import { InterviewList } from '@/features/interview/components/interview-list'
import { StartInterviewForm } from '@/features/interview/components/start-interview-form'
import { DashboardLayout } from '@/shared/components/dashboard-layout'
import { SparkleIcon } from 'lucide-react'
import React, { useState } from 'react'

const InterviewPage = () => {
    const [openForm, setOpenForm] = useState<boolean>(false)
    return (
        <DashboardLayout>
            <div className="space-y-6">

                {!openForm && <button
                    onClick={() => setOpenForm(true)}
                    className="px-4 py-2 rounded-md bg-emerald-600 flex items-center gap-2"
                >
                    <SparkleIcon /> Start Interview
                </button>}
                {openForm && <StartInterviewForm onClose={() => setOpenForm(false)} />}

                <InterviewList />

            </div>
        </DashboardLayout>
    )
}

export default InterviewPage
