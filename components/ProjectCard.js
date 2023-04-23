const ProjectCard = ({ href, imgSrc, title, description, category, startDate, endDate }) => (
    <a href={href} className="flex flex-col" target="_blank">
      <div className="group relative mb-5 flex w-full flex-col overflow-hidden rounded-xl h-52">
        <img
          className="absolute transform transition duration-500 ease-out group-hover:scale-110"
          src={imgSrc}
          loading="lazy"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: 'cover',
            color: 'transparent',
          }}
        />
      </div>
      <h3 className="text-lg font-bold">
        {title}
      </h3>
      <p className="my-2">
        {description}
      </p>
      <h2 className="mt-1 text-xs font-medium text-gray-800 dark:text-gray-300">
        <span className="uppercase">{category}</span>
        <span className="px-2">•</span>
        <span className="inline-block flex-none translate-y-px rounded bg-zinc-100 text-sm font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          {startDate}
          {endDate && (
            <>
              <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>{endDate}
            </>
          )}
        </span>
      </h2>
    </a>
  )
  
  export default ProjectCard