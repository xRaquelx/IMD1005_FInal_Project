const APIURL = 'https://api.github.com/users/';
const card = document.querySelectorAll('card');
const main = document.getElementById('main');

getUser('xRaquelx');
getUser('dacayed');
getUser('trenonmc');
getUser('vk2code');
getUser('codeup22');

async function getUser(person) {
    try {
        const {data} = await axios(APIURL + person);
        createCard(data);
    } catch (err) {
        console.log(err);
    }
}

function createCard(user) {
    let bio = `${user.bio}`;
    if(bio === "null")
        bio = "No bio available";
    else
        bio = `${user.bio}`;
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.login}" class="card-img">
        </div>
        <div class="user-info">
            <h2>${user.login}</h2>
            <p>${bio}</p>
            <a href="${user.html_url}">${user.html_url}</a>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
        </div>
    </div>
    `;
    main.innerHTML += cardHTML;
}