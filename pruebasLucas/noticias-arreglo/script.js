const params = new URLSearchParams(location.search);
const id = params.get("id");

const data = await fetch("script/news.json").then(r=>r.json()); 

const news = data.find(n => String(n.id) === String(id));

document.getElementById("title").textContent = news.title;
document.getElementById("subtitle").textContent = news.subtitle;
document.getElementById("date").textContent = news.date;
document.getElementById("autor").textContent = news.autor;
document.getElementById("image").src = news.image;

const container = document.getElementById("content");
const parrafos = news.content.split("\n\n");
container.innerHTML = parrafos.map(p => `<p>${p}</p>`).join("");