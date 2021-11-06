import Head from "../../components/head";
import Link from 'next/link'

export const config = {
  unstable_runtimeJS: false
};

export default function Projects() {
  return (
    <>
      <Head 
        title="Home"
      />
      <ul className="projectlist">
        <li>
          <h4><Link href="https://zeroserver.io">Zero Server</Link> [<Link href="https://github.com/remoteinterview/zero">GitHub</Link>]</h4>
          <p>Zero is a web server to simplify web development.</p>
        </li>
        <li>
          <h4><Link href="/projects/screenshothero">Screenshot Hero</Link> [<Link href="https://apps.apple.com/us/app/screenshot-hero/id1493170794?ls=1">App Store</Link>]</h4>
          <p>Screenshot Hero scans through your screenshots (and other saved photos) and makes then instantly searchable by text in them.</p>
        </li>
        <li>
          <h4><Link href="https://recordscreen.io/">RecordScreen.io</Link></h4>
          <p>Record your screen right from the browser. No installation required.</p>
        </li>
        <li>
          <h4><Link href="https://www.allmydesktops.com/">AllMyDesktops.com</Link></h4>
          <p>Fastest web client for RDP and VNC. Zero installations.</p>
        </li>
        <li>
          <h4><Link href="https://asadmemon.com/urduscript/">UrduScript</Link></h4>
          <p>A JavaScript dialect in Urdish, with a goal to make programming more accessible for beginners from South Asia.</p>
        </li>
        <li>
          <h4>Armband Concept for Controlling Home Electronics</h4>
          <p>Me (with <Link href="http://mujtabachang.com" target="_blank">Mujtaba</Link>) developed an armband proof-of-concept to control home electronics just by pointing at electronics (like a speaker, tv, lights etc) and doing a gesture to control them. The hardware consisted of IMU sensor, smart switchboard. <Link href="https://vimeo.com/95529039">Here&apos;s an early video.</Link></p>
        </li>
        <li>
          <h4><Link href="http://memories.nokia.com/en/images/41886667-e43a-4cc4-8abe-97f6d33038c9">MMG (Muscle Noise) Recognition</Link></h4>
          <p>Me (with <Link href="http://mujtabachang.com" target="_blank">Mujtaba</Link>) developed a very cheap armband to detect MMG signals, which we then sent to a neural network and captured/recognized few gestures. The hardware consisted of pre-amplified microphones.</p>
        </li>
        <li>
          <h4><Link href="https://sites.google.com/site/therobotronics/ledpong">LED Pong</Link></h4>
          <p>A course project. We used logic gates to design classic pong. The quick hack also allowed us to add bot player.</p>
        </li>
        <li>
          <h4><Link href="https://asadmemon.com/react-hints/">React Hints</Link></h4>
          <p>A simple component to show floating hints highlighting product features.</p>
        </li>
        <li>
          <h4><Link href="https://socialsentiments.asadmemon.com/">Social Sentiments</Link></h4>
          <p>A Chrome extension that informs you of how much positive and negative Facebook posts you consume.</p>
        </li>
        <li>
          <h4><Link href="https://github.com/asadm/patari">Patari</Link></h4>
          <p>Patari app for OS X and Windows.</p>
        </li>
        <li>
          <h4><Link href="https://github.com/SyedMusaAli/OpenEndedMathEngine">Open Ended Math Engine</Link></h4>
          <p>A mathematical reasoning and, Algebraic computational engine. Plus it can learn your formulae!</p>
        </li>
        <li>
          <h4><Link href="https://github.com/remoteinterview/compilebox">CompileBox</Link></h4>
          <p>Compile and run user-submitted code in a docker based sandbox.</p>
        </li>
        <li>
          <h4><Link href="http://jsexperiments.herokuapp.com/sph/">SPHjs</Link> (<Link href="https://github.com/asadm/SPHjs">source</Link>)</h4>
          <p>A very very efficient 2D Fluid/Water simulation in JavaScript.</p>
        </li>
        <li>
          <h4><Link href="https://github.com/asadm/NETFx">NetFx</Link></h4>
          <p>C# Image Manipulation Library.</p>
        </li>
        <li>
          <h4><Link href="https://www.youtube.com/watch?v=YMF1dbUp2bs">Sky Canvas</Link></h4>
          <p>Sky Canvas is basically a whiteboard application for windows phone 7. It syncs anything you draw on it with all the users currently viewing it, everyone can draw on the board.</p>
        </li>

        <li>
          <h4><Link href="https://sites.google.com/site/therobotronics/1-programming/bomberman">[Game]Bomberman 3D</Link></h4>
          <p>Course project for OOP course. A 3d split-screen game.</p>
        </li>
        <li>
          <h4><Link href="https://sites.google.com/site/therobotronics/cs-map-fast-karachi">CS Map - FAST Karachi</Link></h4>
          <p>A weekend Counter-Strike map design I did of my alma mater.</p>
        </li>


      </ul>


    </>
  )
}
