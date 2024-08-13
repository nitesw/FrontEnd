const api = "https://api.github.com/users";
const username = document.getElementById("username-input");
const form = document.getElementById("search-user-form");
const card = document.getElementById("user");
form.onsubmit = (e) => {
  e.preventDefault();
  loadUser();
};
card.classList.toggle("card");

async function loadUser() {
  card.innerHTML = "";
  if (username.value !== null && username.value !== "") {
    const response = await fetch(`${api}/${username.value}`);
    if (response.status !== 404) {
      const data = await response.json();

      card.classList.toggle("card");
      username.value = "";
      card.innerHTML = `<div class="card-body">
        <div class="row">
            <div class="first-info col-6">
            <img
                src="${data.avatar_url}"
                alt="user-pfp"
                width="200px"
                class="mb-4"
            />
    
            <p class="card-text d-flex justify-content-between">
                <span class="fw-bold">Name:</span>
                ${data.name !== null ? data.name : "No Name"}
            </p>
            <hr />
            <p class="card-text d-flex justify-content-between">
                <span class="fw-bold">Username:</span>
                ${data.login}
            </p>
            <hr />
            </div>
            <div
            class="second-info col-6 d-flex flex-column justify-content-end"
            >
            <div>
                <p class="card-text d-flex justify-content-between">
                <span class="fw-bold">URL to GitHub:</span>
                <a href="${data.html_url}" class="card-link"
                    >${data.html_url}</a
                >
                </p>
                <hr />
            </div>
            <div>
                <p class="card-text d-flex justify-content-between">
                <span class="fw-bold">Blog:</span>
                ${data.blog !== "" ? data.blog : "N/A"}
                </p>
                <hr />
            </div>
            <div>
                <p class="card-text d-flex justify-content-between">
                <span class="fw-bold">Location:</span>
                ${data.location !== null ? data.location : "N/A"}
                </p>
                <hr />
            </div>
            <div>
                <p class="card-text d-flex justify-content-between">
                <span class="fw-bold">Email:</span>
                ${data.email !== null ? data.email : "N/A"}
                </p>
                <hr />
            </div>
            <div>
                <p class="card-text d-flex justify-content-between">
                <span class="fw-bold">Followers: <span class="fw-normal">${
                  data.followers
                }</span></span>
                <span class="fw-bold">Following: <span class="fw-normal">${
                  data.following
                }</span></span>
                </p>
                <hr />
            </div>
            </div>
        </div>
    </div>`;
    } else {
      card.innerHTML += `<div class="alert alert-dismissible alert-warning">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <h4 class="alert-heading">Warning!</h4>
        <p class="mb-0">User not found!</p>
      </div>`;
    }
  } else {
    card.innerHTML = `<div class="alert alert-dismissible alert-danger">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </div>`;
  }
}

// loadUser();
