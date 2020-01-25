import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


export default function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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

