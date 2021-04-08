import React from 'react'
import moment from 'moment'
import styles from './page.scss'

const getDuration = (startdateString, endDateString = []) =>
  moment.duration(moment(endDateString).diff(moment(startdateString)))

const getYearsAgo = dateString =>
  parseInt(getDuration(dateString).as('years'), 10)

const getMonthsYears = (startdateString, endDateString) => {
  const duration = getDuration(startdateString, endDateString).as('months')
  const months = Math.floor(duration % 12)
  const years = Math.floor(duration / 12)
  const rtn = []

  if (years) {
    rtn.push(years)
    rtn.push(' year')
    if (years > 1) {
      rtn.push('s ')
    }
  }

  if (months > 0) {
    rtn.push(' and ')
    rtn.push(months)
    rtn.push(' month')
    if (months > 1) {
      rtn.push('s ')
    }
  }

  return rtn.join('')
}

const Page = () => (
  <React.Fragment>
    <div className={styles.header}>
      <h1>Ben Lynch</h1>
      <ul>
        <li>
          <a href="mailto:ben@benlynch.co.uk">ben@benlynch.co.uk</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bjammin/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/ben-lynch">Github</a>
        </li>
      </ul>
    </div>
    <div className={styles.section}>
      <p>
        {`I have ${getYearsAgo(
          '2004-09-01'
        )} years experience in web development, currently in my ${getYearsAgo(
          '2010-10-01'
        )
          + 1}th year at Which? as a Front End Developer. Skilled with Javascript, React, NodeJS, PHP, database management.`}
      </p>
    </div>
    <div className={styles.section}>
      <h2>Professional experience</h2>
      <ul className={styles.experienceWrapper}>
        <li>
          <div className={styles.sidebar}>
            <div>Which?</div>
            <div>Front end developer</div>
            <div>Sep 2018 - Present</div>
            <div>{getMonthsYears('2018-09-01')}</div>
          </div>
          <div className={styles.experience}>
            <p>
              Initially asked to join Digital team in 2017, on a once per week
              basis, I chose front end over back end development as I felt
              JavaScript was the best web tech language to improve my skills
              with. The opportunity to learn React and the whole new JS pipeline
              that I wasn&apos;t able to bring into a mature project like the
              intranet was a massive opportunity to expand my skills.
            </p>
            <p>
              Being accepted full-time into the digital team later that year
              allowed me to spend more time on internet projects.
            </p>
            <p>
              <em>Front end achievements</em>
              <ul>
                <li>
                  Problem Resolution tools, embeddable tools for solving
                  consumer issues (such as faulty goods). GraphQL API with React
                  front end, AWS Serverless technologies
                </li>
                <li>
                  Homepage banners for Which?&apos;s 2018 winter campaign,
                  requiring a quick turn around.
                </li>
                <li>
                  Helping onboarding two new starters who are excellent
                  colleagues.
                </li>
                <li>
                  Applying a modern build pipeline to a Wordpress site, reducing
                  the risk of bugs.
                </li>
              </ul>
            </p>
          </div>
        </li>
        <li>
          <div className={styles.sidebar}>
            <div>Intranet developer</div>
            <div>Oct 2010 - Sep 2018</div>
            <div>{getMonthsYears('2010-10-01', '2018-09-01')}</div>
          </div>
          <div>
            <p>
              After starting my family and relocating, my previous job required
              a hellish M25 based commute! In moving to Which? I also gained the
              opportunity to learn PHP as the existing intranet, built with
              Coldfusion, had any new part created using PHP.
            </p>
            <p>
              After 3 years of this hybrid approach, which was problematic, we
              got the go ahead to create a new intranet for the new Which?
              Financial services division. Starting from scratch we had to build
              this new intranet in 6 weeks. Leveraging my new PHP skills and the
              Codeigniter and Drupal frameworks, we achieved this. With some
              additional work this formed the basis of the existing Which?
              Intranet, still on use today.
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div className={styles.section}>
      <h2>Education</h2>
      <div>
        Skills acquired in: Turbo Pascal | PIC Programming in assembly language
        | HTML | CSS | Mechatronics | Life Drawing | Modeling | Workshop Skills:
        Metal, Wood & Plastic
      </div>
      <ul>
        <li>
          <div className={styles.company}>
            Brunel University - Industrial Design & Technology BA (hons)
            <br />
            1999 to 2003
            <br />
            {getMonthsYears('1999-09-01', '2003-09-01')}
          </div>
        </li>
      </ul>
      Studying at Brunel really prepared me for the heavy work load and tight
      deadlines of the real working world. I had many hours of lectures a week
      on some very technical topics, all students were taught a broad range of
      subjects. So much so that the information and new skills had to be
      assimilated quickly, otherwise failure awaited. The frantic pace and tight
      deadlines left me with no problems grasping new concepts and working with
      unfamiliar technologies once I entered the workplace. The upshot of having
      so many different skills to learn was you discovered what you enjoy the
      most. I found I had an undiscovered aptitude for programming and working
      with computer systems. So leaving the university I had a good idea of the
      field I wanted to start working in and some crucial experience in the
      right areas. St Edmunds School - 3 A-Levels (Maths, Physics & Design) & 9
      GCSEs
    </div>
  </React.Fragment>
)

export default Page
