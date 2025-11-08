// import heroBg from "@/assets/hero-bg.jpg";

const BlackFridayHero = () => {
  return (
    <>
      <style>
        {`
          .black_hero-section {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding-top: 4rem;
          }

          .black_hero-background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%);
            background-size: cover;
            background-position: center;
          }

          /* Halogen Light Effects */
          .halogen-light {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            filter: blur(60px);
            opacity: 0.6;
            z-index: 1;
            animation: float 6s ease-in-out infinite;
          }

          

          @keyframes float {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-20px) scale(1.1);
            }
          }

          .black_hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            
            z-index: 2;
          }

          .black_hero-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 1rem 5rem 1rem;
            position: relative;
            z-index: 10;
          }

          .black_hero-content {
            text-align: center;
            max-width: 56rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

                /* Glass Effect Badge */
        .black_hero-badge {
        background: rgba(255, 241, 241, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        color: rgba(var(--foreground-rgb), 1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 2rem;
        padding: 0.5rem 1.5rem;
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
        width: fit-content; /* Changed from 30% to fit-content */
        margin-left: auto; 
        margin-right: auto;
        display: block; /* Added this to make margin auto work properly */
        }

          .black_hero-title {
            color: #349dff;
            font-size: 3.75rem;
            font-weight: 700;
            letter-spacing: -0.025em;
            line-height: 1;
            margin: 0;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          }

          .black_hero-title-gradient {
            color: #fff;
            
          }

          /* Glass Effect Subtitle Container */
          .black_hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.9);
            max-width: 42rem;
            margin: 0 auto;
            line-height: 1.6;
          }

          .black_hero-actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
          }

          /* Glass Effect Primary Button */
          .black_hero-primary-button {
            background: #349dff;
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 0.75rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            font-family: inherit;
            box-shadow: 
              0 8px 32px rgba(102, 126, 234, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }

          .black_hero-primary-button:hover {
            transform: translateY(-2px);
            box-shadow: 
              0 12px 40px rgba(102, 126, 234, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
            background: rgba(34, 141, 241, 1);
          }

          /* Glass Effect Secondary Button */
          .black_hero-secondary-button {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            color: rgba(255, 255, 255, 0.9);
            padding: 0.75rem 2rem;
            border-radius: 0.75rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          }

          .black_hero-secondary-button:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
            box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
            border-color: rgba(255, 255, 255, 0.3);
          }

          .black_hero-bottom-fade {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 8rem;
            background: linear-gradient(to top, 
              rgba(var(--background-rgb), 1) 0%,
              transparent 100%
            );
            z-index: 10;
          }

          /* Floating particles for extra effect */
          .particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 3;
            pointer-events: none;
          }

          .particle {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: float-particle 8s infinite linear;
          }

          @keyframes float-particle {
            0% {
              transform: translateY(100vh) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100px) rotate(360deg);
              opacity: 0;
            }
          }

          /* Responsive styles */
          @media (min-width: 768px) {
            .black_hero-title {
              font-size: 6rem;
            }
            
            .black_hero-actions {
              flex-direction: row;
            }

            .halogen-light {
              width: 400px;
              height: 400px;
            }
          }

          /* CSS Variables for theming */
          :root {
            --background-rgb: 10, 10, 10;
            --foreground-rgb: 255, 255, 255;
            --primary-rgb: 102, 126, 234;
            --primary-foreground-rgb: 255, 255, 255;
            --secondary-rgb: 38, 38, 38;
            --muted-foreground-rgb: 156, 163, 175;
            --border-rgb: 55, 65, 81;
          }

          /* Ensure dark mode is always applied for this component */
          .black_hero-section {
            --background-rgb: 10, 10, 10;
            --foreground-rgb: 255, 255, 255;
          }
        `}
      </style>

      <section className="black_hero-section">
        <div className="black_hero-background">
          {/* Halogen Lights */}
          <div className="halogen-light halogen-1"></div>
          <div className="halogen-light halogen-2"></div>
          <div className="halogen-light halogen-3"></div>
          
          {/* Floating Particles */}
          <div className="particles" id="particles-container"></div>
          
          <div className="black_hero-overlay" />
        </div>
        
        <div className="black_hero-container">
          <div className="black_hero-content">
            <span className="black_hero-badge">
              LIMITED TIME OFFER
            </span>
            
            <h1 className="black_hero-title">
              <span className="black_hero-title-gradient">BLACK FRIDAY</span>
              <br />
              <span>UP TO 50% OFF</span>
            </h1>
            
            <p className="black_hero-subtitle">
              Level up with sleek Web Design and Next-gen Dev – No overprice, Just Real Deals.
            </p>
            
            <div className="black_hero-actions">
              <button className="black_hero-primary-button">
                Claim Offer
              </button>
              <button className="black_hero-secondary-button">
                Talk to experts
              </button>
            </div>
          </div>
        </div>
        
        <div className="black_hero-bottom-fade" />
      </section>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Create floating particles
          function createParticles() {
            const container = document.getElementById('particles-container');
            if (!container) return;
            
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
              const particle = document.createElement('div');
              particle.className = 'particle';
              
              // Random properties
              const size = Math.random() * 4 + 1;
              const left = Math.random() * 100;
              const duration = Math.random() * 10 + 5;
              const delay = Math.random() * 5;
              
              particle.style.width = size + 'px';
              particle.style.height = size + 'px';
              particle.style.left = left + '%';
              particle.style.animationDuration = duration + 's';
              particle.style.animationDelay = delay + 's';
              
              container.appendChild(particle);
            }
          }
          
          // Initialize particles when component mounts
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', createParticles);
          } else {
            createParticles();
          }
        `
      }} />
    </>
  );
};

export default BlackFridayHero;