import React from "react"

const Cell = (x, y) => {
  const [isTile, setIsTile] = React.useState(false)
  
  React.useEffect(() => {

  })

  return(
      <>
        {isTile ? <div className="tile"></div> : null}
      </>
  )
}  

export default Cell;  
