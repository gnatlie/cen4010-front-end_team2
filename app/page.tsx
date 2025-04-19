import dogImage from './img/Dog.png'
import './css/mainStyles.css';

export default function Home() {
  return (
    <div className="page_style">
      <div className="btn-group">
        <button>Logout</button>
        <button>Dog</button>
        <button>0:56</button>
      </div>

      <div className="container">
        <div className="triangle-left"></div>
        <div className="oval-wrapper">
          <div className="oval">
            <img src={dogImage.src} alt="Puppy" className="oval-img" />
          </div>
        </div>
        <div className="triangle-right"></div>
      </div>

      <div className="btn-group">
        <button>Clean</button>
        <button>Feed</button>
        <button>Play</button>
      </div>
    </div>
  );
}
