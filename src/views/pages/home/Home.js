import {api, postform} from "../../../service/api";

async function getRandomQuote() {
  const request = await api.get("random")
  const response = request.data
  return response
}


let Home = {
  is_private: false,

  render: async () => {
    const quotes = await getRandomQuote();
    let date = new Date().toDateString()

      let view = /*html*/`
          <div>
            <h1>Your quote of the day:</h1>
            <h3> ${date}</h3>

           <div class="quote">
            <p>${quotes.content}</p>
            <p>${quotes.author}</p>
          </div>

          </div>
          <hr>
          <div class="sub">
          <h2> Subscribe for more</h2>
            <form id="form">
              <input type="text" placeholder="name" id="name">
              <input type="text" placeholder="email" id="email">
              <input type="text" placeholder="phone" id="phone">
              <input type="submit" value="Enviar">

            </form>
          </div>
          
      `;

      return view
  },

  after_render: async () => {
    let formcontent = document. getElementById("form")

    formcontent.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = document.getElementById("name").value; 
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;

      let postData = {
        name,
        email,
        phone
      }

      postform.post("", postData).then(
        response => {
          alert("tudo certo")
        }
      ).catch(e => alert("algo errado"))
    })
  }
}

export default Home;