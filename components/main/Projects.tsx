import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold  py-10 text-white">
        Web Projects
      </h1>
     
      <div className="h-full w-full flex flex-col flex-wrap mb-10 md:flex-row justify-around px-10 text-center">
      
       
        <ProjectCard
          src="/landweb.webp"
          title="No-Code Web Builder"
          description="A drag and drop website builder using the MERN stack and Tailwind CSS. This tool allows users to effortlessly build responsive websites by dragging and dropping components. Once designed, users can obtain the corresponding code to implement their creations."
          link="https://landweb.netlify.app/"
        />
        
       
        <ProjectCard
          src="/Jeeone.webp"
          title="Exam Preparation"
          description="Used Next.js 14, Prisma, Postgres, Tailwind, NextAuth v5, TypeScript and ShadCN. This platform enables users to prepare for the JEE examination by solving practice questions and participating in proctored exams along with learning roadmaps. It boasts impressive scores on Google Lighthouse with 100 in performance and SEO."
          link="https://jeeone.vercel.app/"
        />
        <ProjectCard
          src="/algoviz.webp"
          title="Algo Visualizer"
          description='• React-based algorithm visualizer showcasing various algorithms like searching, sorting, path-finding, etc.
          • Implemented various algorithms, such as selection sort, binary search, and BFS, using React.
          • Includes AI Algorithms like A* which takes 6X less time than Dijkstra.'
          link="https://visualgorithms.netlify.app/"
        />
        
      </div>

      <h1 className="text-[40px] font-semibold  py-10 text-white">
        AI Projects
      </h1>
      
      <div className="h-full w-full flex flex-col md:flex-row justify-between gap-10 px-10 text-center">
        <ProjectCard
          src="/eteml.webp"
          title="End-to-End ML Pipeline"
          description='This end-to-end machine learning project predicts student performance, incorporating components such as data ingestion, transformation, and model training. It features train-test pipelines, logging, exception handling, and a user-friendly Flask interface which lead to a R2 score of 0.8809'
          link="https://github.com/VaibhavMathur-2003/EndToEndML"
        />
        <ProjectCard
          src="/preprocess.webp"
          title="Data Preprocessing Interface"
          description="This project provides an interface for data preprocessing and visualization, including missing value handling, scaling, encoding categorical features, outlier management, feature selection, and diverse graph plotting. It ensures efficient data preparation and insightful visualization for enhanced data analysis."
          link="https://github.com/VaibhavMathur-2003/Preprocess"
        />
        <ProjectCard
          src="/deeplearning.webp"
          title="Makemore (Andrej Karpathy)"
          description="Inspired by Andrej Karpathy&apos;s Neural Network Zero to Hero, this project consist making of a character level language model. It begins with a bigram character-level language model. The series covers torch.Tensor, MLP models, deep network internals, Batch Normalization, and progresses to a WaveNet-like structure."
          link="https://github.com/VaibhavMathur-2003/DeepLearning/tree/main"
        />
        
      </div>

      <h1 className="text-[40px] font-semibold  py-10 text-white">
        ML in Finance
      </h1>
      
      <div className="h-full w-full flex flex-col md:flex-row justify-center gap-10 px-10 text-center">
        <ProjectCard
          src="/capm.webp"
          title="CAPM"
          description='This project implements the Capital Asset Pricing Model (CAPM) using Python and various libraries such as pandas, statsmodels, and matplotlib. The CAPM is a widely used model in finance that describes the relationship between the expected return of an asset and its systematic risk.'
          link="https://github.com/VaibhavMathur-2003/CAPM"
        />
        <ProjectCard
          src="/pairtrade.webp"
          title="Pair Trading"
          description="This project implements a pair trading strategy using historical stock data. Pair trading is a market-neutral strategy that involves taking long and short positions in two highly correlated stocks. The strategy bets on the mean-reverting behavior of the price spread between the two stocks."
          link="https://github.com/VaibhavMathur-2003/Pair-Trading"
        />
        
      </div>
    </div>
  );
};

export default Projects;
