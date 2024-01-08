'use client'

import { useState } from 'react'
import careerInfo from '../app/details.json'

interface JobDetails {
  title: string
  time: string
  companyName: string
  details: string[]
}

export const TabbedPanel = (): JSX.Element => {
  const [active, setActive] = useState(0)

  const tabs: string[] = []
  const jobDetails: Array<{ title: string, time: string, details: string[] }> = []
  careerInfo.company.forEach((job: JobDetails, i: number) => {
    tabs[i] = job.companyName
    const { title, time, details } = job
    jobDetails[i] = { title, time, details }
  })
  // TODO: improve user experience on tab transitions.
  return (
    <div className = "tabbedPanel">
      <div className = "tabs">
        <div className = "tabHighlight" style = {{ transform: `translateY(calc(${active} * 50px))` }}/>
        {tabs.map((job, i: number) => (
          <button onClick={() => { setActive(i) }}>{job}</button>
        ))}
      </div>
      {jobDetails.map((job, i) => (
        <div className={`panelBody ${i === active ? '' : 'hidden'}`}>
          <h3>{job.title}</h3>
          <ul>
            {job.details.map(details => (
              <li>{details}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
