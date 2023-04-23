const ExperienceItem = ({ link, name, desc, image, startDate, endDate }) => (
    <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
        <a
            className="link focusable font-medium text-zinc-800 dark:text-white"
            href={link}
            rel="noreferrer"
            target="_blank"
        >
            <img
                alt={name}
                src={image}
                className="h-14 w-24 rounded-md"
            />
        </a>
        <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                    {name}
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-sm font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                    {startDate}<span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>{endDate}
                </span>
            </p>
            <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                    {desc}
                </span>
            </p>
        </div>
    </li>
)

export default ExperienceItem