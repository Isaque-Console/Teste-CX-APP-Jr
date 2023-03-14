const client = ZAFClient.init();
let settings;

const updateTicketSubject = () => {
  axios.put({
    method: 'put',
    url: 'https://teste7094.zendesk.com/api/v2/tickets/1',
    data: {
      "ticket": {
        "subject": "mudando assunto"
      },
      headers: {
        Authorization: "Basic aXNhcXVlYW4yQGdtYWlsLmNvbTpAMDA3OTM0NTYxY2d0ZnJV"
      }
    }
  });
}

const Main = async () => {
  const App = document.getElementById("app");

  // const response = await client.get('ticket.requester.name');

  let appBody = `<div id="main-content">
                    <textarea id="subject_text" name="subject"></textarea>
                    <button>Click Aqui</button>
                  </div>`;

  App.innerHTML = appBody;

  const button = document.querySelector('button');
  button.addEventListener('onclick', () => updateTicketSubject)
};

export default Main;
