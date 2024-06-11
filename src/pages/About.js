// import React from "react";
// const BodyAboutClass = "body--about";
// const Test = "test";
// class About extends React.Component {
//   componentDidMount() {
//     document.body.classList.add(BodyAboutClass);
//   }
//   componentWillUnmount() {
//     document.body.classList.remove(BodyAboutClass);
//   }

//   render() {
//     return (
//       <div class="about">
//         <div class="about--title">
//           <div class="blockquote-wrapper">
//             <div class="blockquote">
//               <p className="quote">
//                 You first must <span class="emphasis">see</span> the invisible{" "}
//                 <br />
//                 in order to <span class="emphasis">achieve </span>the
//                 impossible!
//               </p>
//               <span class="quote--author">&mdash;Calvin Kilcrease, M.D.</span>
//             </div>
//           </div>

//           <div class="about--us">
//             <p>
//               We are <span class="primary">ExMed Inc.</span>
//             </p>
//           </div>
//         </div>
//         <div class="about--container">
//           <div class="row">
//             <div class="col s12 l4">
//               <div class="card">
//                 <div class="card-image">
//                   <img src="./images/headshots/adam.jpg" />
//                   <span class="card-title">Adam Exum</span>
//                   <span class="card-subtitle">Chief Cheerleader</span>
//                 </div>
//                 <div class="card-content">
//                   <p>
//                     I am a very simple card. I am good at containing small bits
//                     of information. I am convenient because I require little
//                     markup to use effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="col s12 l4">
//               <div class="card">
//                 <div class="card-image">
//                   <img src="./images/headshots/will.jpg" />
//                   <span class="card-title">Will Kulka M.D.</span>
//                   <span class="card-subtitle">Grand Master of Underlings</span>
//                 </div>
//                 <div class="card-content">
//                   <p>
//                     I am a very simple card. I am good at containing small bits
//                     of information. I am convenient because I require little
//                     markup to use effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="col s12 l4">
//               <div class="card">
//                 <div class="card-image">
//                   <img src="./images/headshots/wade.jpg" />
//                   <span class="card-title">Wade Exum</span>
//                   <span class="card-subtitle">Chief Troublemaker</span>
//                 </div>
//                 <div class="card-content">
//                   <p>
//                     I am a very simple card. I am good at containing small bits
//                     of information. I am convenient because I require little
//                     markup to use effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="row">
//             <div class="col s12 l3">
//               <div class="card">
//                 <div class="card-image">
//                   <img src="./images/headshots/bettina.jpg" />
//                   <span class="card-title">Bettina Rubendal</span>
//                   <span class="card-subtitle">Corporate Magician</span>
//                 </div>
//                 <div class="card-content">
//                   <p>
//                     I am a very simple card. I am good at containing small bits
//                     of information. I am convenient because I require little
//                     markup to use effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div class="col s12 l3">
//               <div class="card">
//                 <div class="card-image">
//                   <img src="./images/headshots/monica.jpg" />
//                   <span class="card-title">Monica Garcia</span>
//                   <span class="card-subtitle">Numbers Ninja</span>
//                 </div>
//                 <div class="card-content">
//                   <p>
//                     I am a very simple card. I am good at containing small bits
//                     of information. I am convenient because I require little
//                     markup to use effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div class="col s12 l3">
//               <div class="card">
//                 <div class="card-image">
//                   <img src="./images/headshots/kiara.jpg" />
//                   <span class="card-title">Kiara Morales</span>
//                   <span class="card-subtitle">
//                     Director of First Impressions
//                   </span>
//                 </div>
//                 <div class="card-content">
//                   <p>
//                     I am a very simple card. I am good at containing small bits
//                     of information. I am convenient because I require little
//                     markup to use effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div class="col s12 l3">
//               <div class="card">
//                 <div class="card-image">
//                   <img src="./images/headshots/cord.jpg" />
//                   <span class="card-title">Cord Exum</span>
//                   <span class="card-subtitle">Digital Overlord</span>
//                 </div>
//                 <div class="card-content">
//                   <p>
//                     I am a very simple card. I am good at containing small bits
//                     of information. I am convenient because I require little
//                     markup to use effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="row">
//             <div class="col s12 l6">
//               <div class="card">
//                 <div class="card-image">
//                   <img src="./images/headshots/scarlet.jpg" />
//                   <span class="card-title">Scarlet Exum</span>
//                   <span class="card-subtitle">Director of Fun</span>
//                 </div>
//                 <div class="card-content">
//                   <p>
//                     I am a very simple card. I am good at containing small bits
//                     of information. I am convenient because I require little
//                     markup to use effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="col s12 l6">
//               <div class="card">
//                 <div class="card-image">
//                   <img src="./images/headshots/piper.jpg" />
//                   <span class="card-title">Piper Exum</span>
//                   <span class="card-subtitle">Chief Amazement Officer</span>
//                 </div>
//                 <div class="card-content">
//                   <p>
//                     I am a very simple card. I am good at containing small bits
//                     of information. I am convenient because I require little
//                     markup to use effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default About;
