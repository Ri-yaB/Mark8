import React, { useState } from 'react';
import './FAQs.css';

function FAQs() {
  const faqs = [
    {
      question:"What qualifies as a creator?",
      answer: "If you have a public account with more than 1000 followers/subscribers, you are just what we are looking for!",
      link: "https://blog.codepen.io/documentation/features/email-verification/#how-do-i-verify-my-email-2"
    },
    {
      question: "Why do creators and businesses need our platform to connect?",
      answer: "In the world of influencer marketing, there is often a lack of transparency regarding fees and reach, leading to a sense of distrust about commitments and payments. To alleviate this problem, a common platform is needed to facilitate easy communication and collaboration, payment processing, and dispute resolution between brands and creators.",
      link: "https://blog.codepen.io/documentation/features/turn-off-javascript-in-previews/"
    },
    {
      question: "Why should creators join Mark8?",
      answer: "Mark8 makes it easy for creators to get discovered by brands, finds sponsorship deals, and receive payments without hiring agents.",
      link: "https://blog.codepen.io/documentation/faq/how-do-i-contact-the-creator-of-a-pen/"
    },
    {
      question: "How do we help creators earn 12-15X more?",
      answer: "We help you get discovered by smaller businesses who earlier didn't have access to influencers. Our algorithm also automatically recommends your profile for campaigns by larger brands who don’t have the time to reach each influencer separately.",
      link: "https://codepen.io/versions"
    },
    {
      question: "When can creators expect to start earning? ",
      answer: "As soon as you complete your profile verification, you will be visible to all brands in the platform and can start connecting",
      link: "https://blog.codepen.io/documentation/features/forks/"
    },
    // 5 more FAQs
    {
      question: "What type of brands are present in Mark8?",
      answer: "We are available for any brand, local or international, who are interested in promoting their product through influencers/creators.",
      link: "#"
    },
    {
      question: "How does Mark8 help businesses in influencer marketing?",
      answer: "We give them all the tools needed to find/compare the right creators, and make informed decisions on sponsorships, brand placements and promotion strategy. Our algorithm helps businesses plan their entire influencer marketing campaign with their given budget, industry, and specifications.",
      link: "#"
    },
    {
      question: "What type of creators are present on Mark8?",
      answer: "Our platform is perfect for creators from all social media platforms like YouTube, Instagram, TikTok, Facebook, X, Moj, Chingari, Telegram etc.",
      link: "#"
    },
    {
      question: "How do we settle payments? ",
      answer: "Our payment gateway allows brands to pay creators directly, mitigating the risk of fraud. Following the completion of promotional activity, the payment is transferred straight to the creator's bank account.",
      link: "#"
    },
    {
      question: "Is the platform free for creators?",
      answer: "We work on a freemium model. Creators can greatly benefit from our free services, with only an 8% transaction fee when they land a brand deal.",
      link: "#"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="wrapper">
      <h1>Frequently Asked Questions</h1>
      <div className="columns">
        <div className="column">
          {faqs.slice(0, 5).map((faq, index) => (
            <div className="container" key={index}>
              <div
                className={`question ${index === activeIndex ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </div>
              <div className="answercont" style={{ maxHeight: index === activeIndex ? '100%' : 0 }}>
                <div className="answer">{faq.answer}</div>
                <a href={faq.link}>Learn More</a>
              </div>
            </div>
          ))}
        </div>
        <div className="column">
          {faqs.slice(5).map((faq, index) => (
            <div className="container" key={index + 5}>
              <div
                className={`question ${index + 5 === activeIndex ? 'active' : ''}`}
                onClick={() => toggleAccordion(index + 5)}
              >
                {faq.question}
              </div>
              <div className="answercont" style={{ maxHeight: index + 5 === activeIndex ? '100%' : 0 }}>
                <div className="answer">{faq.answer}</div>
                <a href={faq.link}>Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs
