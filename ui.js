class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb3-3">
      <div class="row">
        <div class="col-md-3"> 
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url} target="_blank class="btn btn-primary
          btn-block mb-4">View Profile</a> 
        </div>
        <div class="col.md-9">
          <span class="badge badge-primary">Public Repos: ${user.publib_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.publib_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-goup">
            <li class="list-goup-item">Company: ${user.company}</li>
            <li class="list-goup-item">Websitw/Blog: ${user.blog}</li>
            <li class="list-goup-item">Location: ${user.location}</li>
            <li class="list-goup-item">Member Since: ${user.create_at}</li>
        </div>
      </div>
    </div>
    <h3  class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }
  // Show alert message
  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    msContentScript.insertBefore(div, searc);
    
  }
  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}