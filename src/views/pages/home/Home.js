import {api, postform} from "../../../service/api";

async function getRandomJoke() {
  const request = await api.get("random")
  const response = request.data
  return response
}


let Home = {
  is_private: false,

  render: async () => {
    const jokes = await getRandomJoke();

      let view = /*html*/`
          <div>
            <h1>primeira pagina</h1>
            <img src=${jokes.icon_url}>
            <p>${jokes.value}</p>
          </div>
          <hr>
          <div>
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