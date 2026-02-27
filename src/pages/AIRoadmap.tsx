import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Circle } from "lucide-react";

const roadmapData = [
  {
    phase: "Beginner",
    color: "from-primary to-primary/60",
    glow: "shadow-[0_0_20px_hsl(185_100%_55%/0.3)]",
    borderColor: "border-primary",
    steps: [
      {
        title: "Python Fundamentals",
        skills: ["Variables & Data Types", "Control Flow", "Functions", "OOP Basics"],
        tools: ["Python 3.x", "VS Code", "Jupyter Notebook"],
        project: "Simple Calculator & Data Processor",
      },
      {
        title: "Mathematics for AI",
        skills: ["Linear Algebra", "Calculus Basics", "Probability & Statistics", "Matrix Operations"],
        tools: ["NumPy", "SciPy", "Khan Academy", "3Blue1Brown"],
        project: "Statistical Analysis of Real Dataset",
      },
      {
        title: "Data Handling",
        skills: ["Pandas Dataframes", "Data Cleaning", "Exploratory Analysis", "Data Visualization"],
        tools: ["Pandas", "Matplotlib", "Seaborn", "Plotly"],
        project: "EDA on Kaggle Dataset",
      },
    ],
  },
  {
    phase: "Intermediate",
    color: "from-secondary to-secondary/60",
    glow: "shadow-[0_0_20px_hsl(265_70%_55%/0.3)]",
    borderColor: "border-secondary",
    steps: [
      {
        title: "Classical Machine Learning",
        skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"],
        tools: ["Scikit-learn", "XGBoost", "LightGBM"],
        project: "Predictive Model on Real Business Problem",
      },
      {
        title: "Deep Learning Foundations",
        skills: ["Neural Networks", "Backpropagation", "CNNs", "RNNs & LSTMs"],
        tools: ["TensorFlow", "Keras", "PyTorch"],
        project: "Image Classifier or Text Sentiment Model",
      },
      {
        title: "Natural Language Processing",
        skills: ["Text Preprocessing", "Word Embeddings", "Sequence Models", "Transformers Basics"],
        tools: ["NLTK", "spaCy", "HuggingFace"],
        project: "Chatbot or Text Summarizer",
      },
    ],
  },
  {
    phase: "Advanced",
    color: "from-primary via-secondary to-primary",
    glow: "shadow-[0_0_25px_hsl(185_100%_55%/0.4)]",
    borderColor: "border-primary",
    steps: [
      {
        title: "Generative AI & LLMs",
        skills: ["Transformer Architecture", "Fine-tuning LLMs", "Prompt Engineering", "RAG Systems"],
        tools: ["OpenAI API", "LangChain", "Ollama", "FAISS"],
        project: "Custom AI Assistant / RAG Application",
      },
      {
        title: "MLOps & Deployment",
        skills: ["Model Serving", "Containerization", "CI/CD for ML", "Monitoring"],
        tools: ["Docker", "FastAPI", "MLflow", "AWS/GCP"],
        project: "Production-Ready ML API",
      },
      {
        title: "AI Research & Specialization",
        skills: ["Research Paper Reading", "Model Architecture Design", "SOTA Implementations"],
        tools: ["arXiv", "Papers with Code", "Weights & Biases"],
        project: "Novel Research Project or Kaggle Top 10%",
      },
    ],
  },
];

const careerPaths = [
  "AI/ML Engineer at FAANG",
  "AI Research Scientist",
  "Data Scientist",
  "AI Product Manager",
  "MLOps Engineer",
  "AI Entrepreneur / Startup Founder",
];

const AIRoadmap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="tech-tag mb-4 inline-block">Your Learning Path</span>
            <h1 className="text-5xl md:text-6xl font-black gradient-text mb-4">AI Roadmap</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A structured, step-by-step guide from absolute beginner to AI expert. Follow the path, build projects, land your dream job.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

            {roadmapData.map((phase, phaseIndex) => (
              <div key={phase.phase} className="mb-16">
                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0 relative z-10 ${phase.glow}`}>
                    <span className="text-background font-black text-lg">{phaseIndex + 1}</span>
                  </div>
                  <div>
                    <div className="text-xs font-mono-tech text-muted-foreground">Phase {phaseIndex + 1}</div>
                    <h2 className="text-2xl font-bold gradient-text">{phase.phase}</h2>
                  </div>
                </div>

                {/* Steps */}
                <div className="ml-6 pl-10 space-y-6">
                  {phase.steps.map((step, stepIndex) => (
                    <div
                      key={step.title}
                      className={`glass-card rounded-2xl p-6 border-l-2 ${phase.borderColor} border-l-4 hover:border-opacity-100 transition-all duration-300 hover:-translate-y-1`}
                      style={{ borderLeftColor: `hsl(var(--${phaseIndex % 2 === 0 ? 'primary' : 'secondary'}))` }}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        {stepIndex === 0 ? (
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        )}
                        <h3 className="font-bold text-lg">{step.title}</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-8">
                        <div>
                          <div className="text-xs font-mono-tech text-muted-foreground mb-2">SKILLS</div>
                          <ul className="space-y-1">
                            {step.skills.map((skill) => (
                              <li key={skill} className="text-sm text-foreground flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-xs font-mono-tech text-muted-foreground mb-2">TOOLS</div>
                          <div className="flex flex-wrap gap-1.5">
                            {step.tools.map((tool) => (
                              <span key={tool} className="tech-tag text-xs">{tool}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-mono-tech text-muted-foreground mb-2">PROJECT</div>
                          <p className="text-sm text-foreground">{step.project}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Career Paths */}
          <div className="glass-card rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold gradient-text mb-6 text-center">🎯 Career Destinations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {careerPaths.map((path) => (
                <div key={path} className="glass-card rounded-xl p-4 text-center hover:border-primary/40 transition-colors">
                  <span className="text-sm font-medium text-foreground">{path}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIRoadmap;
