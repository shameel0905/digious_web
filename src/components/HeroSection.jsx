import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        className="hero-wrapper hero-2"
        id="hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/hero/hero_bg_2_1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          paddingTop: "40px",
          paddingBottom: "40px"
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }}
        />

        {/* Floating Glow 1 */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-5%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "float 8s ease-in-out infinite",
            zIndex: 2
          }}
        />

        {/* Floating Glow 2 */}
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(181, 217, 255, 0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(45px)",
            animation: "float 10s ease-in-out infinite reverse",
            zIndex: 2
          }}
        />

        {/* Floating Particles */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
            pointerEvents: "none"
          }}
        >
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                background: "rgba(255, 255, 255, 0.6)",
                borderRadius: "50%",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatParticle ${Math.random() * 20 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container" style={{ position: "relative", zIndex: 3 }}>
          <div
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "60px",
              width: "100%"
            }}
          >
            <div
              className="hero-style2"
              style={{
                width: "100%",
                maxWidth: "1440px",
                margin: "0 auto",
                textAlign: "center",
                padding: "80px 20px 0 20px",
                animation: "slideUpFade 0.8s ease-out 0.2s both"
              }}
            >
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                  padding: "12px 24px",
                  borderRadius: "50px",
                  marginBottom: "30px",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  animation: "pulse 2s infinite"
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: "700",
                    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    lineHeight: "1.2"
                  }}
                >
                  LIMITED TIME OFFER - 80% DISCOUNT ENDS SOON
                </span>
              </div>

              {/* Title */}
              <h1
                className="hero-title text-white"
                style={{
                  fontSize: "clamp(48px, 10vw, 80px)",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  marginBottom: "24px",
                  color: "#ffffff",
                  textShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  letterSpacing: "-0.02em"
                }}
              >
                BLACK FRIDAY
              </h1>

              {/* Subtitle */}
              <p
                className="hero-text text-white"
                style={{
                  fontSize: "clamp(32px, 6vw, 60px)",
                  lineHeight: "1.3",
                  marginBottom: "40px",
                  color: "rgba(255,255,255,0.95)",
                  maxWidth: "1440px",
                  margin: "0 auto 25px",
                  fontWeight: "700",
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)"
                }}
              >
                "THE{" "}
                <span
                  style={{
                    background: "#349dff",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  BIGGEST{" "}
                </span>
                SALE OF THE YEAR!"
              </p>

              {/* CTA */}
              <div
                className="btn-wrap"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  flexWrap: "wrap"
                }}
              >
                <Link
                  to="/black-friday-deal"
                  className="global-btn style3"
                  style={{
                    fontSize: "clamp(16px, 2.5vw, 18px)",
                    padding: "clamp(12px, 3vw, 16px) clamp(24px, 4vw, 32px)"
                  }}
                >
                  Claim 80% Discount <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>

              {/* Client Thumbnails */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  className="client-thumb-group"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    gap: "clamp(8px, 2vw, 12px)",
                    paddingTop: "20px"
                  }}
                >
                  {[1, 2, 3].map((item, index) => (
                    <div
                      key={index}
                      className="thumb"
                      style={{
                        width: "135px",
                        height: "135px",
                        transform: index === 1 ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.3s ease",
                        animation: `slideUpFade 0.8s ease-out ${0.7 + index * 0.1}s both`
                      }}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/client/client-img-2-${item}.png`}
                        alt="avatar"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="hero-client-box"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "40px"
              }}
            />
          </div>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(40px); }
          }

          @keyframes floatParticle {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.7; }
            50% { transform: translateY(-100px) translateX(20px); opacity: 0.3; }
          }

          @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          @media (max-width: 768px) {
            .hero-wrapper.hero-2 {
              min-height: 80vh;
              padding-top: 20px;
              padding-bottom: 20px;
              background-attachment: scroll;
            }

            .hero-style2 {
              padding: 40px 15px 0 !important;
            }

            .global-btn.style3 {
              width: 100%;
              max-width: 280px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default HeroSection;
