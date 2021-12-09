/**
 * The main script file of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.1.0
 */

// First step. The environment
console.info('You found it! Well done! Now; go back to your editor and change this message and save the file!')

// Second step. Coding
/**
 * Fetches random users from randomuser.me.
 *
 * @async
 * @param {number} size - number of random users to fetch.
 * @returns {Promise<object[]>} Random users from the API.
 */
async function fetchRandomUsers (size = 10) {
  const result = await fetch(`https://randomuser.me/api/?results=${size}`)
  const { results: randomUsers } = await result.json()
  return randomUsers
}

const users = await fetchRandomUsers()
console.log(users)

// TODO: Write code here
console.log('Hello World Again!')
