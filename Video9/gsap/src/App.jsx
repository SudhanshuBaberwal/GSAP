// import React, { useRef, useState } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const App = () => {
//   const [Xvalue, setXvalue] = useState(0);
//   const [Yvalue, setYvalue] = useState(0);
//   const [rotate, setRotate] = useState(0);
//   const randomX = gsap.utils.random(-500, 500, 100);
//   const randomY = gsap.utils.random(-500, 500, 100);
//   const rotateX = gsap.utils.random(-360,360,30);
//   const boxRef = useRef()
//   useGSAP(() => {
//     gsap.to(
//       boxRef.current,
//       {
//         x: Xvalue,
//         y : Yvalue,
//         duration: 0.5,
//         rotate : rotate
//       },
//     );
//   },[Xvalue , rotate, Yvalue] );
//   return (
//     <div>
//       <main>
//         {/* <div className="container">
//           <div className="Xvalue"></div>
//           <div ref={gsapRef} className="box"></div>
//         </div>
//         <div className="kuch">
//           <div className="Xvalue"></div>
//           <div className="box"></div>
//         </div> */}
//         <button
//           onClick={() => {
//             setXvalue(randomX);
//             setRotate(rotateX);
//             setYvalue(randomY)
//           }}
//         >
//           Animate
//         </button>
//         <img ref={boxRef} src="./public/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke-removebg-preview.png" alt="" />
//         {/* <div  className="box"></div> */}
//       </main>
//     </div>
//   );
// };

// export default App;


import React from 'react'

const App = () => {
  return (
    <main>
      <button>Animate</button>
      <div className="box">Box</div>
    </main>
  )
}

export default App
