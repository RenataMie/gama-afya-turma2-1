import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.chucknorris.io/jokes/"
});

export const postform= axios.create({
    baseURL: "https://webhook.site/d74ff6f0-e868-420a-be47-f51fef570063"
});


