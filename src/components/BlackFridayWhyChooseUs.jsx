const BlackFridayWhyChooseUs = () => {
  const features = [
    {
      title: "18+ Years of Excellence",
      description: "With nearly two decades of experience, we bring unparalleled expertise to every project.",
    },
    {
      title: "Fast Turnaround",
      description: "We value your time. Our streamlined processes ensure quick delivery without compromising quality.",
    },
    {
      title: "Clean, Modern Code",
      description: "Experience well-written, maintainable code that stands the test of time.",
    },
    {
      title: "100% Satisfaction",
      description: "Your happiness is our priority. We offer unlimited revisions until you're completely satisfied.",
    },
    {
      title: "Dedicated Support",
      description: "Our team is always here to help. Get quick responses and expert assistance whenever you need it.",
    },
    {
      title: "Black Friday Extended Offer",
      description: "This special pricing is exclusively for Black Friday. Act fast to secure these incredible savings.",
    },
  ];

  // ChevronRight icon SVG
  const ChevronRightIcon = () => (
    <svg 
      className="black_chevron-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <style>
        {`
          .black_why-choose-section {
            padding: 5rem 0;
            position: relative;
          }

          .black_why-choose-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .black_why-choose-header {
            text-align: center;
            margin-bottom: 4rem;
          }

          .black_why-choose-title {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          @media (min-width: 768px) {
            .black_why-choose-title {
              font-size: 3rem;
            }
          }

          .black_why-choose-subtitle {
            color: rgba(var(--muted-foreground-rgb), 1);
            max-width: 42rem;
            margin: 0 auto;
          }

          .black_gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .black_features-grid {
            display: grid;
            gap: 2rem;
            max-width: 72rem;
            margin: 0 auto;
          }

          @media (min-width: 768px) {
            .black_features-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (min-width: 1024px) {
            .black_features-grid {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }

          .black_feature-card {
            position: relative;
            padding: 1.5rem;
            border-radius: 0.75rem;
            border: 1px solid rgba(var(--border-rgb), 1);
            background-color: rgba(var(--card-rgb), 0.3);
            backdrop-filter: blur(8px);
            transition: all 0.3s ease;
          }

          .black_feature-card:hover {
            border-color: rgba(var(--primary-rgb), 0.5);
            background-color: rgba(var(--card-rgb), 0.5);
            transform: translateY(-2px);
          }

          .black_feature-content {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
          }

          .black_chevron-icon {
            width: 1.5rem;
            height: 1.5rem;
            color: rgba(var(--primary-rgb), 1);
            flex-shrink: 0;
          }

          .black_feature-text {
            flex: 1;
          }

          .black_feature-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .black_feature-description {
            font-size: 0.875rem;
            color: rgba(var(--muted-foreground-rgb), 1);
            line-height: 1.5;
          }

          /* CSS Variables for theming */
          :root {
            --background-rgb: 255, 255, 255;
            --foreground-rgb: 0, 0, 0;
            --primary-rgb: 59, 130, 246;
            --primary-foreground-rgb: 255, 255, 255;
            --secondary-rgb: 243, 244, 246;
            --card-rgb: 255, 255, 255;
            --muted-foreground-rgb: 107, 114, 128;
            --border-rgb: 229, 231, 235;
          }

          /* Dark mode support */
          @media (prefers-color-scheme: dark) {
            :root {
              --background-rgb: 0, 0, 0;
              --foreground-rgb: 255, 255, 255;
              --primary-rgb: 59, 130, 246;
              --primary-foreground-rgb: 255, 255, 255;
              --secondary-rgb: 38, 38, 38;
              --card-rgb: 38, 38, 38;
              --muted-foreground-rgb: 156, 163, 175;
              --border-rgb: 55, 65, 81;
            }
          }
        `}
      </style>

      <section className="black_why-choose-section" id="why-choose-us">
        <div className="black_why-choose-container">
          <div className="black_why-choose-header">
            <h2 className="black_why-choose-title">
              Why Choose <span className="black_gradient-text">MindBees</span>?
            </h2>
            <p className="black_why-choose-subtitle">
              MindBees is an A+ highly-rated design agency. Check how our partners can benefit with our service!
            </p>
          </div>
          
          <div className="black_features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="black_feature-card"
              >
                <div className="black_feature-content">
                  <div className="black_chevron-icon-container">
                    <ChevronRightIcon />
                  </div>
                  <div className="black_feature-text">
                    <h3 className="black_feature-title">{feature.title}</h3>
                    <p className="black_feature-description">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlackFridayWhyChooseUs;