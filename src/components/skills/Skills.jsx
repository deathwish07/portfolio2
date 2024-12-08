import React, { useState } from 'react';
import "./skills.css";

const Skills = () => {
  const researchPapers = [
    {
      title: "Conformal Multi-Service Antenna Arrays: Hybrid In Situ & Signal of Opportunity (SoOP) Calibration",
      year: "2020",
      authors: "Co-authors: DW Bliss",
      abstract: "This research addresses the inefficiencies of stove-pipe antenna designs in commercial aircraft by proposing a conformal array system that supports multiple services while reducing drag and fuel consumption. To overcome challenges like pointing errors and side lobe degradation caused by structural changes in the fuselage, we develop an online calibration algorithm. This algorithm leverages cooperative satellites in direct line-of-sight and an onboard calibration source to optimize beam steering. The proposed hybrid calibration method is validated through simulations, demonstrating its effectiveness in mitigating mismatch issues.",
      pdfLink: "https://ieeexplore.ieee.org/iel7/9348428/9348429/09348461.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9348461"
    },
    {
      title: "Joint Positioning-Communications System Design and Experimental Demonstration",
      year: "2019",
      authors: "Co-authors: A Herschfelt, H Yu, S Wu, Y Li, N Sciammetta, L Smith, K Rueger, H Lee, C Chakrabarti, D W Bliss",
      abstract: "This research introduces a hybrid Communications, Navigation, and Surveillance (CNS) radio system designed for efficient spectrum use in dense networks of base stations and unmanned aerial systems (UASs). Using a single, co-use waveform, the system simultaneously performs high-precision relative positioning (σ < 5 cm) and encrypted network communications within a limited 10 MHz bandwidth. Applications include air traffic management, collision avoidance, automated landing, and distributed timing synchronization. The system is resistant to cyberattacks, supports MIMO communications, and enables orientation estimation. Implemented on a consumer off-the-shelf testbed, the system demonstrates its potential as a viable alternative positioning, navigation, and timing (APNT) solution.",
      pdfLink: "https://ieeexplore.ieee.org/iel7/9069808/9081608/09081625.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9081625"
    },
    {
      title: "UWB Radar Vibrometry: An RF Microphone",
      year: "2019",
      authors: "Co-authors: Y Rong, A Venkataramani, DW Bliss",
      abstract: "This research demonstrates the potential of X-band UWB radars for remote sensing of sound and acoustic signal recovery from vibrating sources. Unlike earlier studies limited to single-source recovery in direct line-of-sight scenarios, our work isolates and recovers signals from multiple sources at varying ranges. Additionally, leveraging the see-through capabilities of microwave signals, we extend this technology to surveillance of targets behind barriers. We further explore blind surveillance by reconstructing audio from passive objects near sound sources using advanced radar and audio processing techniques.",
      pdfLink: "https://ieeexplore.ieee.org/iel7/9034466/9048648/09048862.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9048862"
    },
    {
      title: "Joint Positioning-Communications System: Optimal Distributed Coherence and Positioning Estimators",
      year: "2019",
      authors: "Co-authors:  A Herschfelt, DW Bliss",
      abstract: "This research presents a joint positioning-communications system designed for vehicular ad hoc networks, enabling synchronized user localization and network communications. The system uses two-way ranging methods to estimate propagation delays and clock offsets between network nodes. We introduce a family of novel one-shot estimators for distributed coherence, which under specific conditions reduce to optimal linear equations. Using simulated flight paths, we evaluate the precision and computational efficiency of two such estimators and discuss their applicability across different scenarios.",
      pdfLink: "https://ieeexplore.ieee.org/iel7/9034466/9048648/09048882.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9048882"
    },
    {
      title: "An introduction to spectral convergence: Challenges and paths to solutions",
      year: "2021",
      authors: "Co-authors: A Herschfelt, AR Chiriyath, DW Bliss",
      abstract: "This research explores the concept of spectral convergence to improve spectral efficiency, system reliability, and multifunctionality in networks of RF, mmWave, and terahertz systems. Moving beyond traditional spectral management, we advocate for systems that integrate communications, radar, PNT, situational awareness, and opportunistic spectrum access. We review key challenges, propose a taxonomy of solution approaches, and suggest future research directions. The study examines spectral convergence in contemporary applications like automotive networks and satellite meshes, highlighting challenges in distributed resource optimization. A simulation of an automotive network demonstrates the potential of these solutions.",
      pdfLink: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9376388",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9376388"
    },
    {
      title: "Respiration and Cardiac Activity Sensing Using 3-D Cameras",
      year: "2020",
      authors: "Co-authors: Y Rong, H Chu, H Yu, K Liu, DW Bliss",
      abstract: "This research focuses on remote vital sign monitoring using Azure Kinect to track respiration and cardiac activity in personal settings. We propose a fusion sensing technique combining Photoplethysmography (PPG) and commercial sensors to address challenges like ambient lighting and subject movement, common in camera- or radar-based solutions. Experiments conducted under variable lighting and motion conditions demonstrate the robustness of the technique. Results are validated against a pulse oximeter, showcasing the system's potential for accurate and reliable home health monitoring.",
      pdfLink: "https://ieeexplore.ieee.org/iel7/9443248/9443268/09443331.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9443331"
    },
    {
      title: "Technological Advances to Facilitate Spectral Convergence",
      year: "2021",
      authors: "Co-authors: AR Chiriyath, A Herschfelt, DW Bliss",
      abstract: "This research introduces the concept of RF spectral convergence, a paradigm shift promoting increased cooperation and multifunctionality among RF systems. By integrating radar, communications, PNT, situational awareness, and opportunistic spectrum access into a unified framework, this approach improves spectral efficiency, reliability, and system capabilities compared to traditional designs. The study reviews key challenges to integrating such systems within the same spectral region and highlights advancements in processor and system-on-chip technologies that enable spectral convergence, paving the way for next-generation RF, mmWave, and terahertz networks.",
      pdfLink: "https://ieeexplore.ieee.org/iel7/9723034/9723086/09723312.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9723312"
    },
    {
      title: "Communications and High-Precision Positioning (CHP2): Enabling Secure CNS and APNT for Safety-Critical Air Transport Systems",
      year: "2020",
      authors: "Co-authors: A Herschfelt, H Yu, S Wu, Y Li, H Lee, C Chakrabarti, DW Bliss",
      abstract: "This research addresses the vulnerabilities of unmanned aerial systems (UASs) to cyberattacks, focusing on robust alternatives to traditional GPS. We present the Communications and High-Precision Positioning (CHP2) system, designed for safety-critical transport and urban air mobility. CHP2 provides secure communications, precise positioning (<1 cm), and rapid synchronization (<100 ms) using limited bandwidth (10 MHz). Through simulations and over-the-air experiments with UAS platforms, we evaluate various position estimation algorithms and demonstrate CHP2's resilience against spoofing and hijacking attacks. This system is a promising candidate for alternative CNS and APNT services in safety-critical vehicular applications.",
      pdfLink: "https://ieeexplore.ieee.org/iel7/9256401/9256402/09256739.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9256739"
    },
    {
      title: "UWB Radar Cardiac Activity Sensing: Novel Arctangent Demodulator for Direct-RF Receivers",
      year: "2020",
      authors: "Co-authors: Y Rong, DW Bliss",
      abstract: "This study explores the use of Ultra Wide Band (UWB) radars for non-invasive cardiopulmonary monitoring by detecting subtle chest movements linked to respiration and heart activity. Traditional Doppler radar techniques struggle to isolate weak cardiac signals from dominant respiratory patterns. To address this, we introduce a novel Arctangent Demodulation Method for direct-RF receivers. This method improves the signal-to-noise ratio by 8–15 dB for detecting heart rate signals compared to conventional algorithms. Additionally, it incorporates adaptive respiratory artifact suppression through trend filtering, significantly enhancing real-time robustness and accuracy in heart rate monitoring applications.",
      pdfLink: "https://ieeexplore.ieee.org/iel7/9109357/9114538/09114774.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9114774"
    },
    {
      title: "Communications and High-Precision Positioning (CHP2): Secure Traffic and Resource Management Using Reinforcement Learning",
      year: "2020",
      authors: "Co-authors: O Ma, A Herschfelt, H Yu, S Wu, S Srinivas, Y Li, H Lee, C Chakrabarti, D W Bliss",
      abstract: "This study introduces the Communications and High-Precision Positioning (CHP2) system, which provides secure communication and accurate positioning for networks of cooperative RF users. Using reinforcement learning, the research demonstrates how a central arbiter dynamically optimizes resources in a network to track aerial users with minimal interactions. This approach ensures high network throughput, maintains precise positioning, reduces spectral congestion, and conserves power, making it efficient even in dense or sparse network conditions.",
      pdfLink: "https://ieeexplore.ieee.org/iel7/9256401/9256402/09256573.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9256573"
    },
    {
      title: "Joint Positioning-Communications: Constant-Information Ranging for Dynamic Spectrum Access",
      year: "2020",
      authors: "Co-authors: A Herschfelt, A Chiriyath, DW Bliss",
      abstract: `This study addresses spectral congestion in RF systems by proposing a dynamic resource management strategy through RF Convergence, which enables multiple RF services (radar, communications, and positioning) to operate cooperatively. The key innovation is the "constant-information ranging" strategy, which minimizes spectral interactions by adjusting revisit intervals while maintaining consistent information about moving targets. The method demonstrates a 91% reduction in spectral access while achieving 3 cm precision in ranging. This approach offers a scalable and efficient solution to manage spectral access in intelligent transportation systems (ITS) and dense network environments.`,
      pdfLink: "https://ieeexplore.ieee.org/iel7/9348428/9348429/09348474.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9348474"
    },
    {
      title: "Communications and high-precision positioning (chp2): Joint position and orientation tracking",
      year: "2021",
      authors: "Co-authors: A Herschfelt, DW Bliss",
      abstract: "This study builds upon the Communications and High-Precision Positioning (CHP2) system, designed for flying ad hoc networks (FANETs), which simultaneously provides synchronization, accurate positioning, and network communications using limited bandwidth. The research focuses on joint position and orientation tracking for multi-antenna users by leveraging time-of-flight (ToF) estimates between antenna pairs across platforms. This novel approach models a target's movement as a combination of translation and rotation while addressing the limitations of geometric dilution of precision (GDOP). The findings reinforce that CHP2 can support communications, navigation, and surveillance (CNS) and alternative positioning, navigation, and timing (APNT) services for safety-critical transportation applications.",
      pdfLink: "https://ieeexplore.ieee.org/iel7/9438108/9438128/09438317.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9438317"
    },
    {
      title: "Cramér–Rao Lower Bounds on 3D Position and Orientation Estimation in Distributed Ranging Systems",
      year: "2023",
      authors: "Co-authors: S Welker, A Herschfelt, DW Bliss",
      abstract: "This study explores the use of two-way ranging (TWR) systems with modern radio frequency (RF) hardware for positioning, navigation, and timing (PNT) in airborne and vehicular systems. Despite traditionally being limited by low precision, TWR now achieves sub-centimeter precision with modern consumer-grade, low-size, weight, power, and cost (SWaP-C) hardware. The research addresses challenges such as antenna placement, new electronics, and infrastructure design for supporting these systems. To guide design decisions, the study derives 2D and 3D Cramér-Rao lower bounds (CRLBs) for position and orientation estimation in multi-antenna TWR systems, factoring in geometric dilution of precision (GDoP), the number of antennas, and platform geometry. Simulations validate these theoretical results, offering insights into system performance across varying design choices. Additionally, the study provides practical guidance on applying these findings to airborne navigation system design.",
      pdfLink: "https://www.mdpi.com/2076-3417/13/3/2008",
      doiLink: "https://www.mdpi.com/2076-3417/13/3/2008"
    },
    {
      title: "Estimation and Tracking of Position Information in a Distributed Radio Frequency (RF) Communications System",
      year: "2021",
      authors: "Co-authors: A Herschfelt, DW Bliss",
      abstract: "This study presents a distributed RF communications system capable of estimating high-precision position, orientation, velocity, and acceleration for network nodes. The system leverages Kalman filtering algorithms, informed by physical principles, to mitigate error propagation and enhance robustness. By iteratively tracking parameters used in position estimation, the system ensures reliable performance. It supports multi-input, multi-output (MIMO) antennas and integrates data from GPS and inertial navigation systems (INS) to further refine estimations. This approach enables precise synchronization, delay tracking, and inter-node positioning in complex, distributed RF networks.",
      pdfLink: "https://patentimages.storage.googleapis.com/16/9d/67/91ac5d431b0227/US20210132182A1.pdf",
      doiLink: "https://patents.google.com/patent/US20210132182A1/en"
    },
    {
      title: "Communications and High-Precision Positioning (CHP2) System: Enabling Distributed Coherence and Precise Positioning for Resource-Limited Air Transport Systems",
      year: "2020",
      authors: "Co-authors: None",
      abstract: `This study presents the Communications and High-Precision Positioning (CHP2) system, a robust alternative to traditional GPS, designed for unmanned aerial systems (UAS) and other safety-critical applications. CHP2 combines secure communications, positioning, and timing synchronization, leveraging a two-way ranging (TWR) protocol with a joint waveform to achieve rapid (<100 ms) and precise (<5 cm) positioning using consumer-off-the-shelf (COTS) hardware. The system supports multi-antenna setups for accurate target location and orientation estimation and enables dynamic resource management to adapt spectral access for higher user densities. With its innovative integration of positioning and communication capabilities, CHP2 is positioned as a viable candidate for communications, navigation, and surveillance (CNS) and alternative positioning, navigation, and timing (APNT) services in high-density, safety-critical transport and urban air mobility applications.`,
      pdfLink: "https://www.proquest.com/openview/3910b17ffe0dc0562e0326e46aa455c4/1?cbl=18750&diss=y&pq-origsite=gscholar",
      doiLink: "https://www.proquest.com/openview/3910b17ffe0dc0562e0326e46aa455c4/1?cbl=18750&diss=y&pq-origsite=gscholar"
    },
    {
      title: "Extended Kalman Filter Design for Tracking Time-of-Flight and Clock Offsets in a Two-Way Ranging System",
      year: "2023",
      authors: "Co-authors: A Herschfelt, DW Bliss",
      abstract: `This study enhances two-way ranging (TWR) systems for high-precision applications by addressing limitations in time offset and signal propagation delay estimation. While earlier "one-shot" estimators offered computational efficiency through linear equations, they struggled with channel impairments. The research introduces an extended Kalman filter (EKF) tailored to these estimators, improving robustness and reducing computational complexity. Through Monte Carlo simulations in MATLAB, the study benchmarks the EKF against existing methods, showing comparable estimation accuracy. Notably, the second-order EKF solution achieves a significant order-of-magnitude reduction in computation time, making it more suitable for real-time applications.`,
      pdfLink: "https://www.mdpi.com/2624-6120/4/2/23.",
      doiLink: "https://www.mdpi.com/2624-6120/4/2/23"
    },
    {
      title: "Communications and High-Precision Positioning (CHP2): Cycle Slip Trellis Trimming Algorithm",
      year: "2021",
      authors: "Co-authors: A Herschfelt, DW Bliss",
      abstract: `This study addresses the challenges of limited spectral resources and increasing demand for RF applications by utilizing RF Convergence techniques. The Communications and High-Precision Positioning (CHP2) system is designed to deliver positioning, navigation, and timing (PNT) and communications services in congested and GPS-denied environments. Using modern two-way ranging (TWR), it achieves sub-centimeter precision within a 10 MHz bandwidth for flying ad hoc networks (FANETs).

To enhance robustness against carrier-phase range ambiguities or “cycle slips,” the study introduces a trellis trimming method. This approach employs a time-sensitive Viterbi trellis and Bayesian filtering to evaluate and eliminate unlikely ranging hypotheses. Experimental results show that this method significantly improves ranging accuracy in low-signal-to-noise ratio (SNR) conditions, making CHP2 more reliable for challenging environments.`,
      pdfLink: "https://ieeexplore.ieee.org/iel7/9438108/9438128/09438482.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9438482"
    },
    {
      title: "Stochastic Modelling of Electrical Tree Progression in Modern High Voltage Power Cables",
      year: "2016",
      authors: "Co-authors: M Hariharan",
      abstract: `This study presents a theoretical model of pre-breakdown phenomena in indoor polymeric insulators, focusing on the progression of electrical treeing in solid dielectrics like XLPE cables. Breakdown is attributed to localized field enhancement and partial discharge activity, which lead to tree formation. Using two-dimensional stochastic simulations, the model offers efficient analysis by enabling parallel processing, significantly reducing computation time.

Key findings include the identification of critical electric field thresholds at the needle plane, which trigger material degradation and filamentary tree channel formation. Simulations using standard needle-plane geometries reproduced two main tree structures: bush-type and branch-type trees, providing insights into their propagation mechanisms. This model enhances the understanding of breakdown mechanisms in polymeric insulators.`,
      pdfLink: "https://scholar.google.com/scholar?cluster=8533222635844092690&hl=en&oi=scholarr",
      doiLink: "https://scholar.google.com/scholar?cluster=8533222635844092690&hl=en&oi=scholarr"
    },
    {
      title: "Communications and High-Precision Positioning (CHP2): Hardware Architecture, Implementation, and Validation",
      year: "2023",
      authors: "Co-authors: H Yu, A Herschfelt, S Wu, Y Li, N Sciammetta, L Smith, K Rueger, H Lee, C Chakrabarti, D W Bliss",
      abstract: `The Communications and High-Precision Positioning (CHP2) system addresses spectral congestion by providing simultaneous network communications, sub-nanosecond timing synchronization, and precise localization (<10 cm) for airborne and ground platforms. Operating on a narrowband waveform (10 MHz) at 915 MHz (US ISM) or 783 MHz (EU Licensed), CHP2 leverages MIMO platforms for position and orientation estimation and eliminates reliance on external systems like GPS. It combines time-of-arrival (ToA) estimation, network synchronization algorithms, and joint processing for efficient multi-functionality, validated through lab and over-the-air experiments.`,
      pdfLink: "https://www.mdpi.com/1424-8220/23/3/1343",
      doiLink: "https://www.mdpi.com/1424-8220/23/3/1343"
    },
    {
      title: "Constant-information ranging for dynamic spectrum access in a joint positioning-communications system",
      year: "2022",
      authors: "Co-authors: DW Bliss",
      abstract: `
A constant-information ranging (CIR) strategy enables dynamic spectrum access in a joint positioning-communications system by maintaining consistent information on incoherent moving targets while minimizing interactions. This approach reduces spectral congestion and dynamically manages access by modulating revisit intervals. Validated in simulations, the CIR algorithm achieves a 91% reduction in spectral access while maintaining 3 cm precision in target ranging.`,
      pdfLink: "https://patentimages.storage.googleapis.com/8e/f6/4a/64258396d294ee/US20220256496A1.pdf",
      doiLink: "https://patents.google.com/patent/US20220256496A1/en"
    },
    {
      title: "Adaptive Radio Frequency Interference Cancellation for Radio Science Observatories",
      year: "2022",
      authors: "Co-authors: FD Lind, J Swoboda, P Erickson, K Akiyama",
      abstract: `Spectrum coexistence is a major challenge facing radio science in the modern era. Scientific use of the radio spectrum aids in the study of earth's atmosphere, geospace, solar system, and the larger astronomical universe. To enable such fundamental research, scientific instruments span wide bandwidths and have high levels of sensitivity. They actively transmit in the licensed bandwidth and passively observe frequencies within and well outside the allocation. Proliferation of radio frequency (RF) systems pose interference challenges that limit the performance of radio science observatories.`,
      pdfLink: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9881417",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/9881417"
    },
    {
      title: "Position Information Estimation in a Distributed Radio Frequency (RF) Communications System",
      year: "2021",
      authors: "Co-authors: A Herschfelt, DW Bliss",
      abstract: `A distributed RF communications system is designed to estimate positions, orientations, velocities, and accelerations of network nodes with high precision while addressing spectral congestion. By employing a joint waveform for simultaneous positioning and communications, the system reduces spectrum demand and increases operational efficiency, enabling more users to operate within limited spectral resources.`,
      pdfLink: "https://patentimages.storage.googleapis.com/96/c5/fc/dee3cab5b1458c/US11988735.pdf",
      doiLink: "https://patents.google.com/patent/US11988735B2/en"
    },
    {
      title: "A Protocol Development Kit for Wireless Systems",
      year: "2018",
      authors: "Co-authors: T McGiffen, DW Bliss",
      abstract: `This paper introduces a Protocol Development Kit (PDK) designed to streamline the creation of wireless protocols for applications beyond traditional Wi-Fi and cellular networks. By automating the design process based on general requirements like range and data rate, the PDK recommends viable protocols and demonstrates them in wireless simulations. This innovation aims to lower development costs and timelines, enabling rapid deployment in less lucrative or emerging markets.`,
      pdfLink: "https://ieeexplore.ieee.org/iel7/8353083/8355082/08355142.pdf",
      doiLink: "https://ieeexplore.ieee.org/abstract/document/8355142"
    },
    {
      title: "Fluid Wireless Protocols: Energy-Efficient Design and Implementation",
      year: "2017",
      authors: "Co-authors: G Bhat, V Chagari, J Park, T McGiffen, H Lee, DW Bliss, C Chakrabarti, U Y Ogras",
      abstract: `This paper introduces the concept of fluid wireless protocols—adaptive protocols that change based on application needs—to address the growing diversity of wireless communication requirements driven by 5G and IoT. A protocol development kit is presented, comprising a protocol recommendation engine and a hardware optimization framework. The hardware recommendation engine focuses on generating energy-efficient implementations on state-of-the-art system-on-chip platforms. The proposed techniques are demonstrated across four protocols with varying requirements and validated through air-to-air experiments on a commercial system-on-chip platform.`,
      pdfLink: "https://dl.acm.org/doi/pdf/10.1145/3139315.3139321",
      doiLink: "https://dl.acm.org/doi/abs/10.1145/3139315.3139321"
    },
    {
      title: "Remote recovery of acoustic signals from passive sources",
      year: "2024",
      authors: "Co-authors: Y Rong, DW Bliss, A Venkataramani",
      abstract: `This paper presents a method for remotely recovering acoustic signals from passive sources using wideband radars, such as ultra-wideband (UWB) radars. Unlike earlier research limited to single sound source recovery with narrowband millimeter-wave radars in direct line-of-sight, this approach enables the detection and isolation of multiple sound sources across varying distances. The use of wideband radars, combined with the see-through capability of microwave signals, allows for surveillance of targets obstructed by barriers. This is achieved by reconstructing audio from passive objects near sound sources using advanced radar and audio processing techniques, enabling blind surveillance.`,
      pdfLink: "https://patentimages.storage.googleapis.com/08/5d/e1/1b5efad203d84d/US11988772.pdf",
      doiLink: "https://patents.google.com/patent/US11988772B2/en"
    },
    {
      title: "Hybrid in-situ and signal of opportunity calibration for antenna arrays",
      year: "2022",
      authors: "Co-authors: DW Bliss",
      abstract: `This paper introduces a hybrid in-situ and signal of opportunity (SoOP) calibration method for antenna arrays, particularly conformal arrays on aircraft. These arrays, while designed to minimize drag by conforming to the aircraft's structure, face performance issues such as pointing errors and side lobe degradation caused by structural changes. The proposed online calibration algorithm uses cooperative satellites in the radio frequency (RF) line-of-sight and an in-situ source mounted on the same platform as the antenna array to optimize beam steering. Simulations demonstrate the effectiveness of this hybrid calibration approach in addressing mismatches and improving array performance.`,
      pdfLink: "https://patentimages.storage.googleapis.com/56/e0/c3/89150f0ab05220/US20220247501A1.pdf",
      doiLink: "https://patents.google.com/patent/US20220247501A1/en"
    },
    {
      title: "Remote recovery of acoustic signals from passive sources",
      year: "2021",
      authors: "Co-authors: DW Bliss, Y Rong, A Venkataramani",
      abstract: ``,
      pdfLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bjRyCCUAAAAJ&cstart=20&pagesize=80&citation_for_view=bjRyCCUAAAAJ:5nxA0vEk-isC",
      doiLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bjRyCCUAAAAJ&cstart=20&pagesize=80&citation_for_view=bjRyCCUAAAAJ:5nxA0vEk-isC"
    },
    {
      title: "Prediction of Secondary School Students’ Alcohol Addiction using Random Forest",
      year: "2016",
      authors: "Co-authors: M Hariharan",
      abstract: `Teenage alcohol addiction poses a major problem to the well-being of the individual as well as
the society. Prevention of this requires identifying the factors causing this addiction. The existing
systems mainly rely on decision trees and are able to isolate the factors causing the addiction.
The proposed system will be able to predict whether a student with a set of conditions will get
addicted to alcohol or not with high accuracy and thereby verify the extent to which the isolated
factors are correct. `,
      pdfLink: "https://www.academia.edu/download/79511580/26001-26001-2016911423.pdf",
      doiLink: "https://www.academia.edu/download/79511580/26001-26001-2016911423.pdf"
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