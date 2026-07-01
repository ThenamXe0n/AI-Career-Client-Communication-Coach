"use client"

import React from 'react'
import { resumeTempletes } from '../../constants/resume-templete-data'
import Image from 'next/image'
import { SparkleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ResumeTempleteSelector = () => {
    const router = useRouter()
    // function selectTemplete(t:string){
    //     setSelectedTemplete(t)
    // }
    return (
        <div style={{
            background: "#fff",
            color: "#111",
            padding: "20px 46px 44px",
            lineHeight: 1.5,
            minHeight:"100vh"
        }}>
            <h3 className="text-2xl text-center font-extrabold tracking-wide uppercase">Select Resume Templete</h3>
            <p className='text-center text-neutral-600'>select your resume templetes. </p>

            <div className="h-1 bg-neutral-300 shadow-lg shadow-black/30 my-3 rounded-full"></div>

            <div className='m-4 grid grid-cols-2 md:grid-cols-5 gap-6'>
                {
                    resumeTempletes.map((r, idx) => (
                        <div key={idx}>
                            <div className="flex flex-wrap gap-2 my-2">
                                {r.tags?.map((tag: string,idx) => (
                                    <span
                                        key={tag+idx}
                                        className=" border border-[#bac0ca] bg-blue-600/10 px-3  text-xs text-blue-900"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="border relative active:scale-200 cursor-zoom-in duration-300 hover:z-50 z-0" style={{ aspectRatio: 4 / 5 }}>
                                <Image src={r.previewImage} fill alt={r.title} />
                            </div>
                            <h4 className='text-blue-400 font-semibold capitalize'>{r.title}</h4> 
                            <button  onClick={()=>router.push(`/resume-builder/${r.id}`)} className="rounded-md hover:bg-blue-900 hover:scale-95 duration-300 cursor-pointer my-2 text-white bg-emerald-500 px-2 py-0.5 flex items-center justify-center gap-2 text-sm capitalize w-full">click to select<SparkleIcon size={16} /></button>




                        </div>
                    ))

                }

            </div>

        </div>
    )
}

export default ResumeTempleteSelector
