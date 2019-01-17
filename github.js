class Github {
  constructor() {
    this.client_id = 'ade945736bda0bcd0fb3';
    this.client_secret = 'fddd772de9f0303c288ccfae64465821cb2d4bf9';
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