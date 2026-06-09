export const experience = [
  {
    role: "Module Lead",
    company: "Cakesoft Technologies",
    website: "https://cakesofttech.com",
    period: "May 2019 — Present",
    desc: `
- Built scalable cross-platform mobile and web applications using React Native, React.js, and Node.js across domains including banking, fintech, social media, chat, e-commerce, and cryptocurrency
- Architected and developed AI solutions, Retrieval-Augmented Generation (RAG) chatbots, and AI-powered workflows, leveraging LangChain, LlamaIndex, LangGraph, and Large Language Models.
- Integrated OpenAI, Anthropic, Groq, and Hugging Face models into production applications.
- Designed and implemented AI backend services and APIs using Python and FastAPI, integrating semantic search, embeddings, prompt engineering, and vector databases such as Pinecone, MongoDB, and pgvector.
- Built and deployed a Model Context Protocol (MCP) server enabling context-aware integration between AI models and external tools and data sources
- Followed spec-driven development using SpecKit and OpenSpec for collaboration with autonomous AI agents
- Built a production-grade autonomous development system where AI agents independently plan, design, and ship code changes, eleminating engineering cycle time
- Designed a multi-agent pipeline using OpenSpec with spec-driven development, enforcing structured planning (feature specs, design docs, checklists) and collaborated with AI-assisted development tools, GitHub Copilot, and Claude.
- Developed agent context infrastructure (context maps, domain specs, architecture references) to improve output accuracy and reduce hallucination and context drift
- Developed responsive and high-performance web applications using React, Svelte, TypeScript, and modern frontend architectures
- Built CI/CD pipelines using GitHub Actions to automate builds, testing, deployments, and release management.
- Implemented custom native module integrations for Android and iOS using React Native bridges, TurboModules, and Rust FFI to deliver high-performance cross-platform functionality.
- Generated Rust FFI bindings for Android and iOS to enable high-performance native module integration
- Worked with Bitcoin technologies and protocols including RGB, Lightning Network, and Whirlpool, implementing crypto-enabled features in production applications
- Implemented scalable state management using Redux, Redux Thunk, Redux Saga, and Zustand
- Designed offline-first architectures using Realm, WatermelonDB, SQLite, and caching strategies
- Developed backend services in Rust using Tokio and asynchronous programming patterns to build high-performance applications and infrastructure services, like Watchtower and Orbis1
- Implemented real-time features, including chat, notifications, and live data synchronization, using WebSockets and event-driven architectures.- Built workflow automations for app builds, deployments, package publishing, and release management
- Built and maintained scalable RESTful backend APIs and microservices using Node.js, integrating third-party services, authentication systems: JWT and OAuth-based workflows, and payment gateways.
- Managed end-to-end release cycles for Google Play Store and Apple App Store
- Practiced test-driven development (TDD) using Jest
- Implemented end-to-end and automation testing using Maestro, Detox, and Appium
- Built a peer-to-peer messaging system using Holepunch protocols including Hyperswarm and Hypercore
- Managed a team of developers, including task assignment, progress tracking, and delivery coordination
- Represented the organization and products at international conferences, delivering demos and engaging with developers, partners
    `,
  },
  {
    role: "Mentorship",
    company: "Summer of Bitcoin",
    website: "https://www.summerofbitcoin.org/",
    period: "March 2022 — July 2022",
    desc: `
    - Mentored an intern in building applications on the Bitcoin Lightning Network using LND (Lightning Network Daemon)
    - Guided end-to-end development including Lightning payments integration, wallet interactions, node management and building apps using React Native
    - Conducted code reviews, debugging sessions, and architectural discussions to improve code
    `,
  },
  {
    role: "Software Engineer",
    company: "Podium Systems",
    website: "https://podiumsys.com",
    period: "May 2017 — March 2019",
    desc: `
    - Mobile application development with Android, React Native, iOS
    - Converting UI wireframes to high-performance and high-quality code
    - PayTm and InstaMojo payment gateway integration
    - Worked on Spring Boot-based microservices
    - Google Play in-app purchases
    - Firebase: phone and email authentication, cloud messaging, in-app messaging, crash reporting, analytics, remote config, and dynamic links
    - Facebook, Twitter, and Google SDK integration for authentication
    - InMobi, AdColony, and MobPub ads integration, monetization using Facebook Audience Network
    - Twitter SDK and YouTube SDK integration to play videos in the app
    - YouTube, Twitter, Instagram, and Wikipedia API integration to retrieve data
    - Bug fixing and performance optimization
    `,
  },
] as const;
