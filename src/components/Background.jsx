import { motion } from "motion/react"

const Background = ({ color }) => (
    <svg
        className="background"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 1920 1080"
    >
        <motion.path
            initial={{ scale: 1, rotate: '-30deg', x: '80%', y: '50%' }}
            animate={{ scale: 5, rotate: ['0deg', '30deg'], x: '0%', y: '0%', transition: { duration: 1 } }}
            exit={{ scale: 5, transition: { delay: .6 } }}
            // transition={{ duration: 1 }}
            // fill="#FD7536"
            fill={color}
            d="M1021.52 790.946c-1.42.676-3.13 1.55-5.14 2.622l-13.49 8.177q-28.44-5.79-48.863-9.587-19.036-4.733-37.456-8.033l-83.158-20.677q-12.253-5.61-21.271-7.852-8.631-3.428-16.647-5.42-10.019-2.492-18.419-3.299-7.4-.559-15.414-2.552l-8.015-1.993q-2.62-1.932-6.243-4.115-10.48-7.73-15.336-12.782-3.852-4.802-9.093-8.667-4.856-5.05-12.33-12.035-6.473-6.735-21.578-16.897l-10.867-6.545-14.948-30.624q2.698-8.298-1.386-15.72-3.081-7.172-5.624-19.336-2.156-13.348-1.614-34.995 1.93-22.584 14.264-60.516 6.939-21.338 15.111-39.806 8.557-19.653 21.352-35.691 21.66-26.646 38.233-44.306 16.958-18.846 33.761-33.887 17.805-14.792 36.843-26.714 19.423-13.109 46.014-28.277 4.163-2.81 17.496-7.181 13.335-4.373 29.674-7.997a210.4 210.4 0 0 1 32.91-4.629q17.958-1.941 32.986 1.796l30.138-2.757c14.02 3.487 26.25 6.955 36.68 10.403l105.2 26.158c2.47 5.738 3.13 11.456 2 17.154-.2 5.074-1 10.855-2.39 17.344a72 72 0 0 1-1.76 7.018l41.08 27.715c-3.22 4.934-3.42 10.039-.61 15.315 3.82 5.144 8.15 10.222 12.98 15.234q5.79 6.014 13.11 11.831c5.36 4.378 9.25 7.821 11.66 10.327 3.38 3.508 4.77 6.714 4.15 9.616 13.58 50.703 12.56 102.185-3.09 154.446-14.64 52.13-40.96 100.988-78.98 146.577l-7.12 8.548c-28.19 13.271-56.15 20.871-83.89 22.798-10.97.737-21.27.674-30.91-.189"
        ></motion.path>
    </svg>
);

export default Background;
