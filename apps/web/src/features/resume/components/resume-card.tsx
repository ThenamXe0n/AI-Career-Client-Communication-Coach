"use client";

import {
    useResume,
} from "../hooks/use-resume";

export function ResumeCard() {

    const {
        data,
        isLoading,
    } = useResume();

    if (isLoading) {
        return (
            <p>
                Loading...
            </p>
        );
    }

    const resume =
        data?.data;

    return (
        <div
            className="
      border
      rounded
      p-6
      "
        >

            <h2
                className="
        text-xl
        font-bold
        "
            >
                {resume?.fileName}
            </h2>

            <p>
                Experience:
                {" "}
                {resume?.experienceYears}
                {" "}
                years
            </p>

            <div>

                <h3>
                    Skills
                </h3>

                <ul>

                    {resume?.skills?.map(
                        (
                            skill: string
                        ) => (
                            <li
                                key={skill}
                            >
                                {skill}
                            </li>
                        )
                    )}

                </ul>

            </div>

        </div>
    );
}