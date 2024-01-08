import { NextSection } from '@/components/NextSection'
import { TabbedPanel } from '@/components/TabbedPanel'

const Home = (): JSX.Element => {
  return (
    <div className = "container">
      <div className = "bio">
        <div>
          Hey there, I'm
        </div>
        <h1>Elizabeth Murray</h1>
          <div>
            I'm a full-stack engineer specializing in robust, scalable and maintainable code that's focused on delivering a next level user experience.
          </div>
      </div>
      <NextSection/>
      <div className = "about">
        <h2>A bit more about me</h2>
        <p>
          Hello again, My name is Elizabeth. I've been a developer pretty much since I learned how to use a computer. My first "program" was a Microsoft Access database and a macro to help me decide what game I should play. As I continued my tech journey I was fascinated with the limitless possibilities of the Internet, specifically with what a website could do.
        </p>
        <p>
          Thankfully I've been able to work with many different companies that share my passion for the Internet and it's potential. I've worked at a skill focused <a href = "https://www.tilr.com" target='_blank'>employment platform</a>, <a href = "https://northone.com" target='_blank'>a world class neo-bank</a> that's focused on small & medium businesses. Most recently I was at <a href="https://3boxlabs.com" target='_blank'>3Box Labs</a> building a decentralized data storage solution.
        </p>
      </div>
      <div className = "career">
        <h2>Some places I've worked</h2>
        <TabbedPanel />
      </div>
    </div>
  )
}

export default Home
