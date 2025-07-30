import { useState } from 'react';
import { ConnectionList } from '../Connections/ConnectionsList';
import './Connection.css';

const Connections = () => {

  const [email, setEmail] = useState('');
  const [state, setView] = useState('');

  const handleSend = () => {
    if (email.trim()) {
      window.location.href = `mailto:${email}`;
    } else {
      alert('please enter valid email')
    }
  }

  function filteredConnctions() {
    if (state == 'connect') return ConnectionList.filter(c => !c.connected);
    if (state == 'connected') return ConnectionList.filter(c => c.connected);
    return ConnectionList;
  }

  return (
    <div className='root'>
      <button type="button" class="btn btn-success me-3 ms-3 mt-3" onClick={() => { setView('all') }}>All</button>
      <button type="button" class="btn btn-success me-3 ms-3 mt-3" onClick={() => { setView('connect') }}>Grow/connect</button>
      <button type="button" class="btn btn-success mt-3" onClick={() => { setView('connected') }} >My Network</button>

      <div className='connectionList'>
        {filteredConnctions().map((list) => (
          <div className='section' key={list.id}>
            <img className='image' src={list.profileImage} />
            <h4>{list.name}</h4>
            {list.connected ? (<button type="button" class="btn btn-success">Con nected</button>) :
              (<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Connect</button>)}
          </div>
        ))}
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Contact User</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type='email' className='form-control mb-3' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' value={email}></input>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Connections;
