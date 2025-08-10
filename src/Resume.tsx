import { motion } from "framer-motion";
const Resume = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl"
        >
          <section className="mt-6 text-center">
            <h1 className="text-3xl font-bold text-center mb-4">
              Khushboo Kumari
            </h1>
            <h3 className="font-medium">Frontend Developer</h3>
            <a
              href="https://www.linkedin.com/in/kkumari179/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 flex items-center justify-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-6 h-6 mr-2"
              />
            </a>
            <a
              href="https://github.com/bitloophole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 flex items-center justify-center mt-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="w-6 h-6 mr-2"
              />
            </a>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 border rounded-lg shadow-sm mb-2 bg-gray-50"
            >
              <p className="text-gray-700">
                A Front-end developer with 7+ years of experience designing and
                implementing interactive and visually appealing web applications
                for industries like e-commerce, healthcare, and consumer
                products. Proficient working with frameworks such as React and
                Angular, along with proficiency in HTML, CSS, and
                JavaScript/TypeScript. Experienced in using developer tools such
                as Git, NPM, Webpack and cloud technologies like Docker,
                Bitbucket pipeline and AWS ECS.
              </p>
            </motion.div>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="list-disc pl-6 text-gray-700"
            >
              <div className="d-flex flex-wrap">
                <div className="card card-shadow-strong">
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                      alt="HTML5"
                      className="w-6 h-6 mr-2"
                    />
                    HTML5
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                      alt="CSS3"
                      className="w-6 h-6 mr-2"
                    />
                    CSS3
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                      alt="Bootstrap"
                      className="w-6 h-6 mr-2"
                    />
                    Bootstrap 4
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
                      alt="SCSS"
                      className="w-6 h-6 mr-2"
                    />
                    SCSS
                  </div>
                  <div className="flex items-center">
                    <img
                      src="./material.png"
                      alt="Material UI"
                      className="w-6 h-6 mr-2"
                    />
                    Material UI
                  </div>
                </div>

                <div className="card card-shadow-strong">
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                      alt="React"
                      className="w-6 h-6 mr-2"
                    />
                    React
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
                      alt="Angular"
                      className="w-6 h-6 mr-2"
                    />
                    Angular
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                      alt="Express JS"
                      className="w-6 h-6 mr-2"
                    />
                    Express JS
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                      alt="Node JS"
                      className="w-6 h-6 mr-2"
                    />
                    Node JS
                  </div>
                </div>
                <div className="card card-shadow-strong">
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                      alt="JavaScript"
                      className="w-6 h-6 mr-5"
                    />
                    JavaScript
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                      alt="TypeScript"
                      className="w-6 h-6 mr-2"
                    />
                    TypeScript
                  </div>
                </div>

                <div className="card card-shadow-strong">
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/47/MongoDB_Logo.svg"
                      alt="MongoDB"
                      className="w-6 h-6 mr-2"
                    />
                    MongoDB
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                      alt="Postgres"
                      className="w-6 h-6 mr-2"
                    />
                    Postgres
                  </div>
                </div>

                <div className="card card-shadow-strong">
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png"
                      alt="Postman"
                      className="w-6 h-6 mr-2"
                    />
                    Postman
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4e/ServiceNow_logo.svg"
                      alt="ServiceNow"
                      className="w-6 h-6 mr-2"
                    />
                    ServiceNow
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg"
                      alt="Jira"
                      className="w-6 h-6 mr-2"
                    />
                    Jira
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/05/Bitbucket-blue-logomark-only.svg"
                      alt="Bitbucket"
                      className="w-6 h-6 mr-2"
                    />
                    Bitbucket
                  </div>
                </div>
                <div className="card card-shadow-strong">
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/0e/CI_CD_logo.png"
                      alt="CI/CD Pipeline"
                      className="w-6 h-6 mr-2"
                    />
                    CI/CD Pipeline
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg"
                      alt="Kubernetes"
                      className="w-6 h-6 mr-2"
                    />
                    Kubernetes
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
                      alt="Docker"
                      className="w-6 h-6 mr-2"
                    />
                    Docker
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
                      alt="Azure"
                      className="w-6 h-6 mr-2"
                    />
                    Azure
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Quay_logo.png"
                      alt="Quay"
                      className="w-6 h-6 mr-2"
                    />
                    Quay
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                      alt="AWS"
                      className="w-6 h-6 mr-2"
                    />
                    AWS
                  </div>
                </div>
              </div>
            </motion.ul>
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 border rounded-lg shadow-sm mb-2 bg-gray-50"
            >
              <h3 className="font-medium">Hcl Tech (Sweden) </h3>
              <p className="text-gray-500 text-sm">
                Frontend Engineer: [ Nov 2024 - July 2025 ]
              </p>
              <p className="text-gray-700">
                <li>
                  Developed and optimized reusable React components with
                  TypeScript, integrating Jotai for local state management and
                  useQuery for data fetching for AI and MlOps products
                </li>
                <li>
                  Worked closely with the AI governance team to deliver
                  GDPR-compliant features, enhancing user awareness and ensuring
                  regulatory compliance for AI-based applications
                </li>
                <li>
                  Wrote and maintained react component tests for using vitest,
                  ensuring high code quality and reliability across features.
                </li>
                <li>
                  Contributed to agile development processes, including sprint
                  planning, code reviews, and cross-functional team
                  collaboration.
                </li>
              </p>
            </motion.div>
          </section>
          <section className="mb-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 border rounded-lg shadow-sm mb-2 bg-gray-50"
            >
              <h3 className="font-medium"> Ecombooster (Sweden) </h3>
              <p className="text-gray-500 text-sm">
                Front-End developer [ Aug 2023 - Dec 2023 ]
              </p>
              <p className="text-gray-700">
                <li>
                  Developed multiple features using function-based react
                  component, material UI, react-pdf and managed state using
                  redux toolkit
                </li>
                <li>
                  Integrated RESTful APIs into application using redux thunk
                  middleware to handle asynchronous actions and worked with the
                  side effects to maintain a consistent and responsive user
                  interface
                </li>
                <li>
                  Wrote unit test using Jest for react component and redux thunk
                  services
                </li>
                <li>Worked with the team to deliver the project on time</li>
                <li>
                  Participated in enhancing the Bitbucket pipeline for
                  continuous integration/deployment (CI/CD), facilitating
                  deployment to AWS Elastic Container Service for the seamless
                  building and deploying of applications
                </li>
              </p>
            </motion.div>
          </section>
          <section className="mb-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 border rounded-lg shadow-sm mb-2 bg-gray-50"
            >
              <h3 className="font-medium">S&P Global, India</h3>
              <p className="text-gray-500 text-sm">
                Software developer (Level - II) [ Dec 2022 - Jan 2023 ]
              </p>
              <p className="text-gray-700">
                <li>
                  Helped the team with API integration and fixed 5 critical
                  production bugs Successfully completed the knowledge transfer
                  sessions and coached junior developers with onboarding which
                  shot up their productivity by 50%
                </li>
              </p>
            </motion.div>
          </section>
          <section className="mb-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 border rounded-lg shadow-sm mb-2 bg-gray-50"
            >
              <h3 className="font-medium">Exponential AI, Hyderabad</h3>
              <p className="text-gray-500 text-sm">
                Full stack developer [Mar 2020 - Dec 2022]
              </p>
              <p className="text-gray-700">
                • Developed responsive web applications for 5 products using
                HTML, CSS, TypeScript, and modern JavaScript frameworkslike
                React and Angular and Syncfusion UI componentsfor 2 of them •
                Implemented more than 200 RESTful APIs to invoke CRUD operations
                as per business logic with Express, Node JS, Sequelize ORM,
                Postgres and MongoDB • Implemented chatbot interface written in
                Vanilla JS and CSS. It was integrated into the client's website
                of 3 regions as a plugin which assisted user with quick
                information • Used Bitbucket as a version control tool and
                deployed using Azure CI/CD pipeline • Participated in code
                reviews and mentored junior developers to provide technical
                guidance and support which decreased the development time by 20%
                • Enhanced the web application's performance using front-end
                optimization tools and performance techniques and reduced build
                time by 25% • Worked in an agile development environment and
                participated in daily stand-up meetings, sprint planning, and
                retrospectives
              </p>
            </motion.div>
          </section>
          <section className="mb-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 border rounded-lg shadow-sm mb-2 bg-gray-50"
            >
              <h3 className="font-medium">Tata Consultancy Services</h3>
              <p className="text-gray-500 text-sm">
                Senior Software Developer [ Jun 2019 - Feb 2020 ]
              </p>
              <p className="text-gray-700">
                • Designed and built 3 single-page applications (SPAs) for user
                registration portal using Angular, SCSS, and TypeScript and
                utilized i18n localization • Implementation of reactive and
                template-driven forms with validation for more than 50 field •
                Conceptualized and developed HTTP API to integrate service
                caller with backend server increased system efficiency by 15%
                and improved usability by 25% • Utilized the Kendo-UI and
                PrimeFaces UI frameworks to create responsive and user-friendly
                UI components which compounded development productivity time by
                30% • Built and deployed the project using Bladelogic and Putty
                to ensure smooth deployment and server management and maintained
                source code with Git to collaborate with developers • Supported
                Quality Assurance team with the bug fixes and resolve issues
              </p>
            </motion.div>
          </section>
          <section className="mb-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 border rounded-lg shadow-sm mb-2 bg-gray-50"
            >
              <h3 className="font-medium">
                Accenture Solutions Pvt Ltd, India
              </h3>
              <p className="text-gray-500 text-sm">
                Test Engineering Analyst [ May 2016 - Jan 2019 ]
              </p>
              <p className="text-gray-700">
                • Created and maintained web applications using Angular
                framework and other web technologies • Collaborated with UI/UX
                designers to implement responsive and user-friendly designs •
                Collaborated with back-end developers to integrate front-end
                applications with server-side APIs • Wrote unit tests to ensure
                the quality of the applications using jasmine and karma
              </p>
            </motion.div>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 border rounded-lg shadow-sm bg-gray-50"
            >
              <h3 className="font-medium">
                Bachelor of Technology in Computer Science and Engineering
              </h3>
              <p className="text-gray-500 text-sm">
                Kalinga institute of industrial technology, Bhubaneshwar, India
                [ 2012 - 2016 ]
              </p>
            </motion.div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
