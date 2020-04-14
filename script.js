// ----
// DATA
// ----

// A couple jokes to start with
var jokes = {
  'the horse': {
    setup: 'A horse walks into the bar. The bartender asks...',
    punchline: 'Why the long face?'
  },
  'Orion\'s pants': {
    setup: 'How does Orion keep his pants up?',
    punchline: 'With an asteroid belt.'
  }
}

// The message to display if the jokes object is empty
var noJokesMessage = 'I... I don\'t know any jokes. 😢'

// -------------
// PAGE UPDATERS
// -------------

// Update the listed jokes, based on the jokes object
var jokesMenuList = document.getElementById('jokes-menu')
var updateJokesMenu = function () {
  // Don't worry too much about this code for now.
  // You'll learn how to do advanced stuff like
  // this in a later lesson.
  var jokeKeys = Object.keys(jokes)
  var jokeKeyListItems = jokeKeys.join('</li><li>') || noJokesMessage
  jokesMenuList.innerHTML = '<li>' + jokeKeyListItems + '</li>'
}

// Update the displayed joke, based on the requested joke
var requestedJokeInput = document.getElementById('requested-joke')
var jokeBox = document.getElementById('joke-box')
var updateDisplayedJoke = function () {
  var requestedJokeKey = requestedJokeInput.value

  if (requestedJokeKey) {
    var requestedJoke = jokes[requestedJokeInput.value]
    if (jokes[requestedJokeInput.value]) {
      jokeBox.innerHTML = '<p>' + requestedJoke.setup + '</p>'
      jokeBox.innerHTML += '<p>' + requestedJoke.punchline + '</p>'
    }
    else {
      jokeBox.textContent = 'No matching joke found.'
    }
  }
}

// Function to keep track of all other
// page update functions, so that we
// can call them all at once
var updatePage = function () {
  updateJokesMenu()
  updateDisplayedJoke()
}


// Delete a joke
var deleteJoke = function () {
  var jokeKey = document.getElementById('forgetInput').value
  if (jokeKey) {
    delete jokes[jokeKey]
  }
  updateJokesMenu()
}

// Add a joke
var addJoke = function() {

}

// -------
// STARTUP
// -------

// Update the page immediately on startup
updatePage()

// ---------------
// EVENT LISTENERS
// ---------------
var rememberMe = document.getElementById('rememberBtn')
var forgetMe = document.getElementById('forgetBtn')

// Keep the requested joke up-to-date
requestedJokeInput.addEventListener('input', updateDisplayedJoke)
rememberMe.addEventListener('click', addJoke)
forgetMe.addEventListener('click', deleteJoke)
