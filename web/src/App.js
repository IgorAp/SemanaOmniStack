import React, { useState, useEffect } from 'react';

import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


export default function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        console.log(error);
      },
      {
        timeout: 30000
      }
    );
  }, []);
  useEffect(() =>{
    async function loadDevs(){
      const response = await api.get('/devs');
      
    }
  }, []);
  async function handleAddDev(e){
    e.preventDefault();
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });
    setGithubUsername('');
    setTechs('');
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/28979212?s=460&v=4" alt="igor ap" />
              <div className="user-info">
                <strong>Igor Aparecido</strong>
                <span>Node.js, React.js, C#</span>
              </div>
            </header>
            <p>
              Desenvolvedor fullstack
            </p>
            <a href="https://github.com/IgorAp">Acessar Perfíl</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/28979212?s=460&v=4" alt="igor ap" />
              <div className="user-info">
                <strong>Igor Aparecido</strong>
                <span>Node.js, React.js, C#</span>
              </div>
            </header>
            <p>
              Desenvolvedor fullstack
            </p>
            <a href="https://github.com/IgorAp">Acessar Perfíl</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/28979212?s=460&v=4" alt="igor ap" />
              <div className="user-info">
                <strong>Igor Aparecido</strong>
                <span>Node.js, React.js, C#</span>
              </div>
            </header>
            <p>
              Desenvolvedor fullstack
            </p>
            <a href="https://github.com/IgorAp">Acessar Perfíl</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/28979212?s=460&v=4" alt="igor ap" />
              <div className="user-info">
                <strong>Igor Aparecido</strong>
                <span>Node.js, React.js, C#</span>
              </div>
            </header>
            <p>
              Desenvolvedor fullstack
            </p>
            <a href="https://github.com/IgorAp">Acessar Perfíl</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

