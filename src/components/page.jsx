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
      <ul className={styles.experience}>
        <li>
          <div className={styles.company}>
            {'Which?'}
            <br />
            {'Front end developer'}
            <br />
            {'Sep 2018 - Present'}
            <br />
            {getMonthsYears('2018-09-01')}
            <br />
          </div>
          <div className={styles.companyExperience}>
            <p>
              {`I have ${getYearsAgo(
                '2004-09-01'
              )} years experience in web development, currently in my ${getYearsAgo(
                '2010-10-01'
              )
                + 1}th year at Which? as a Front End Developer. Skilled with Javascript, React, NodeJS, PHP, database management.`}
            </p>
          </div>
        </li>
        <li>
          <div className={styles.company}>
            {'Intranet developer'}
            <br />
            {'Oct 2010 - Sep 2018'}
            <br />
            {getMonthsYears('2010-10-01', '2018-09-01')}
            <br />
          </div>
          <div>
            <p>
              {`I have ${getYearsAgo(
                '2004-09-01'
              )} years experience in web development, currently in my ${getYearsAgo(
                '2010-10-01'
              )
                + 1}th year at Which? as a Front End Developer. Skilled with Javascript, React, NodeJS, PHP, database management.`}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </React.Fragment>
)

export default Page
