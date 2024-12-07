import React, { useState } from 'react';
import "./skills.css";

const Skills = () => {
  const researchPapers = [
    {
      title: "Utilizing a touchpoint attribution attention neural network to identify significant touchpoints",
      year: "2022",
      authors: "Co-authors: Ning Li, Z yan, Chen Dong, A Pani",
      abstract: "This present disclosure relates to systems, non-transitory computer-readable media, and methods for generating and utilizing a touchpoint attribution attention neural network to identify and measure performance of touchpoints in digital content campaigns.",
      pdfLink: "https://patentimages.storage.googleapis.com/6e/6c/99/093f0a039f87f5/US11287894.pdf",
      doiLink: "https://patents.google.com/patent/US11287894B2/en"
    },
    {
      title: "Determining algorithmic multi-channel media attribution based on discrete-time survival modeling",
      year: "2022",
      authors: "Co-authors: Z Yan, Y Wang, A Pani",
      abstract: "The present disclosure relates to a media attribution system that improves multi-channel media attribution by employing discrete-time survival modeling. In particular, the media attribution system uses event data to generate positive and negative conversion paths, which the media attribution system uses to train an algorithmic attribution model.",
      pdfLink: "https://patentimages.storage.googleapis.com/12/9e/6a/3972f3ef2d2452/US11222268.pdf",
      doiLink: "https://patents.google.com/patent/US11222268B2/en"
    },
    {
      title: "Deep neural net with attention for multi-channel multi-touch attribution",
      year: "2018",
      authors: "Co-authors: C Dong, Z Yan, A Pani",
      abstract: "This paper introduces a deep learning model, DNAMTA, for multi-touch attribution in digital marketing. DNAMTA uses an attention mechanism to evaluate the influence of each advertising channel on conversions while accounting for channel interactions, time dependency, and user characteristics. The model improves accuracy in predicting conversions and understanding media channel impacts by incorporating user context, like demographics and behavior, to minimize bias.",
      pdfLink: "https://arxiv.org/pdf/1809.02230",
      doiLink: "https://arxiv.org/abs/1809.02230"
    },
    {
      title: "Intraday modeling to adjust online ad distribution",
      year: "2017",
      authors: "Co-authors: KK Jain, S Mohan",
      abstract: "This patent describes a system for dynamically adjusting online ad campaigns based on real-time performance data. Initially, a daily budget is set for bidding on ads, and ads are distributed in the first part of the day. Performance data from these ads is then compared to historical data, generating a correction factor. This factor adjusts the strategy for the remainder of the day to optimize ad distribution in response to current trends.",
      pdfLink: "https://patentimages.storage.googleapis.com/6c/25/de/767db257e7ef69/US20170358000A1.pdf",
      doiLink: "https://patents.google.com/patent/US20170358000A1/en"
    },
    {
      title: "A Graphical Point Process Framework for Understanding Removal Effects in Multi-Touch Attribution",
      year: "2023",
      authors: "Co-authors: J Tao, Q Chen, JW Snyder Jr, A Meisami, L Xue",
      abstract: "This research addresses the complex problem of attribution in online marketing, where determining the value of each customer touchpoint in driving conversions is essential. We developed a graphical point process framework that evaluates both the direct impact of touchpoints and their interrelationships in a customer’s path to purchase. By assigning an 'attribution score' to each touchpoint, our method provides a more accurate measure of their contribution to conversions. Extensive simulations and real-world tests show that our approach outperforms traditional attribution models.",
      pdfLink: "https://arxiv.org/pdf/2302.06075",
      doiLink: "https://arxiv.org/abs/2302.06075"
    },
    {
      title: "Improving the Capabilities of Large Language Model Based Marketing Analytics Copilots With Semantic Search And Fine-Tuning",
      year: "2024",
      authors: "Co-authors: Y Gao, Y Li, JW Snyder Jr",
      abstract: "This research explores the application of large language models (LLMs), such as GPT-4, for marketing attribution and budget optimization. While AI-driven solutions offer powerful insights, complex models often require specialized implementation teams. Our work investigates how LLMs can streamline domain-specific tasks—like question-answering, SQL generation, and tabular analysis—through semantic search, prompt engineering, and fine-tuning. We compare both proprietary and open-source models, evaluating their performance on marketing use cases to demonstrate their potential in simplifying data-driven decision-making for marketers.",
      pdfLink: "https://arxiv.org/pdf/2404.13077",
      doiLink: "https://arxiv.org/abs/2404.13077"
    },
    {
      title: "Graphical, incremental attribution model based on conditional intensity",
      year: "2024",
      authors: "Co-authors: JW SNYDER, A Meisami, J Tao",
      abstract: "This research presents methods and systems for generating and utilizing causal-based models to improve marketing attribution. By analyzing a sequence of events (touchpoints) leading to a conversion, our approach calculates both direct and indirect attribution for each event. The adjusted attribution combines these measures to more accurately represent each event’s impact on conversions. This model provides a refined understanding of touchpoint contributions, enhancing the accuracy of attribution in marketing.",
      pdfLink: "https://patentimages.storage.googleapis.com/69/40/dd/c89d42873a2bb4/US20240104584A1.pdf",
      doiLink: "https://patents.google.com/patent/US20240104584A1/en"
    },
    {
      title: "Identifying touchpoint contribution utilizing a touchpoint attribution attention neural network",
      year: "2023",
      authors: "Co-authors: Z Yan, C Dong, A Pani, N Li",
      abstract: "This research introduces a touchpoint attribution attention neural network designed to measure the impact of touchpoints in digital campaigns. By training on user interaction sequences across multiple media channels, this deep learning system calculates attribution scores for each touchpoint in a sequence. Additionally, it predicts conversion likelihoods and suggests targeted digital content to optimize engagement across channels, providing a comprehensive tool for marketing effectiveness.",
      pdfLink: "https://patentimages.storage.googleapis.com/a4/80/4d/5805030c095802/US11816272.pdf",
      doiLink: "https://patents.google.com/patent/US11816272B2/en"
    },
    {
      title: "Facilitating analysis of attribution models",
      year: "2022",
      authors: "Co-authors: JW SNYDER, A Meisami, J Tao",
      abstract: "This research outlines methods and systems for analyzing and comparing attribution models in marketing. By calculating a lift score for each model based on divergences between positive and negative event paths, this approach identifies improvements over a baseline model. These lift scores offer insights into each model's effectiveness, helping marketers choose the most impactful attribution model for their campaigns.",
      pdfLink: "https://patentimages.storage.googleapis.com/f2/07/8c/56e5d0582e7447/US20220222594A1.pdf",
      doiLink: "https://patents.google.com/patent/US20220222594A1/en"
    },
    {
      title: "Selecting the best attribution model using adobes attribution lift measure",
      year: "2021",
      authors: "Co-authors: KL Jim Snyde",
      abstract: "This research explores the role of attribution models in helping marketing teams determine which campaigns and ads contribute most to conversions. By assigning credit to different touchpoints along the customer journey, these models guide marketers in designing effective campaigns, optimizing ad bids, and maximizing return on investment. However, the effectiveness of these strategies hinges on selecting the right attribution model for accurate insights.",
      pdfLink: "",
      doiLink: "https://blog.developer.adobe.com/selecting-the-best-attribution-model-using-adobes-attribution-lift-measure-b0395825a41e"
    },
    {
      title: "Intraday modeling to adjust online ad distribution",
      year: "2017",
      authors: "Co-authors: KK Jain, S MOHAN",
      abstract: "",
      pdfLink: "",
      doiLink: ""
    },
    {
      title: "Determination of hexadecapole deformation of 176Yb",
      year: "2017",
      authors: "Co-authors: G Mohanto, A Parihari, A Pal, A Gandhi, S De, ET Mirgule, K Ramachandran, B Srinivasan, K Kalita, K Rani, A Tejaswi, C Vadagama, Vishal Bharud, YK Gupta, LS Danu, BJ Roy, M Kushwaha, D Sarkar, BK Nayak, A Saxena",
      abstract: "This research focuses on determining the nuclear hexadecapole deformation parameter (β₄), a challenging task due to the difficulty of measurement with standard electromagnetic probes. Current methods, such as scattering and Coulomb excitation, have high experimental uncertainties for β₄. This study explores alternative techniques, particularly analyzing fusion barrier distributions, which reflect coupling effects during fusion reactions. By examining these barrier distributions, this approach aims to provide more accurate measurements of hexadecapole deformation for even-even nuclei.",
      pdfLink: "https://inspirehep.net/files/cdab36579dcaf24971195935c20eb523",
      doiLink: "https://inspirehep.net/files/cdab36579dcaf24971195935c20eb523"
    },
    {
      title: "Banzhaf Index for Influence Maximization",
      year: "2015",
      authors: "Co-authors: BV Srinivasan",
      abstract: "This research examines social media marketing through a game-theoretic lens to identify key influencers who can drive campaigns within large networks. By modeling the social network as a coalition game and applying the Banzhaf index, we measure each user’s influence and utility. The resulting algorithm shows improvements over existing influence maximization methods when tested on multiple datasets, offering a more effective way to identify top influencers.",
      pdfLink: "https://link.springer.com/chapter/10.1007/978-3-319-27433-1_18",
      doiLink: "https://link.springer.com/chapter/10.1007/978-3-319-27433-1_18"
    },
    {
      title: "Auctions with Online demand and Online supply",
      year: "2010",
      authors: "Co-authors: None",
      abstract: "This research addresses the challenge of selling identical goods to dynamic, unit-demand bidders when the total supply and number of bidders are unknown. In this setting, items and agents arrive and expire over time, requiring online allocation and payment decisions. We explore decision policies that maintain truthfulness in a dominant strategy equilibrium, and we extend existing mechanism designs to account for dynamically arriving and departing agents in discrete time periods.",
      pdfLink: "https://www.academia.edu/download/35878185/IASreport.pdf",
      doiLink: "https://www.academia.edu/download/35878185/IASreport.pdf"
    },
    {
      title: "SPECIAL SECTION ON NANO 2016: Part I",
      year: "2016",
      authors: "Co-authors: J He, Z Yan, P Marconcini, M Macucci, M Zhu, M Toda, T Ono, A Purwidyantri, I El-Mekki, CS Lai, S Sahay, V Parmar, M Suri",
      abstract: "",
      pdfLink: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7972036",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/7972036/"
    },
    {
      title: "Mixed Breed Dogs Classification",
      year: "2024",
      authors: "Co-authors: W Yang, Y Yuan",
      abstract: "This research tackles the challenge of fine-grained image classification by collecting a new dataset of mixed breed dogs, which is essential for identifying parent breeds—something largely unexplored in existing literature. Using pre-trained models like Inception fine-tuned on pure breed datasets, we classify mixed breed dogs into their parent breeds. The model's performance is evaluated based on the accuracy of identifying one or both parent breeds in Top K predictions. Additionally, we enhance the model with saliency maps and data augmentation to improve classification accuracy.",
      pdfLink: "https://www.academia.edu/download/53717688/egpaper_final.",
      doiLink: "https://www.academia.edu/download/53717688/egpaper_final.pdf"
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Research</h2>
      <span className="section__subtitle">Papers & patents</span>
      <div className="skills__container container grid">
        {researchPapers.slice(0, showAll ? researchPapers.length : 4).map((paper, index) => (
          <div className="paper-card" key={index}>
            <div className="paper-title">{paper.title}</div>
            <div className="paper-meta">{paper.year} | {paper.authors}</div>
            <div className="paper-abstract">{paper.abstract}</div>
            <div className="paper-links">
              <a href={paper.pdfLink} target="_blank" rel="noopener noreferrer">PDF</a>
              <a href={paper.doiLink} target="_blank" rel="noopener noreferrer">DOI</a>
            </div>
          </div>
        ))}
        <a className='button' onClick={toggleShowAll}>
          {showAll ? "Show Less" : "Show All"}
        </a>
      </div>

    </section>
  )
}

export default Skills