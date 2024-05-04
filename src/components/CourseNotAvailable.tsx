import { Info } from "@mui/icons-material";
import { twMerge } from "tailwind-merge";

interface ICourseNotAvailable {
    className?: string;
}

export default function CourseNotAvailable({ className }: ICourseNotAvailable) {
    return <div className={twMerge(
        " bg-white bg-opacity-50 rounded-lg flex flex-col gap-y-5 p-3 my-5",
        className
    )}>
        <div className="flex gap-x-4 items-center">
            <div className="h-[3px] bg-gray-400 rounded-full flex-grow bg-opacity-60" />
            <Info className="" />
            <div className="h-[3px] bg-gray-400 rounded-full flex-grow bg-opacity-60" />
        </div>
        <p>
            Derzeit keine Anmeldung möglich<br />
            Neue Kurstermine folgen.
        </p>
    </div>;
}