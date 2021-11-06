import Head from "../components/head";
import Link from 'next/link'

export const config = {
  unstable_runtimeJS: false
};

export default function Talks() {
  return (
    <>
      <Head
        title="Talks"
      />
      <ul className="projectlist">
        <li>
          <h4><Link href="https://github.com/asadm/insult-bot-tutorial">Building a Bot - Facebook Developer Circle Meetup 1 (2016)</Link></h4>
          <p>Slides and code from my bot-making talk at DevCircle Meetup in Karachi.</p>
        </li>
        <li>
          <h4><Link href="https://github.com/asadm/devfest16/">Machine Learning - DevFest Karachi (2016)</Link></h4>
          <p>Resources from my ML talk at DevFest Karachi.</p>
        </li>
        <li>
          <h4><Link href="https://github.com/asadm/deeplearning-workshop/">Deep Learning School (2016)</Link></h4>
          <p>A workshop series on Deep Learning focused on programmers.</p>
        </li>
        <li>
          <h4><Link href="https://docs.google.com/presentation/d/1zrv662BkjIUO6rnT3JODf-2GYoQ2EDwewxjE-FXg03E/edit?usp=sharing">Why Node.js (2016)</Link> (<Link href="files/whynodejs.pdf">pdf</Link>)</h4>
          <p>A very brief overview of Node.js.</p>
        </li>
      </ul>
    </>
  )
}
