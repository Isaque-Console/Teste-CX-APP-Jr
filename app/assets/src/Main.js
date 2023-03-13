const client = ZAFClient.init();
let settings;

const updateTicketSubject = async () => {
  const options = {
    url: "https://teste7094.zendesk.com/api/v2/tickets/update_many?ids=1",
    type: "POST",
    contentType: 'application/json',
    data: JSON.stringify({
      ticket: {
        subject: "Test ticket #1",
        comment: { 
          body: "This is a test ticket"
        }
      }
    }),
  };
  
  client.request(options).then((response) => {
    console.log(response);
  });
}

const Main = async () => {
  const App = document.getElementById("app");

  let appBody = `<div id="main-content">
                    <textarea id="subject_text" name="subject"></textarea>
                    <button>Click Aqui</button>
                  </div>`;

  // Write App
  App.innerHTML = appBody;

  document.querySelector("button").addEventListener("click", updateTicketSubject);
};

export default Main;


// const client = ZAFClient.init();
// let settings;

// const updateTicketSubject = async () => {
//   const options = {
//     url: "https://teste7094.zendesk.com/api/v2/tickets/update_many?ids=1",
//     type: "POST",
//     contentType: 'application/json',
//     data: JSON.stringify({
//       ticket: {
//         subject: "Test ticket #1",
//         comment: { 
//           body: "This is a test ticket"
//         }
//       }
//     }),
//   };
  
//   client.request(options).then((response) => {
//     console.log(response);
//     document.getElementById("subject_text").value = JSON.stringify(response);
//   });
// }

// const Main = async () => {
//   const App = document.getElementById("app");

//   let appBody = `<div id="main-content">
//                     <textarea id="subject_text" name="subject"></textarea>
//                     <button>Click Aqui</button>
//                   </div>`;

//   // Write App
//   App.innerHTML = appBody;

//   document.querySelector("button").addEventListener("click", updateTicketSubject);
// };

// Main();