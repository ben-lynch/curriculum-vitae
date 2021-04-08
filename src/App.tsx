import { FunctionComponent } from 'react'

import { Typography } from './components'

export const App: FunctionComponent = () => (
  <>
    <header>
      <Typography tag="h1">Ben Lynch</Typography>
      <ul>
        <li>
          <a href="mailto: ben@benlynch.co.uk">ben@benlynch.co.uk</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bjammin/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/ben-lynch">Github</a>
        </li>
      </ul>
    </header>
    <section>
      <Typography tag="h2">Professional experience</Typography>
      <section>
        <Typography tag="h3">
          <a href="https://www.which.co.uk">Which?</a>
        </Typography>
        <Typography tag="h4">Oct 2019 - present</Typography>
        <Typography tag="h4">Senior Front End Developer</Typography>
        <Typography tag="p">
          Once a senior position became available I jumped at the change to interview for it. With a
          lot of leadership change at Which? during this period it was a great opportunity to step
          up. Mentoring new starters, establishing leading regular team meetings discussing changes
          in the front end landscape and changes we should be making internally. I helped
          established trunk based development, continuous delivery of our key applications. Working
          with the new Tech Lead to bring him up to speed and becoming far more involved in things
          like deciding future architecture changes ahead of a migration to a single CMS and web
          delivery application.
        </Typography>
        <Typography tag="h4">Sep 2017 - Oct 2019</Typography>
        <Typography tag="h4">Front End Developer</Typography>
        <Typography tag="p">
          I was initially asked to join the Digital team in 2017 on a one day per week basis. I
          chose front end over back end development as I felt then (and still do!) that JavaScript
          is the best web language. My own personal back end and devops experience really augments
          the new modern front end skills I was picking up within my new role.
        </Typography>
        <Typography tag="p">
          Being accepted full-time into the digital team later in the year allowed me to focus more
          time on improving my general front end skills. With opportunities to demonstrate my full
          stack skills with tools like the{' '}
          <a href="https://www.which.co.uk/consumer-rights/used-car">
            used car problem resolution tool
          </a>
          .
        </Typography>
        <Typography tag="h4">Oct 2010 - Sep 2017</Typography>
        <Typography tag="h4">Intranet Developer</Typography>
        <Typography tag="p">
          After starting my family and relocating, my previous role at MSO no required a hellish M25
          based commute! In moving to Which? as a sole developer of their intranet I gained the
          opportunity to learn PHP as the existing intranet, originally built with Coldfusion, had
          any new sections created with PHP.
        </Typography>
        <Typography tag="p">
          After 3 years of this hybrid approach, which was problematic, we got the go ahead to
          create a new intranet for the just created Which? Financial services division. Starting
          from scratch we had to build this new intranet in 6 weeks. Leveraging my new PHP skills
          and the Codeigniter and Drupal frameworks, we achieved this. With some additional work
          this formed the basis of the existing Which? Intranet, still in use today.
        </Typography>
      </section>
      <section>
        <Typography tag="h3">
          <a href="https://www.mso.net/">MSO.net</a>
        </Typography>
        <Typography tag="h4">Apr 2008 - Oct 2010</Typography>
        <Typography tag="h4">Web Developer</Typography>
      </section>
    </section>
  </>
)
