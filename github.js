class Github {
  constructor() {
    this.client_id ='c6d62c5991212621d3eb';
    this.client_secret = '2a6274fc76a898b53c4b2eb6d5c4ec4f71542544';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?
    ${this.client_id}&${this.client_secret}`);
    const profile = await profileResponse.json();
      return {
        profile
      }
      
  }
}