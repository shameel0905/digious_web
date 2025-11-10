const BlackFridayPricingCards = () => {
  const plans = [
    {
      name: "Starter",
      popular: false,
      price: "$999",
      originalPrice: "$2,099",
      discount: "52% OFF",
      description: "A well-rounded set of agency & complex",
      features: [
        "Up to 10 users & guest designers",
        "Responsive & Branded Content Kit",
        "Full subscription on all devices",
        "Integrations with other tools",
        "Easy content export & share it",
        "Basic media file types free & streamlit",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro Launch",
      popular: true,
      price: "$1,499",
      originalPrice: "$2,499",
      discount: "51% OFF",
      description: "Your creatives can build & self-manage",
      features: [
        "Unlimited users & team collaborators",
        "WordPress CMS integration",
        "STP ready design for fast integration user's",
        "Conversion tracking (GA, Meta Pixels)",
        "Advanced customization features",
        "Seamless 3rd-party integrations",
        "All user delivery",
        "Block library, code snippet & company",
      ],
      cta: "Get Started",
    },
  ];

  // Check icon SVG
  const CheckIcon = () => (
    <svg 
      className="black_feature-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <style>
        {`
          .black_pricing-section {
            padding: 5rem 0;
            position: relative;
            background: linear-gradient(270deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%);
            background-size: cover;
            background-position: center;
          }

          .black_pricing-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .black_pricing-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .black_pricing-badge {
            display: inline-block;
            background-color: rgba(var(--primary-rgb), 0.1);
            color: #fff;
            border: 1px solid rgba(var(--primary-rgb), 0.3);
            border-radius: 0.375rem;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .black_pricing-grid {
            display: grid;
            gap: 2rem;
            max-width: 80rem;
            margin: 0 auto;
          }

          @media (min-width: 768px) {
            .black_pricing-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          .black_pricing-card {
            position: relative;
            border-radius: 1rem;
            padding: 2rem;
            border: 1px solid rgba(var(--border-rgb), 1);
            background-color: #fff;
            backdrop-filter: blur(8px);
          }

          .black_pricing-card-popular {
            border-color: rgba(var(--primary-rgb), 1);
            background-color: rgba(var(--card-rgb), 0.5);
          }

          .black_pricing-card-popular::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: #ffffffff;
            border-radius: 1.125rem;
            z-index: -1;
            
           
          }

          .black_popular-badge {
            position: absolute;
            top: -0.75rem;
            right: 2rem;
            background-color: rgba(var(--primary-rgb), 1);
            color: rgba(var(--primary-foreground-rgb), 1);
            border-radius: 0.375rem;
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 1;
          }

          .black_card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.5rem;
          }

          .black_plan-name {
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0;
            color : rgba(34, 141, 241, 1);
          }

          .black_discount-badge {
            background-color: rgba(var(--secondary-rgb), 1);
            color: rgba(var(--foreground-rgb), 1);
            border-radius: 0.375rem;
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 1;
          }

          .black_plan-description {
            color: #1a1a1a;
            margin-bottom: 1.5rem;
          }

          .black_price-section {
            margin-bottom: 1.5rem;
          }

          .black_price-container {
            display: flex;
            align-items: flex-end;
            gap: 0.5rem;
          }

          .black_current-price {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1;
            color: #1a1a1a;
          }

          .black_original-price {
            font-size: 1.5rem;
            color: rgba(var(--muted-foreground-rgb), 1);
            text-decoration: line-through;
            margin-bottom: 0.5rem;
          }

          .black_price-note {
            font-size: 0.875rem;
            color: #1a1a1a;
            margin-top: 0.5rem;
          }

          .black_features-section {
            margin-bottom: 2rem;
          }

          .black_features-title {
            font-weight: 600;
            font-size: 0.875rem;
            margin-bottom: 1rem;
            color: #1a1a1a;
          }

          .black_features-list {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .black_feature-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .black_feature-icon {
            width: 1.25rem;
            height: 1.25rem;
            color: rgba(var(--primary-rgb), 1);
            flex-shrink: 0;
            margin-top: 0.125rem;
          }

          .black_feature-text {
            font-size: 0.875rem;
            color: #1a1a1a ;
            line-height: 1.4;
          }

          .black_pricing-button {
            width: 100%;
            background-color: rgba(var(--secondary-rgb), 1);
            color: rgba(var(--foreground-rgb), 1);
            padding: 0.75rem 2rem;
            border-radius: 0.375rem;
            border: none;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: inherit;
          }

          .black_pricing-button:hover {
            background-color: rgba(var(--secondary-rgb), 0.8);
            transform: translateY(-1px);
          }

          .black_pricing-button-primary {
            background-color: rgba(var(--primary-rgb), 1);
            color: rgba(var(--primary-foreground-rgb), 1);
          }

          .black_pricing-button-primary:hover {
            background-color: rgba(var(--primary-rgb), 0.9);
          }

          .black_card-footer {
            text-align: center;
            font-size: 0.75rem;
            color: rgba(var(--muted-foreground-rgb), 1);
            margin-top: 1rem;
          }

          
          }
        `}
      </style>

      <section className="black_pricing-section" id="offers">
        <div className="black_pricing-container">
          <div className="black_pricing-header">
            <span className="black_pricing-badge">
              Best Popular
            </span>
          </div>
          
          <div className="black_pricing-grid">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`black_pricing-card ${plan.popular ? 'black_pricing-card-popular' : ''}`}
              >
                {plan.popular && (
                  <div className="black_popular-badge">
                    {plan.discount}
                  </div>
                )}
                
                <div className="black_card-header">
                  <h3 className="black_plan-name">{plan.name}</h3>
                  {!plan.popular && (
                    <span className="black_discount-badge">
                      {plan.discount}
                    </span>
                  )}
                </div>
                
                <p className="black_plan-description">{plan.description}</p>
                
                <div className="black_price-section">
                  <div className="black_price-container">
                    <span className="black_current-price">{plan.price}</span>
                    <span className="black_original-price">
                      {plan.originalPrice}
                    </span>
                  </div>
                  <p className="black_price-note">
                    One-time payment + free 6 months support
                  </p>
                </div>
                
                <div className="black_features-section">
                  <p className="black_features-title">You'll get:</p>
                  <ul className="black_features-list">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="black_feature-item">
                        <CheckIcon />
                        <span className="black_feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className={`black_pricing-button ${plan.popular ? 'black_pricing-button-primary' : ''}`}
                >
                  {plan.cta}
                </button>
                
                <p className="black_card-footer">
                  {plan.popular ? 'Most accurate' : 'Extend'}. Price after Friday only +$100
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlackFridayPricingCards;