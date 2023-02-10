document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {

  const artist = document.querySelector('#artistName').value.toLowerCase()
  const title = document.querySelector('#songName').value.toLowerCase()
  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
  console.log(`${artist} ${title}`)

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.lyrics

    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}


