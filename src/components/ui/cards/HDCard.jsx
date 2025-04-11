import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HDCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-base-100 p-6 rounded-box shadow-sm text-left"
    >
      <h2 className="text-2xl font-bold uppercase mb-4 font-montserrat">
        Что такое Дизайн Человека?
      </h2>
      
      <div className="space-y-4 text-lg font-montserrat">
        <p>
          <span className="font-bold">Дизайн человека (Human Design)</span> - это концепция знаний 
          об энергетической механике человека и космологическом устройстве мира.
        </p>
        
        <p>
          Она работает как прикладное знание, которое проверяется через практику и
          наблюдение и служит одной конечной цели - помочь человеку осмыслить
          себя и мир вокруг на очень тонком и детальном, базовом уровне -
          уровне энергетической механики.
        </p>
        
        <p>
          ДЧ сочетает в себе как эзотерические знания, так и те, что сегодня называются научными. 
          Физика, астрология, биология, каббала и другие направления стали частью обоснования
          концепции Дизайна Человека.
        </p>
        
        <p>
          Начиная изучать что предлагает ДЧ, не нужно верить или не верить,
          не нужно вообще в таком ключе рассуждать. В этом случае хорошо подойти аналитически и,
          осторожно щупая каждый тезис, непредвзято проверять. Это
          то знание, которое поможет увидеть мир в очень новом, упорядоченном
          и до цинизма прагматичном и механичном ключе.
        </p>
      </div>
      
      <div className="mt-6">
        <Link 
          to="/library" 
          className="btn btn-outline px-6 py-2 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white"
        >
          Узнать больше
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}