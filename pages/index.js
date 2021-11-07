import Head from "../components/head";

export const config = {
  unstable_runtimeJS: false
};

export default function Home() {
  return (
    <>
    <Head 
      title="Home"
    />

    <div id="hero">
      <h1>
        Hi, I&apos;m Asad!
      </h1>
      <h2>I make stuff on computer.<br />You may know me as:</h2>
      <ul id="homepage-projects">
        <li>Co-founder and CTO of
          <a href="https://codeinterview.io" target="_blank" className="project-link"><img src="/assets/img/icons/ci.png" />CodeInterview.io</a> &
          <a href="https://remoteinterview.io" target="_blank" className="project-link"><img src="/assets/img/icons/ri.png" />RemoteInterview.io</a>.
          <br />Two products with one goal: accurately measure candidates&apos; coding skills.
          <br />Backed by Draper Associates & Alchemist Accelerator.
        </li>
        <li>Memon behind the weekly newsletter <a href="http://asad.substack.com/" target="_blank" className="project-link">Memon Mondays</a>.</li>
        <li>Creator of
          <ul>
            <li><a href="/projects/screenshothero/" className="project-link"><img src="/assets/img/icons/screenshothero.png" />Screenshot Hero</a> – iOS app that scans through screenshots and makes them searchable by text in them.
              <a title="Hacker News Discussion" target="_blank" href="https://news.ycombinator.com/item?id=22065333" className="badge hn"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Y Combinator icon</title><path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" /></svg> <span>429</span></a>
            </li>
            <li><a href="https://zeroserver.io" target="_blank" className="project-link"><img src="/assets/img/icons/zero.png" />Zero</a> – Web framework that abstracts complex project configuration for routing, bundling, etc. to make it web-dev easy.
              <a title="Hacker News Discussion" target="_blank" href="https://news.ycombinator.com/item?id=19254828" className="badge hn"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Y Combinator icon</title><path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" /></svg> <span>513</span></a>
            </li>
            <li><a href="https://apps.apple.com/us/app/coco-music/id1401506547/" target="_blank" className="project-link"><img src="/assets/img/icons/coco.png" />Coco Music</a> – A fast music streaming client for iOS and Android, specially optimized and co-located for South Asian users.</li>
            <li><a href="https://apps.apple.com/us/app/double-recorder/id1480805574" target="_blank" className="project-link"><img src="/assets/img/icons/doublerecorder.png" />Double Recorder</a> – iOS video recorder to record from both cameras (front and back) simultaneously.</li>
            <li><a href="https://www.allmydesktops.com/" target="_blank" className="project-link"><img src="/assets/img/icons/allmydesktops.png" />AllMyDesktops.com</a> – Fastest browser-based client for RDP and VNC. Zero installations.
              <a title="Hacker News Discussion" target="_blank" href="https://news.ycombinator.com/item?id=16358774" className="badge hn"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Y Combinator icon</title><path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" /></svg> <span>65</span></a>
            </li>
            <li><a href="https://github.com/asadm/urduscript/" target="_blank" className="project-link"><img src="/assets/img/icons/urduscript.png" />UrduScript</a> – JavaScript dialect in Urdish, with a goal to make programming more accessible for beginners from South Asia.</li>
            <li><a href="https://recordscreen.io/" target="_blank" className="project-link"><img src="/assets/img/icons/recordscreen.png" />RecordScreen.io</a> – Screen recorder right in the browser. No installation required.
              <a title="Featured on Product Hunt" href="https://www.producthunt.com/posts/recordscreen-io" className="badge ph"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Product Hunt icon</title><path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z" /></svg> <span>897</span></a>
            </li>
            <li><a href="https://www.startuplist.pk/" target="_blank" className="project-link"><img src="/assets/img/icons/startuplist.png" />Startuplist.pk</a> – Pakistani startup database.</li>
            <li><a className="project-link" href="/projects">See all projects</a></li>
          </ul>
        </li>
      </ul>
    </div>
    </>
  )
}
