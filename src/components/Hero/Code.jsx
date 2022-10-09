import React from 'react';
import { BsCircleFill } from 'react-icons/bs';

function Code() {
  const linesOfCode = 23;

  return (
    <div className="box code-background is-flex is-flex-direction-column has-text-white --code-about-me">
      {/* Title Bar */}
      <div className="is-flex mb-4 window-title-text-size" id="code">
        <div className="gg-windows-control">
          <BsCircleFill className="code-close is-size-" />
          <BsCircleFill className="code-minimize ml-2" />
          <BsCircleFill className="code-maximize ml-2" />
        </div>
        <div className="ml-auto mr-auto code-symbol ">Me.js</div>
      </div>
      {/* Main Window */}
      <div className="is-flex window-text-size " id="code">
        <div className=" is-flex is-flex-direction-column has-text-right">
          {/* Line Numbers */}
          {[...Array(linesOfCode)].map((item, idx) => (
            <div key={idx} className=" code-line-number">
              {idx + 1}
            </div>
          ))}
          <div className=" code-line-number --extra">24</div>
          <div className=" code-line-number --extra">25</div>
          <div className=" code-line-number --extra">26</div>
          <div className=" code-line-number --extra">27</div>
        </div>
        {/* Code Lines */}
        <div className="ml-2">
          <div>
            <span className="code-variable">console</span>
            <span>.</span>
            <span className="code-text">log</span>
            <span>(</span>
            <span className="code-string">{"'Welcome 👋'"}</span>
            <span>);</span>
          </div>
          <div>{'\u00a0\u00a0'} </div>

          <div>
            <span className="code-reserved">const </span>
            <span className="code-variable">me </span>
            <span className="code-reserved">= </span>
            <span>{'{'}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">fullName</span>
            <span>{': '}</span>
            <span className="code-string">{"'Gonzalo Ariel Rossi'"}</span>
            <span>{','}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">age</span>
            <span>{': '}</span>
            <span className="code-number">29</span>
            <span>{','}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">profession</span>
            <span>{': '}</span>
            <span className="code-string">{"'Full Stack Developer'"}</span>
            <span>{','}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">location</span>
            <span>{': '}</span>
            <span className="code-string">{"'Buenos Aires, Argentina'"}</span>
          </div>
          <div>
            <span>{'};'}</span>
          </div>
          <div>
            <span> </span>
          </div>
          <div>{'\u00a0\u00a0'} </div>
          <div>
            <span className="code-reserved">const </span>
            <span className="code-variable">myFrontEndSkills </span>
            <span className="code-reserved">= </span>
            <span>{'{'}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">languages</span>
            <span>{': ['}</span>
            <span className="code-string">{"'HTML', 'Javascript'"}</span>
            <span>{'],'}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">frameworks</span>
            <span>{': ['}</span>
            <span className="code-string">{"'ReactJS', 'Pug'"}</span>
            <span>{'],'}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">styling</span>
            <span>{': ['}</span>
            <span className="code-string">
              {"'CSS', 'Sass', 'Bulma', 'Bootstrap'"}
            </span>
            <span>{'],'}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">designTools</span>
            <span>{': ['}</span>
            <span className="code-string">
              {"'Adobe Photoshop', 'Adobe Illustrator'"}
            </span>
            <span>{']'}</span>
          </div>
          <div>
            <span>{'};'}</span>
          </div>
          <div>{'\u00a0\u00a0'} </div>
          <div>
            <span className="code-reserved">const </span>
            <span className="code-variable">myBackEndSkills </span>
            <span className="code-reserved">= </span>
            <span>{'{'}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">languages</span>
            <span>{': ['}</span>
            <span className="code-string">
              {"'Javascript', 'SQL', 'C#', 'Python', 'PHP'"}
            </span>
            <span>{'],'}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">frameworks</span>
            <span>{': ['}</span>
            <span className="code-string">{"'NodeJS', 'Express'"}</span>
            <span>{'],'}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">databases</span>
            <span>{': ['}</span>
            <span className="code-string">
              {"'MongoDB', 'SQL Server', 'MySQL', 'Firebase'"}
            </span>
            <span>{'],'}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">architecture</span>
            <span>{': '}</span>
            <span className="code-string">{" 'REST API'"}</span>
            <span>{','}</span>
          </div>
          <div className="ml-5 ">
            <span className="code-text">pattern</span>
            <span>{': '}</span>
            <span className="code-string">{" 'MVC'"}</span>
          </div>
          <div>
            <span>{'};'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Code;
