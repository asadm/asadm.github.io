export function Thumbnail({src, src2, alt, link, height}){
  return (
    <div style={{display: "flex", flexDirection: "column", margin: "1rem"}}>
      {src2?(
        <div style={{width: "100%", marginBottom: "0.1rem"}}>
          <div style={{height: height || "400px", width: "50%", float: "left", backgroundSize: "contain", backgroundPosition: "center", backgroundImage: `url(${src})`, backgroundRepeat: "no-repeat"}}></div>
          <div style={{height: height || "400px", width: "50%", float: "left", backgroundSize: "contain", backgroundPosition: "center", backgroundImage: `url(${src2})`, backgroundRepeat: "no-repeat"}}></div>
        </div>
      ):
      (
        height? (
          <div style={{height: height || "400px", width: "100%", backgroundSize: "contain", backgroundPosition: "center", backgroundImage: `url(${src})`, backgroundRepeat: "no-repeat"}}></div>
        ):<img src={src} style={{width: !height?"100%":"auto", height: height || "auto", marginBottom: "0.1rem"}}/>
      )
      }
      
      {/* <div style={{display: "flex", gap: "1rem", justifyContent: "center"}}>
        {children}
      </div> */}
      <div className="caption" style={{marginTop: "0.3rem", fontSize: "0.8rem", color: "gray", textAlign: "center"}}>
        {alt} {(link?(<span>[<a href={link} target="_blank">Source</a>]</span>):(<></>))}
      </div>
    </div>
  )
}