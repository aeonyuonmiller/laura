import { motion } from "motion/react"

const Background3 = ({ color }) => (

    <svg
        className="backgroundish"
        xmlns="http://www.w3.org/2000/svg"
        width="100vw"
        // height="1080"
        fill="none"
        viewBox="0 0 1920 1080"
    >
        <motion.path
            initial={{ scale: .1, rotate: '6deg' }}
            animate={{ scale: .15, rotate: ['0deg', '-6deg'], transition: { duration: 1 } }}
            exit={{ scale: 1, transition: { delay: .6 } }}
            fill={color}
            d="M365.593 96.666c-2.209 1.162-4.534 3.022-5.231 4.184-.582 1.163-2.79 4.185-4.998 6.858-2.093 2.674-3.837 5.348-3.837 5.929 0 .697-.813 1.86-1.743 2.674-2.79 2.325-9.532 14.297-10.462 18.715-.465 2.208-1.627 4.998-2.441 6.276-.93 1.279-1.628 4.07-1.628 6.395-.116 2.208-1.046 6.16-2.324 8.718-2.698 5.885-.351 14.532-4.069 19.645-1.279 1.743-1.744 5.812-1.744 16.041 0 11.159-.465 14.762-2.441 19.761-2.209 5.579-2.441 8.021-1.976 27.201.181 12.47 3.517 23.074 4.185 35.105.349 5.812 1.163 11.043 2.093 12.438.929 1.279 1.627 4.883 1.627 8.137s1.046 8.021 2.325 10.927c1.278 2.789 2.324 6.974 2.324 9.531 0 2.441.465 4.767 1.163 5.116.581.348 1.627 2.906 2.324 5.579.698 2.674 2.093 6.509 3.023 8.602.93 1.976 1.628 4.185 1.628 4.999 0 2.441 9.648 20.342 12.786 23.829 1.744 1.86 3.604 4.65 4.069 6.161.349 1.395 4.417 5.812 8.95 9.648 7.091 6.161 8.719 6.975 11.857 6.51 4.185-.697 9.416-3.139 58.819-28.247 37.662-19.18 47.659-23.249 59.283-24.528 6.278-.581 6.975-.464 9.881 2.558 2.673 2.557 2.906 3.371 1.627 4.534-1.976 1.743-25.69 16.157-43.01 26.038-6.742 3.836-18.017 10.578-25.108 14.995-7.439 4.65-17.901 9.997-24.527 12.438-6.394 2.441-12.786 5.58-14.065 6.975-4.882 5.231-4.069 17.204 1.395 18.482 3.371.814 24.294 8.486 31.618 11.508 3.254 1.395 9.996 3.487 15.111 4.65 39.755 9.066 46.614 9.416 99.272 3.836 9.299-.93 18.598-2.092 20.923-2.441l4.068-.814-2.557 3.255c-1.394 1.744-2.557 4.301-2.557 5.696 0 1.279-.814 3.952-1.86 5.928-2.325 4.417-2.325 11.043 0 15.577 1.046 1.86 1.86 4.649 1.86 5.928 0 5.231 13.135 27.898 21.156 36.732 4.417 4.766 7.904 9.184 7.904 9.881 0 1.86 7.556 4.533 12.671 4.533 11.857 0 49.635-12.553 68.699-22.899 27.898-15.111 26.736-14.646 26.736-12.089 0 1.279.465 2.557 1.046 2.906s2.442 3.371 4.185 6.742c4.185 8.137 5.812 9.764 12.67 13.367 5.348 2.674 7.323 3.023 18.715 3.139 7.091 0 20.924-.348 30.921-.93l18.25-1.046 2.441 5.579c3.255 7.324 3.487 26.039.465 31.386-1.744 3.022-2.092 7.091-2.092 30.224 0 26.353 7.333 63.361 22.202 86.019 22.776 33.129 50.249 55.077 86.136 72.535 9.183 4.417 10.694 5.58 11.275 8.602 2.431 12.153-3.952 23.114-3.952 35.221 0 9.813-3.345 18.885-3.836 28.713-.64 11.676-1.574 33.419-6.161 43.009-1.511 2.673-2.092 7.904-2.557 19.994-.363 11.486-3.72 21.966-3.72 33.361 0 10.462-.349 12.671-2.79 17.204-2.906 5.696-8.834 9.765-15.576 11.044-2.209.465-9.067 3.138-15.112 5.928-6.161 2.906-12.786 5.579-14.646 5.928-1.976.349-4.65 1.279-5.929 2.093-1.279.697-4.184 1.743-6.509 2.208-4.417.814-6.858 4.069-6.858 9.416 0 7.556 4.185 9.532 13.716 6.858 3.604-1.046 7.672-2.557 8.951-3.255 3.138-1.976 23.248-8.369 29.176-9.416l4.766-.697 1.396 7.904c.697 4.301 1.511 11.044 1.627 14.88l.232 6.974 4.185 1.046c5.231 1.279 9.3.35 11.159-2.557.698-1.278 2.209-7.439 3.255-13.716 1.046-6.394 2.442-11.974 2.907-12.555 1.743-1.743 14.297 3.953 27.316 12.671 13.6 9.183 18.25 10.578 22.086 6.742 1.395-1.395 1.744-3.022 1.279-5.928-.93-5.928-3.255-8.603-10.694-12.322-18.831-9.416-35.919-23.598-34.873-28.829.349-1.511 1.047-5.347 1.744-8.485.697-3.255 2.557-14.182 4.184-24.411s3.72-23.016 4.65-28.48c.813-5.463 1.86-13.018 2.325-16.854.349-3.836 1.395-10.695 2.325-15.112 4.068-20.924 5.347-28.944 6.393-41.847 1.976-23.597 3.255-35.571 3.836-36.268.349-.349 5.231.348 10.927 1.627 39.245 8.176 84.372 1.032 123.212-5.463 10.47-1.744 19.19-2.906 19.53-2.558 3.39 3.382 3.93 21.535 4.07 26.272.51 14.509 4.21 27.614 4.65 42.195.58 19.645.7 20.343 3.37 22.551 4.19 3.372 10.81 2.79 26.27-2.441 7.68-2.673 18.37-5.812 23.72-7.09 5.69-1.279 16.5-5.464 25.8-9.765 8.72-4.185 16.63-7.556 17.56-7.556 2.2 0 5.58 3.953 8.95 10.462 5.58 10.578 23.01 25.574 29.99 25.574 3.37 0 7.32-5.232 7.32-9.765 0-3.022-1.39-5.115-7.67-11.159-7.79-7.672-18.48-20.691-17.67-21.505.23-.232 5.11-2.557 10.81-5.231 5.81-2.673 11.39-5.579 12.44-6.625 2.79-2.558 2.67-8.603-.23-11.741-3.14-3.371-12.09-3.488-18.25-.233-4.65 2.325-6.86 2.79-12.44 2.558l-3.37-.233.69-17.553c.47-11.043.35-18.482-.46-19.76-1.86-3.488-5.93-2.674-10.81 2.324-4.07 4.185-4.54 5.347-5.23 12.787-.69 6.685-3.61 12.169-3.61 18.948 0 6.625-.34 8.136-2.55 10.229-1.51 1.278-3.96 2.674-5.58 3.022-17.39 4.14-36.23 14.92-54.17 16.158l-6.16.465-.47-10.114c-1.04-18.482-3.02-41.382-4.3-49.519-.7-4.417-1.04-8.136-.93-8.253.23-.232 4.3-1.976 9.07-3.952 12.09-5.114 19.88-9.648 31.38-18.134 16.63-12.321 33.48-31.386 39.87-45.102 3.61-7.672 11.63-35.338 14.19-49.054 2.21-11.276 3.83-40.569 3.95-68.351.12-14.996.35-17.088 1.97-17.088 4.65 0 26.86 8.603 42.9 16.623 30.11 14.879 31.38 15.344 47.66 14.995 24.18-.581 47.08-5.347 62.19-13.019 14.99-7.555 47.89-28.247 58.93-36.965 13.14-10.462 25.92-29.991 25.92-39.639 0-6.044-1.62-8.253-9.53-12.205-4.07-2.092-4.88-2.093-17.43-.233-17.56 2.441-69.4 7.672-75.56 7.556l-5-.116 5.81-1.627c3.26-.814 16.04-3.139 28.48-5.115 46.62-7.324 72.77-15.344 100.32-30.92 16.39-9.3 27.32-18.018 43.82-34.99 16.04-16.273 19.42-21.272 18.14-26.619-1.17-4.65-9.42-11.857-14.53-12.787-2.33-.349-6.63-1.976-9.77-3.487-3.02-1.628-7.67-3.604-10.46-4.417l-4.88-1.396 5.23-2.789c8.6-4.418 23.36-14.531 31.27-21.505 4.18-3.72 10.23-8.718 13.71-11.159 21.51-15.925 34.53-33.944 41.62-57.541 2.56-8.369 3.25-13.484 3.72-26.619.7-19.064 0-23.016-8.95-45.683-6.51-16.507-9.88-20.808-16.62-21.97-6.4-1.046-9.42.232-16.74 7.091-12.34 11.182-25.94 20.591-38.13 32.199-14.67 13.966-31.1 25.569-45.68 39.522-10.88 10.405-23.5 18.189-34.3 28.596-14.29 13.717-52.3 49.752-61.6 58.47-3.72 3.487-9.07 7.556-11.86 9.183-2.79 1.628-9.42 7.207-14.76 12.205-5.35 5.115-14.42 13.718-20.11 19.181-5.82 5.463-15.93 15.228-22.67 21.621-78.35 74.628-76.84 73.233-84.74 75.557l-2.68.814.82-13.135c.7-13.252 1.86-26.387 3.95-48.125.58-6.393 1.74-21.272 2.44-33.128s2.09-28.48 3.02-36.966c2.79-23.946.35-44.754-8.37-71.489-1.74-4.999-2.79-9.299-2.67-9.416 1.4-1.162 27.55-11.159 50.1-19.18 32.78-11.74 57.66-22.784 59.29-26.387 2.79-5.929-2.56-15.577-8.49-15.577-1.16 0-9.07 3.372-17.55 7.44-11.15 5.345-22.99 8.758-34.06 14.181-12.5 5.998-25.79 9.426-38.01 16.158-3.62 2.066-7.87 1.555-11.51 3.604-7.09 3.603-9.07 2.208-16.74-11.276-8.72-15.344-11.86-19.993-22.2-33.012-10.58-13.135-18.72-20.924-28.6-27.434-4.3-2.789-9.53-6.277-11.62-7.672-5.81-3.836-23.02-11.973-26.97-12.786-1.98-.465-6.51-2.209-10-3.953-3.49-1.627-8.25-3.487-10.46-3.952s-5.46-1.627-7.21-2.441c-1.74-.93-4.18-1.627-5.46-1.627s-4.07-.698-6.16-1.628c-9.42-3.836-19.41-6.51-24.76-6.51-3.14-.116-7.09-.813-8.72-1.743-3.95-2.208-94.039-2.558-97.992-.349-1.395.814-6.16 1.744-10.694 2.209-6.626.581-10.694 1.86-21.737 7.207-12.438 6.045-14.763 7.672-29.061 21.04-8.485 7.905-16.274 15.925-17.204 17.785-.929 1.744-3.371 5.231-5.463 7.672-2.093 2.325-3.836 4.882-3.836 5.696s-1.512 3.022-3.371 4.998c-3.836 3.836-12.903 21.389-12.903 24.644 0 1.162-.698 3.138-1.511 4.417-.93 1.279-2.209 4.417-2.906 6.974-.581 2.558-2.79 9.067-4.767 14.531-1.976 5.463-3.603 11.276-3.603 13.019 0 1.628-.697 4.534-1.627 6.394-.93 1.743-2.209 5.347-2.906 7.904-1.627 6.509-3.604 8.718-7.672 8.718-11.857 0-31.851-1.976-33.478-3.255-1.047-.93-6.743-1.743-14.415-2.208-6.858-.349-13.948-1.396-15.692-2.209-3.487-1.86-22.551-2.208-25.109-.581-1.859 1.162-3.138 9.299-2.091 13.367.93 3.604 1.046 3.604 23.48 7.092 10.113 1.627 21.389 3.371 24.876 3.952 11.392 1.976 26.039 3.603 32.548 3.603 3.488 0 7.091.465 7.788.93 2.209 1.395 2.092 14.066-.116 18.25-1.279 2.558-1.86 6.743-1.86 14.879 0 7.44-.581 12.787-1.627 15.112-1.279 2.79-1.86 11.508-2.208 34.175-.582 24.527-1.047 31.037-2.442 33.943-1.511 2.79-1.86 7.788-1.86 25.573 0 13.949-.464 23.249-1.278 25.341-.814 1.744-1.744 5.231-2.093 7.556l-.697 4.301-10.462-8.37c-15.576-12.438-75.209-72.884-93.343-94.388-3.138-3.836-14.763-15.577-25.922-26.155-11.043-10.578-21.505-21.156-23.249-23.597-6.742-9.183-132.283-128.564-142.396-135.306-2.442-1.744-8.719-6.975-13.834-11.858-12.089-11.508-25.922-23.364-27.2-23.364-.582 0-5.464-3.952-10.811-8.951-5.231-4.882-13.6-11.741-18.366-15.344-4.766-3.487-12.322-9.531-16.623-13.367-7.151-6.571-15.409-11.612-22.784-17.902-7.904-6.626-15.111-10.81-18.366-10.578-1.162.116-3.836 1.162-6.044 2.325"
        ></motion.path>
        <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2, delay: .3 } }}
            exit={{ opacity: 1, transition: { delay: .6 } }}
            fill={color}
            d="M0 0h1920v1080H0z">
        </motion.path>
    </svg>
);

export default Background3;