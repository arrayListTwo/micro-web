import axios from 'axios'

export default function DVideo() {
  function handleClick() {
    axios.post('http://localhost:3000/react16/login', {
        name: 'boos'
    }).then((res) => {
        console.log(res)
    })
  }

  return (
    <div>
      DVideo React16
      <button onClick={handleClick}>POST</button>
    </div>
  )
}
