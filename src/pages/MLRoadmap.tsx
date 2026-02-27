import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Circle } from "lucide-react";

const roadmapData = [
  {
    phase: "Beginner",
    color: "from-primary to-primary/60",
    steps: [
      {
        title: "Python & Statistics Basics",
        skills: ["Python Syntax", "NumPy Arrays", "Statistical Distributions", "Probability Theory"],
        tools: ["Python", "NumPy", "Jupyter", "Matplotlib"],
        project: "Statistical Analysis Report",
      },
      {
        title: "Core ML Concepts",
        skills: ["Supervised vs Unsupervised", "Bias-Variance Tradeoff", "Cross-Validation", "Overfitting/Underfitting"],
        tools: ["Scikit-learn", "Pandas", "Seaborn"],
        project: "Linear Regression on Housing Data",
      },
      {
        title: "Classical Algorithms",
        skills: ["Linear/Logistic Regression", "Decision Trees", "K-Nearest Neighbors", "Naive Bayes"],
        tools: ["Scikit-learn", "Matplotlib", "Kaggle"],
        project: "Classification Model with 85%+ Accuracy",
      },
    ],
  },
  {
    phase: "Intermediate",
    color: "from-secondary to-secondary/60",
    steps: [
      {
        title: "Ensemble Methods",
        skills: ["Random Forests", "Gradient Boosting", "Bagging & Boosting", "Stacking"],
        tools: ["XGBoost", "LightGBM", "CatBoost", "Scikit-learn"],
        project: "Kaggle Competition Submission",
      },
      {
        title: "Feature Engineering & Selection",
        skills: ["Feature Scaling", "Encoding Strategies", "Dimensionality Reduction", "PCA"],
        tools: ["Scikit-learn", "SHAP", "Feature-engine"],
        project: "Feature Engineering Pipeline for Production",
      },
      {
        title: "Neural Networks for ML",
        skills: ["Feedforward Networks", "Activation Functions", "Regularization", "Hyperparameter Tuning"],
        tools: ["TensorFlow", "Keras", "Optuna"],
        project: "Neural Network Classifier",
      },
    ],
  },
  {
    phase: "Advanced",
    color: "from-primary via-secondary to-primary",
    steps: [
      {
        title: "Advanced Model Interpretability",
        skills: ["SHAP Values", "LIME", "Partial Dependence Plots", "Model Auditing"],
        tools: ["SHAP", "LIME", "ELI5", "Alibi"],
        project: "Explainable ML for Medical Diagnosis",
      },
      {
        title: "AutoML & Neural Architecture Search",
        skills: ["AutoML Pipelines", "NAS Techniques", "Hyperparameter Optimization", "Meta-Learning"],
        tools: ["Auto-sklearn", "TPOT", "Ray Tune", "Optuna"],
        project: "Automated ML Pipeline",
      },
      {
        title: "Production ML Systems",
        skills: ["Model Monitoring", "Data Drift Detection", "A/B Testing", "Feature Stores"],
        tools: ["MLflow", "Evidently", "Feast", "Seldon"],
        project: "Full MLOps Production System",
      },
    ],
  },
];

const careerOptions = [
  "ML Engineer",
  "Data Scientist",
  "MLOps Engineer",
  "AI Researcher",
  "Quantitative Analyst",
  "Computer Vision Engineer",
];

const MLRoadmap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="tech-tag mb-4 inline-block">Structured Learning</span>
            <h1 className="text-5xl md:text-6xl font-black gradient-text mb-4">ML Roadmap</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Master Machine Learning from scratch to production. Build real models, win competitions, and land top ML roles.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

            {roadmapData.map((phase, phaseIndex) => (
              <div key={phase.phase} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0 relative z-10`}>
                    <span className="text-background font-black text-lg">{phaseIndex + 1}</span>
                  </div>
                  <div>
                    <div className="text-xs font-mono-tech text-muted-foreground">Phase {phaseIndex + 1}</div>
                    <h2 className="text-2xl font-bold gradient-text">{phase.phase}</h2>
                  </div>
                </div>

                <div className="ml-6 pl-10 space-y-6">
                  {phase.steps.map((step, stepIndex) => (
                    <div
                      key={step.title}
                      className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
                      style={{ borderLeft: `3px solid hsl(var(--${phaseIndex % 2 === 0 ? 'primary' : 'secondary'}))` }}
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

          <div className="glass-card rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold gradient-text mb-6 text-center">🎯 Career Options</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {careerOptions.map((path) => (
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

export default MLRoadmap;
