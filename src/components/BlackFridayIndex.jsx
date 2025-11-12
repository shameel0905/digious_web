import { useState } from "react";
import ClientThree from "./ClientThree";
import BlackFridayPopup from "./BlackFridayPopup"; // Import your popup component

const BlackFridayIndex = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // SVG Icons
  const CheckIcon = () => (
    <svg 
      className="black_icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg 
      className="black_icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg 
      className="black_accordion-chevron" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <style>
        {`
          .black_page {
            min-height: 100vh;
            position: relative;
            background: #141416 !important;
          }

          .black_page::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(var(--background-rgb), 0.97) 0%, rgba(var(--background-rgb), 0.95) 100%);
            z-index: -2;
          }

          .black_shadow-shape-left::after {
            content: "";
            position: fixed;
            filter: blur(300px);
            width: 311px;
            height: 311px;
            border-radius: 50%;
            background: #3b82f6;
            left: 0;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 200;
          }

          .black_shadow-shape-right::after {
            content: "";
            position: fixed;
            filter: blur(300px);
            width: 311px;
            height: 311px;
            border-radius: 50%;
            background: #3b82f6;
            right: 0;
            top: 20%;
            transform: translate(50%, -50%);
            z-index: 200;
          }

          /* Header */
          .black_header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(var(--border-rgb), 0.5);
            background-color: rgba(var(--background-rgb), 0.8);
            backdrop-filter: blur(16px);
          }

          .black_header-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .black_header-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 4rem;
          }

          .black_logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .black_logo-icon {
            width: 2rem;
            height: 2rem;
            background-color: rgba(var(--primary-rgb), 1);
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .black_logo-text {
            color: rgba(var(--primary-foreground-rgb), 1);
            font-size: 0.875rem;
            font-weight: 700;
          }

          .black_logo-name {
            font-size: 1.25rem;
            font-weight: 700;
          }

          .black_nav {
            display: none;
            align-items: center;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .black_nav {
              display: flex;
            }
          }

          .black_nav-link {
            font-size: 0.875rem;
            color: rgba(var(--muted-foreground-rgb), 1);
            transition: color 0.2s ease;
            text-decoration: none;
          }

          .black_nav-link:hover {
            color: rgba(var(--foreground-rgb), 1);
          }

          .black_header-button {
            background-color: rgba(var(--primary-rgb), 1);
            color: rgba(var(--primary-foreground-rgb), 1);
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            border: none;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s ease;
            font-family: inherit;
          }

          .black_header-button:hover {
            background-color: rgba(var(--primary-rgb), 0.9);
          }

          /* Hero Section */
          .black_hero-section {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding-top: 12rem;
            background: #141416 !important;
          }

          .black_hero-background {
            position: absolute;
            inset: 0;
            z-index: 0;
            background-size: cover;
            background-position: center;
          }

          .black_hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, 
              rgba(var(--background-rgb), 0.5) 0%,
              rgba(var(--background-rgb), 0.8) 50%,
              rgba(var(--background-rgb), 1) 100%
            );
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
            max-width: 64rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .black_hero-badge {
            display: inline-block;
            background-color: rgba(var(--secondary-rgb), 0.5);
            color: rgba(var(--foreground-rgb), 1);
            border: 1px solid rgba(var(--primary-rgb), 0.3);
            border-radius: 0.375rem;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            width: fit-content;
            margin: 0 auto;
          }

          .black_hero-title {
            font-size: 3.75rem;
            font-weight: 700;
            letter-spacing: -0.025em;
            line-height: 1;
            margin: 0;
            color: #ffff;
          }

          @media (min-width: 768px) {
            .black_hero-title {
              font-size: 6rem;
            }
          }

          .black_gradient-text {
            background: #349dff;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .black_hero-subtitle {
            font-size: 1.25rem;
            color: #fff;
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

          @media (min-width: 640px) {
            .black_hero-actions {
              flex-direction: row;
            }
          }

          .black_hero-primary-button {
            background-color: rgba(var(--primary-rgb), 1);
            color: rgba(var(--primary-foreground-rgb), 1);
            padding: 0.75rem 2rem;
            border-radius: 0.375rem;
            border: none;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
            font-family: inherit;
          }

          .black_hero-primary-button:hover {
            background-color: rgba(var(--primary-rgb), 0.9);
            transform: translateY(-1px);
          }

          .black_hero-primary-button::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: #349dff;
            border-radius: 0.5rem;
            z-index: -1;
            opacity: 0.3;
            filter: blur(4px);
          }

          .black_hero-secondary-button {
            background-color: #FFF;
            color: #1a1a1a;
            padding: 0.75rem 2rem;
            border-radius: 0.375rem;
            border: 1px solid rgba(var(--border-rgb), 1);
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: inherit;
          }

          .black_hero-secondary-button:hover {
            background-color: rgba(var(--secondary-rgb), 1);
            transform: translateY(-1px);
          }

          

          /* Section Base */
          .black_section {
            padding: 5rem 0;
            position: relative;
            background: #141416 !important;
          }

          .black_container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .black_section-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .black_section-badge {
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
            margin-bottom: 1rem;
          }

          .black_section-title {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            Color: #fff;
            text-transform: capitalize;
          }

          @media (min-width: 768px) {
            .black_section-title {
              font-size: 3rem;
            }
          }

          .black_section-subtitle {
            color: #fff;
            max-width: 42rem;
            margin: 0 auto;
            line-height: 1.6;
          }

          /* Pricing Cards */
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

          @media (min-width: 325px) and (max-width: 768px) {
          .black_cta-primary-button{
                font-size: 0.8rem;
                padding: 0.5rem 1.8rem;
          }
          }

          .black_pricing-card {
            position: relative;
            border-radius: 1rem;
            padding: 2rem;
            border: 1px solid rgba(var(--border-rgb), 1);
            background-color: rgba(var(--card-rgb), 0.1);
            backdrop-filter: blur(8px);
          }

          .black_pricing-card-popular {
            border-color: rgba(var(--primary-rgb), 1);
            background-color: rgba(var(--card-rgb), 0.15);
          }

          .black_pricing-card-popular::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: #349dff;
            border-radius: 1.125rem;
            z-index: -1;
            opacity: 0.3;
            filter: blur(4px);
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
            color: rgba(var(--muted-foreground-rgb), 1);
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
          }

          .black_original-price {
            font-size: 1.5rem;
            color: rgba(var(--muted-foreground-rgb), 1);
            text-decoration: line-through;
            margin-bottom: 0.5rem;
          }

          .black_price-note {
            font-size: 0.875rem;
            color: rgba(var(--muted-foreground-rgb), 1);
            margin-top: 0.5rem;
          }

          .black_features-section {
            margin-bottom: 2rem;
          }

          .black_features-title {
            font-weight: 600;
            font-size: 0.875rem;
            margin-bottom: 1rem;
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

          .black_icon {
            width: 1.25rem;
            height: 1.25rem;
            color: #fff;
            flex-shrink: 0;
            margin-top: 0.125rem;
          }

          .black_feature-text {
            font-size: 0.875rem;
            color: rgba(var(--muted-foreground-rgb), 1);
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

          /* Enhanced Why Choose Us Styles */
          .black_feature-card-enhanced {
            position: relative;
            padding: 2rem 1.5rem;
            border-radius: 1rem;
            border: 1px solid rgba(var(--border-rgb), 0.3);
            background: linear-gradient(145deg, #f8fafc, #ffffff);
            backdrop-filter: blur(12px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
          }

          .black_feature-card-enhanced:hover {
            transform: translateY(-8px);
            border-color: rgba(var(--primary-rgb), 0.6);
            background: linear-gradient(145deg, #ffffff, #f8fafc);
            box-shadow: 
              0 20px 40px rgba(59, 130, 246, 0.15),
              0 8px 24px rgba(59, 130, 246, 0.1);
          }

          .black_feature-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
          }

          .black_feature-icon {
            font-size: 2rem;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.1), rgba(var(--accent-rgb), 0.1));
            border-radius: 0.75rem;
            border: 1px solid rgba(var(--primary-rgb), 0.2);
          }

          .black_feature-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1a1a1a;
            margin: 0;
          }

          .black_feature-description {
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            font-size: 0.95rem;
          }

          .black_feature-highlights {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .black_highlight-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: #374151;
          }

          .black_highlight-item .black_icon {
            width: 1rem;
            height: 1rem;
            color: rgba(var(--primary-rgb), 1);
          }

          .black_feature-hover-border {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, rgba(var(--primary-rgb), 1), rgba(var(--accent-rgb), 1));
            transition: width 0.4s ease;
          }

          .black_feature-card-enhanced:hover .black_feature-hover-border {
            width: 100%;
          }

          /* Trust Metrics */
          .black_trust-metrics {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-top: 4rem;
            padding: 3rem 2rem;
            background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.05), rgba(var(--accent-rgb), 0.05));
            border-radius: 1.5rem;
            border: 1px solid rgba(var(--primary-rgb), 0.1);
            backdrop-filter: blur(12px);
          }

          @media (min-width: 768px) {
            .black_trust-metrics {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .black_trust-metric {
            text-align: center;
            padding: 1rem;
          }

          .black_metric-number {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, rgba(var(--primary-rgb), 1), rgba(var(--accent-rgb), 1));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
          }

          .black_metric-label {
            font-size: 0.875rem;
            color: #6b7280;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          /* Enhanced Section Header */
          .black_section-header-enhanced {
            text-align: center;
            margin-bottom: 4rem;
          }

          .black_section-badge-enhanced {
            display: inline-block;
            
            color: rgba(var(--primary-rgb), 1);
            
            
            padding: 0.5rem .5rem;
            font-size: 18px;
            font-weight: 500;
            text-transform: capalized;
    
            margin-bottom: 1.5rem;
          }

          .black_section-title-enhanced {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            color: #fff;
            line-height: 1.2;
            text-transform: capitalize;
          }

          @media (min-width: 768px) {
            .black_section-title-enhanced {
              font-size: 3.5rem;
            }
          }

          .black_section-subtitle-enhanced {
            font-size: 1.125rem;
            color: #e5e7eb;
            max-width: 48rem;
            margin: 0 auto;
            line-height: 1.7;
          }

          /* Why Choose Us Grid */
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

          /* Trust Section */
          .black_trust-section {
            background-color: rgb(227 227 227 / 23%);
            border-radius: 1.5rem;
            padding: 3rem;
            border: 1px solid rgba(var(--primary-rgb), 0.2);
            backdrop-filter: blur(8px);
            position: relative;
            overflow: hidden;
          }

          .black_trust-gradient {
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(to left, rgba(var(--primary-rgb), 0.05), transparent);
          }

          .black_stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 3rem;
          }

          @media (min-width: 768px) {
            .black_stats-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .black_stat-item {
            text-align: center;
          }

          .black_stat-number {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .black_stat-label {
            font-size: 0.875rem;
            color: #fff;
          }

          .black_clients-section {
            margin-top: 3rem;
          }

          .black_clients-label {
            text-align: center;
            font-size: 0.875rem;
            color: rgba(var(--muted-foreground-rgb), 1);
            margin-bottom: 2rem;
          }

          .black_clients-grid {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 3rem;
          }

          .black_client-name {
            font-size: 1.125rem;
            font-weight: 600;
            color: rgba(var(--muted-foreground-rgb), 0.6);
            transition: color 0.2s ease;
          }

          .black_client-name:hover {
            color: rgba(var(--foreground-rgb), 1);
          }

          /* Portfolio */
          .black_portfolio-grid {
            display: grid;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .black_portfolio-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (min-width: 1024px) {
            .black_portfolio-grid {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }

          .black_portfolio-card {
            position: relative;
            border-radius: 0.75rem;
            overflow: hidden;
            border: 1px solid #646464ff;
            background-color: rgba(var(--card-rgb), 0.1);
            backdrop-filter: blur(8px);
            transition: all 0.3s ease;
          }

          .black_portfolio-card:hover {
            border-color: rgba(var(--primary-rgb), 0.5);
            background-color: rgba(var(--card-rgb), 0.15);
          }

          .black_portfolio-image {
            aspect-ratio: 4/3;
            background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.1), rgba(var(--accent-rgb), 0.1));
            position: relative;
            overflow: hidden;
            background-size: cover;
            background-position: center;
            transition: transform 0.3s ease;
          }

          .black_portfolio-card:hover .black_portfolio-image {
            transform: scale(1.05);
          }

          // .black_portfolio-overlay {
          //   position: absolute;
          //   inset: 0;
          //   background: linear-gradient(to top, rgba(var(--background-rgb), 0.8), transparent);
          //   opacity: 0.6;
          //   transition: opacity 0.3s ease;
          // }

          .black_portfolio-card:hover .black_portfolio-overlay {
            opacity: 0.3;
          }

          .black_portfolio-content {
            padding: 1.5rem;
          }

          .black_tags-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
          }

          .black_tag {
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            border-radius: 9999px;
            background-color: #2976c0;
            color: #fff;
          }

          .black_portfolio-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #fff;
          }

          /* FAQ */
          .black_faq-container {
            max-width: 48rem;
            margin: 0 auto;
          }

          .black_accordion {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .black_accordion-item {
            border: 1px solid rgba(var(--border-rgb), 1);
            border-radius: 0.75rem;
            background-color: rgba(var(--card-rgb), 0.1);
            backdrop-filter: blur(8px);
            padding: 0 1.5rem;
            transition: border-color 0.3s ease;
          }

          .black_accordion-item.open {
            border-color: rgba(var(--primary-rgb), 0.5);
            background-color: rgba(var(--card-rgb), 0.15);
          }

          .black_accordion-trigger {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 1.5rem 0;
            background: none;
            border: none;
            cursor: pointer;
            font-family: inherit;
            text-align: left;
          }

          .black_accordion-question {
            font-size: 1.125rem;
            font-weight: 600;
            margin: 0;
          }

          .black_accordion-chevron {
            width: 1.5rem;
            height: 1.5rem;
            color: rgba(var(--muted-foreground-rgb), 1);
            transition: transform 0.3s ease;
            flex-shrink: 0;
            margin-left: 1rem;
          }

          .black_accordion-item.open .black_accordion-chevron {
            transform: rotate(180deg);
          }

          .black_accordion-content {
            padding-bottom: 1.5rem;
            color: rgba(var(--muted-foreground-rgb), 1);
            line-height: 1.6;
          }

          /* Final CTA */
          .black_cta-section {
            background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.1), rgba(var(--accent-rgb), 0.1));
            border: 1px solid rgba(var(--primary-rgb), 0.2);
            border-radius: 1.5rem;
            padding: 3rem;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(8px);
          }

          @media (min-width: 768px) {
            .black_cta-section {
              padding: 4rem;
            }
          }

          .black_cta-glow {
            position: absolute;
            inset: 0;
            background: #2976c0;
            opacity: 1;
          }

          .black_cta-content {
            text-align: center;
            max-width: 48rem;
            margin: 0 auto;
            position: relative;
            z-index: 10;
          }

          .black_cta-title {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            Color: #fff;
          }

          @media (min-width: 768px) {
            .black_cta-title {
              font-size: 3rem;
            }
          }

          .black_cta-subtitle {
            font-size: 1.125rem;
            color: #fff;
            margin-bottom: 2rem;
          }

          .black_cta-actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          @media (min-width: 640px) {
            .black_cta-actions {
              flex-direction: row;
            }
          }

          .black_cta-primary-button {
            background-color: #FFF;
            color: #1a1a1a;
            padding: 0.75rem 2rem;
            border-radius: 0.375rem;
            border: 1px solid rgba(var(--border-rgb), 1);
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: inherit;
          }

          .black_cta-primary-button:hover {
            background-color: #f5f5f5;
          }

          .black_benefits-container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            font-size: 0.875rem;
          }

          .black_benefit-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #fff;  
          }

          /* CSS Variables for theming */
          :root {
            --background-rgb: 255, 255, 255;
            --foreground-rgb: 0, 0, 0;
            --primary-rgb: 59, 130, 246;
            --primary-foreground-rgb: 255, 255, 255;
            --secondary-rgb: 243, 244, 246;
            --secondary-foreground-rgb: 0, 0, 0;
            --card-rgb: 255, 255, 255;
            --muted-foreground-rgb: 107, 114, 128;
            --border-rgb: 229, 231, 235;
            --accent-rgb: 139, 92, 246;
          }

          /* Dark mode support */
          
          
        `}
      </style>

      <div className="black_page black_shadow-shape-left black_shadow-shape-right">
       

        {/* Hero */}
        <section className="black_hero-section">
          <div className="black_hero-container">
            <div className="black_hero-content">
              <span className="black_hero-badge">LIMITED TIME OFFER</span>
              
              <h1 className="black_hero-title">
                <span className="black_gradient-text">BLACK FRIDAY</span>
                <br />
                <span>UP TO 50% OFF</span>
              </h1>
              
              <p className="black_hero-subtitle">
                Level up this Black Friday with sleek web design and next-gen development — no overpricing, just unbeatable deals
              </p>
              
              <div className="black_hero-actions">
                <button className="black_hero-primary-button" onClick={openPopup}>
                  Avail Offer Now
                </button>
                
              </div>
              
            </div>
          </div>
          
          <div className="black_hero-bottom-fade" />
        </section>

        {/* Enhanced Why Choose Us */}
        <section className="black_section" id="why-choose-us">
          <div className="black_container">
            <div className="black_section-header-enhanced">
              <img src="assets/img/icon/title_left2.svg" alt="shape" />
              <span className="black_section-badge-enhanced">Why Choose Us</span>
              <h2 className="black_section-title-enhanced">
                Why <span className="black_gradient-text">Thousands Trust</span> Digious Solutions
              </h2>
              <p className="black_section-subtitle-enhanced">
                For over 18 years, we've been the secret weapon for businesses worldwide. 
                This Black Friday, discover why 1,200+ clients choose us for their digital success.
              </p>
            </div>
            
            {/* Main Features Grid */}
            <div className="black_features-grid">
              {[
                {
                  icon: "🏆",
                  title: "18+ Years Excellence",
                  description: "Two decades of delivering cutting-edge solutions with proven results and industry expertise.",
                  highlights: ["Industry veterans", "Proven track record", "Continuous innovation"]
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast Delivery",
                  description: "Get market-ready solutions in record time without compromising on quality or attention to detail.",
                  highlights: ["Quick turnaround", "Agile methodology", "No quality compromise"]
                },
                {
                  icon: "💎",
                  title: "Premium Quality Code",
                  description: "Clean, scalable, and maintainable code that stands the test of time and grows with your business.",
                  highlights: ["Future-proof", "Scalable architecture", "Best practices"]
                },
                {
                  icon: "🎯",
                  title: "100% Client Satisfaction",
                  description: "Your success is our priority. We work until you're completely thrilled with the results.",
                  highlights: ["Unlimited revisions", "Dedicated support", "Success guarantee"]
                },
                {
                  icon: "🤝",
                  title: "Dedicated Partnership",
                  description: "More than a service provider - we become your strategic partner in digital growth.",
                  highlights: ["24/7 support", "Strategic guidance", "Long-term partnership"]
                },
                {
                  icon: "🔥",
                  title: "Black Friday Exclusive",
                  description: "Limited-time offers with unprecedented value you won't find anywhere else.",
                  highlights: ["50% savings", "Bonus features", "Priority access"]
                }
              ].map((feature, index) => (
                <div key={index} className="black_feature-card-enhanced">
                  {/* Feature Header */}
                  <div className="black_feature-header">
                    <div className="black_feature-icon">
                      {feature.icon}
                    </div>
                    <h3 className="black_feature-title">{feature.title}</h3>
                  </div>
                  
                  {/* Feature Description */}
                  <p className="black_feature-description">{feature.description}</p>
                  
                  {/* Feature Highlights */}
                  <div className="black_feature-highlights">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="black_highlight-item">
                        <CheckIcon />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="black_feature-hover-border" />
                </div>
              ))}
            </div>

            {/* Trust Metrics Bar */}
            {/* <div className="black_trust-metrics">
              {[
                { number: "1,200+", label: "Happy Clients" },
                { number: "2,500+", label: "Projects Delivered" },
                { number: "98%", label: "Client Retention" },
                { number: "4.9/5", label: "Client Rating" }
              ].map((metric, index) => (
                <div key={index} className="black_trust-metric">
                  <div className="black_metric-number">{metric.number}</div>
                  <div className="black_metric-label">{metric.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </section>

        {/* Trust Section */}
        <section className="black_section">
          <div className="black_container">
            <div className="black_trust-section">
              <div className="black_trust-gradient" />
              
              <div>
                <div style={{ marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
                  
                  <span className="black_section-badge" style={{ backgroundColor: 'rgba(var(--primary-rgb), 0.2)', border: 'none' }}>
                    OUR TRUST
                  </span>
                  <h2 className="black_section-title" style={{ marginBottom: '1rem' }}>
                    Trusted by Businesses Worldwide
                  </h2>
                  <p className="black_section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
                   For over 18 years, we've partnered with more than 1,200 clients worldwide to drive their online success. Every project is a chance to deliver exceptional results, foster long-term partnerships, and take pride in the work we love.
                  </p>
                </div>
                
                <div className="black_stats-grid">
                  {[
                    { number: "1200+", label: "Clients" },
                    { number: "40+", label: "Team" },
                    { number: "98%", label: "Client Satisfaction" },
                    { number: "18+", label: "Years of Excellence" },
                  ].map((stat, index) => (
                    <div key={index} className="black_stat-item">
                      <div className="black_stat-number black_gradient-text">{stat.number}</div>
                      <div className="black_stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ClientThree */}
        <ClientThree />

        {/* Portfolio */}
        <section className="black_section" id="portfolio">
          <div className="black_container">
            <div className="black_section-header">
              <img src="assets/img/icon/title_left2.svg" alt="shape" />
              <span className="black_section-badge-enhanced">Discover the Work We're Proud Of</span>
              <h2 className="black_section-title">
                Our projects speak for themselves
                <br />
                take a look!
              </h2>
            </div>
            
            <div className="black_portfolio-grid">
              {[
                {
                  title: "Mijo Sports",
                  category: "WordPress",
                  tags: ["SXO", "WordPress", "Athlete"],
                  image: "../assets/img/blackfriday/Mijo.jpg"
                },
                {
                  title: "Athltecon",
                  category: "Wordpress",
                  tags: ["Design", "WordPress", "Athlete"],
                  image: "../assets/img/blackfriday/athletecon.jpg"
                },
                {
                  title: "CWC-Shop",
                  category: "Wordpress",
                  tags: ["CSS", "WordPress", "E-commerce"],
                  image: "../assets/img/blackfriday/cwc.jpg"
                },
                {
                  title: "Athltecon 2.0",
                 category: "Wordpress",
                  tags: ["Design", "WordPress", "Athlete"],
                  image: "../assets/img/blackfriday/athletecon.jpg"
                },
                {
                  title: "Insure Wise - Insurance Made Simple",
                  category: "WordPress",
                  tags: ["WordPress", "Insurance", "Health"],
                  image: "../assets/img/blackfriday/insurewise.jpg"
                },
                {
                  title: "My Palmyra Properties",
                  category: "WordPress",
                  tags: ["Real Estate", "SEO", "Development"],
                  image: "../assets/img/blackfriday/mypalmyra.jpg"
                },
              ].map((project, index) => (
                <div key={index} className="black_portfolio-card">
                  <div 
                    className="black_portfolio-image"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="black_portfolio-overlay" />
                  </div>
                  
                  <div className="black_portfolio-content">
                    <div className="black_tags-container">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="black_tag">{tag}</span>
                      ))}
                    </div>
                    <h3 className="black_portfolio-title">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="black_section">
          <div className="black_container">
            <div className="black_cta-section">
              <div className="black_cta-glow" />
              
              <div className="black_cta-content">
                <h2 className="black_cta-title">Don't Miss Out on This Exclusive Opportunity!</h2>
                <p className="black_cta-subtitle">
                 Black Friday is here! Grab 50% off today and lock in your renewal at just $199 — unbeatable savings you don't want to miss.
                </p>
                
                <div className="black_cta-actions">
                  <button className="black_cta-primary-button" onClick={openPopup}>
                    Unlock Your Black Friday Deal
                  </button>
                  
                </div>
                
                <div className="black_benefits-container">
                  {[
                    "50 percent deals included",
                    "Best functionality",
                    "Multiple product support",
                  ].map((benefit, index) => (
                    <div key={index} className="black_benefit-item">
                      <CheckIcon />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Black Friday Popup */}
        {isPopupOpen && <BlackFridayPopup onClose={closePopup} />}
      </div>
    </>
  );
};

export default BlackFridayIndex;
