export const profile = {
  name: "Preet Sojitra",
  photo: {
    src: "/p-photo.jpeg",
    alt: "Portrait of Preet Sojitra",
  },
  headline: "Early career engineer building reliable AI and data systems.",
  subheading:
    "Focused on learning quickly, owning deliverables, and shipping production-ready pipelines across ML evaluation, distributed systems, and cloud infrastructure.",
  location: "San Francisco, USA (open to relocation)",
  emails: [
    { label: "Primary", value: "psoji001@ucr.edu" },
    { label: "Alternate", value: "preetsojitralearning@gmail.com" },
  ],
  phone: "+1 951 542 0336",
  links: {
    github: "https://github.com/preetsojitra2712",
    linkedin: "https://www.linkedin.com/in/preet-sojitra-a4b616208",
    portfolio: "Portfolio link coming soon",
    resume: "https://drive.google.com/file/d/1P1UjMEfRohqo-eNWJE7ACPRDB3nzxBOv/view?usp=sharing",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
  metrics: [
    { label: "DocFlow AI", value: "10k+ documents processed" },
    { label: "Localization tooling", value: "40+ locales supported" },
    { label: "LLM workflow latency", value: "Sub 500ms decisions" },
    { label: "MedQuery search", value: "150k+ docs indexed" },
    { label: "Hybrid search p95", value: "Sub 200ms" },
    { label: "Autoscaler resilience", value: "Handled 4x spikes" },
  ],
  about: [
    "I build AI and data systems through hands-on projects that connect data quality, model behavior, infrastructure, and user needs.",
    "I pay close attention to reliability and observability because small failures can quietly break user trust.",
    "I like working on systems that are correct, explainable, and practical to operate in production.",
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "University of California, Riverside",
      gpa: "3.7",
      graduation: "Dec 2025",
    },
    {
      degree: "Bachelor of Engineering in Information Science and Engineering",
      school: "Visvesvaraya Technological University",
      gpa: "3.7",
      graduation: "Jun 2024",
    },
  ],
  experience: [
    {
      company: "Google Summer of Code 2025",
      role: "Open Source Contributor, Unicode Consortium",
      period: "May 2025 – Sep 2025",
      problem:
        "Locale validation workflows were slow and inconsistent across datasets.",
      built:
        "Worked on internationalization tooling and data workflows for Unicode datasets, collaborating closely with Google's team.",
      impact: [
        "Expanded support to 40+ locales for validation",
        "Reduced data review time by 45% with automation",
        "Improved validation accuracy across multilingual inputs",
      ],
      stack: ["Python", "TypeScript", "Unicode", "CI/CD"],
      details: [
        "Built locale validation pipelines with clear error reporting.",
        "Structured datasets to reduce edge-case ambiguity.",
        "Added contributor tooling and review automation.",
      ],
    },
    {
      company: "UCR Database Research Lab",
      role: "Student Researcher",
      period: "Mar 2025 – Dec 2025",
      problem:
        "Evaluation pipelines for multimodal models lacked reproducible metrics, consistent comparisons across model families, and fast iteration cycles.",
      built:
        "Worked on large-scale ML evaluation pipelines for vision-language models with a focus on reproducibility, metric normalization, and analysis tooling.",
      impact: [
        "Evaluated 10k+ images across multiple datasets with reproducible metrics",
        "Reduced experiment turnaround time by 30% with automation",
        "Built reusable prompt generation and templating framework",
      ],
      stack: ["Python", "PyTorch", "SQL", "FastAPI"],
      details: [
        "Implemented batch inference pipelines with observability hooks for latency, failures, and validation.",
        "Normalized metrics across CLIP- and BLIP-style model families for fair comparison.",
        "Built analysis dashboards with exportable reports for research reviews.",
      ],
    },
    {
      company: "Full Stack Software Engineer Intern",
      role: "Intern",
      period: "Aug 2022 – May 2024",
      problem:
        "Internal platforms needed better reliability and performance for daily users.",
      built:
        "Built full stack features for internal platforms with a focus on performance and reliability.",
      impact: [
        "Improved system uptime to 99.9%",
        "Deployed 12+ features across web and backend services",
        "Optimized API latency by 35%",
      ],
      stack: ["React", "TypeScript", "Django", "Postgres"],
      details: [
        "Shipped observability dashboards and alerting playbooks.",
        "Contributed to schema migrations and data integrity improvements.",
        "Collaborated with product teams to define requirements.",
      ],
    },
  ],
  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "Java"],
    frameworks: ["PyTorch", "LangChain", "React", "FastAPI", "Django"],
    platforms: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Postgres",
      "Prometheus",
      "Kafka",
      "Spark",
    ],
  },
  projects: [
    {
      id: "docflow-ai",
      title: "DocFlow AI",
      category: "Agentic systems",
      summary:
        "Document workflow platform with structured outputs, retries, and observability.",
      problem:
        "Document approval flows were slow and inconsistent because LLM outputs were unreliable and hard to audit.",
      approach:
        "Implemented a workflow engine with schema validation, idempotent steps, and retries.",
      outcome:
        "Processed 10k+ documents with 70% automation and sub-500ms decisions for common cases.",
      learning:
        "Reliable LLM systems need clear schemas, retries, and end-to-end tracing from day one.",
      architecture: [
        "Orchestrator with state machine and replayable steps",
        "Schema-first LLM gateway with validation",
        "Observability layer for traces and retries",
      ],
      metrics: [
        "70% automation rate",
        "10k+ documents processed",
        "Sub 500ms decision latency",
      ],
      stack: ["TypeScript", "FastAPI", "Postgres", "LangChain", "Redis"],
      learningPoints: [
        "Policy-aware human-in-the-loop routing",
        "Multi-tenant analytics dashboards",
        "Semantic alerting for drift detection",
      ],
      diagram: ["Intake", "LLM Gateway", "Workflow Engine", "Audit Log"],
    },
    {
      id: "medquery",
      title: "MedQuery",
      category: "Search and retrieval",
      summary:
        "Hybrid medical search combining BM25 and vector search for precision and speed.",
      problem:
        "Clinical teams needed reliable search across medical literature with stronger top-k accuracy.",
      approach:
        "Built a hybrid retrieval pipeline using lexical and vector signals with reranking.",
      outcome:
        "Indexed 150k+ documents with sub-200ms p95 latency and improved top-3 precision.",
      learning:
        "Combining lexical and semantic signals improves recall without sacrificing speed.",
      architecture: [
        "BM25 index with Lucene",
        "Vector embeddings with FAISS",
        "Reranking and evaluation harness",
      ],
      metrics: [
        "150k+ documents indexed",
        "Sub 200ms p95",
        "Improved top-3 precision",
      ],
      stack: ["Python", "Lucene", "FAISS", "FastAPI"],
      learningPoints: [
        "Domain-adapted embeddings",
        "Active learning feedback loop",
        "Multi-lingual query expansion",
      ],
      diagram: ["Query", "BM25 + Vectors", "Rerank", "Results"],
    },
    {
      id: "autoscaler",
      title: "Predictive Kubernetes Autoscaler",
      category: "Cloud and reliability",
      summary:
        "Predictive autoscaler using Prometheus metrics to handle spikes safely.",
      problem:
        "Traffic spikes caused latency regressions and missed SLAs.",
      approach:
        "Implemented predictive scaling with guardrails and rollback thresholds.",
      outcome:
        "Handled 4x load spikes while maintaining 99.9% availability.",
      learning:
        "Prediction without safety checks can cause instability; guardrails matter.",
      architecture: [
        "Prometheus metrics ingestion",
        "Forecasting service with safety bounds",
        "Autoscale controller with rollback",
      ],
      metrics: ["Handled 4x load spikes", "99.9% availability"],
      stack: ["Go", "Kubernetes", "Prometheus", "Grafana"],
      learningPoints: [
        "Multi-cluster failover support",
        "Cost-aware scaling optimization",
      ],
      diagram: ["Metrics", "Predictor", "Scaler", "Cluster"],
    },
    {
      id: "fraud-detection",
      title: "Real-time Fraud Detection",
      category: "Data streaming",
      summary:
        "Real-time credit card fraud detection pipeline with Spark and Kafka.",
      problem:
        "Needed a resilient streaming system to score transactions at massive scale.",
      approach:
        "Built a streaming ML pipeline with feature extraction and low-latency scoring.",
      outcome:
        "Processed 1M+ events/sec and reached a 71.3 F1 score in evaluation.",
      learning:
        "Streaming ML requires careful backpressure handling and monitoring.",
      architecture: [
        "Kafka ingestion at scale",
        "Spark streaming feature extraction",
        "Online scoring with monitoring",
      ],
      metrics: ["1M+ events/sec", "71.3 F1 score"],
      stack: ["Spark", "Kafka", "Python", "AWS"],
      learningPoints: [
        "Drift-aware retraining triggers",
        "Real-time explainability dashboard",
      ],
      diagram: ["Ingest", "Stream Features", "Model Score", "Alerts"],
    },
  ],
  research: {
    themes: [
      "Fairness and bias evaluation",
      "Reliable multimodal ML systems",
      "Human-centered ML tooling",
    ],
    highlights: [
      "Bias evaluation pipeline for vision-language models with 10k+ images.",
      "Springer 2024 chapter on VR/AR medical training systems.",
      "Paper on hybrid ML + genetic algorithm malware detection.",
    ],
    pipeline: [
      "Dataset ingestion",
      "Prompt generation",
      "Batch inference",
      "Metric aggregation",
      "Insight reporting",
    ],
  },
  writing: [
    {
      title: "LLM guardrails and structured outputs",
      summary:
        "Designing schemas, validation layers, and recovery paths for production LLM pipelines.",
      date: "Coming soon",
    },
    {
      title: "Evaluating multimodal models at scale",
      summary:
        "A blueprint for repeatable, high-signal evaluation with clear accountability.",
      date: "Coming soon",
    },
    {
      title: "Hybrid search: BM25 plus vectors",
      summary:
        "Why combining lexical and semantic signals consistently improves retrieval quality.",
      date: "Coming soon",
    },
    {
      title: "Kubernetes autoscaling with safe controls",
      summary:
        "Predictive scaling, guardrails, and rollback strategies for zero-drama reliability.",
      date: "Coming soon",
    },
    {
      title: "From prototypes to production systems",
      summary:
        "Turning experiments into durable platforms with metrics and observability.",
      date: "Coming soon",
    },
  ],
};
