import React from "react";

const Footer = () => {
  return (
    <footer class="hidden md:block h-[90px] md:h-[170px] w-full bottom-0 fixed text-white text-sm">
      <div class="w-[90%] mx-auto flex flex-col">
        <div class="ml-auto">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <g clip-path="url(#clip0_21_824)">
              <path
                d="M1.05874 24.7008C1.05758 28.9017 2.15525 33.0037 4.24246 36.6192L0.859131 48.9723L13.501 45.6576C16.9976 47.5611 20.9152 48.5585 24.8963 48.5587H24.9068C38.0492 48.5587 48.7475 37.8643 48.7531 24.7196C48.7556 18.35 46.2774 12.3605 41.7746 7.85427C37.2727 3.34845 31.2853 0.8657 24.9058 0.862793C11.7618 0.862793 1.06436 11.5566 1.05894 24.7008"
                fill="url(#paint0_linear_21_824)"
              />
              <path
                d="M0.207364 24.693C0.206008 29.0452 1.34302 33.2938 3.50465 37.0388L0 49.8347L13.0952 46.4012C16.7033 48.3684 20.7657 49.4056 24.8994 49.4072H24.9101C38.524 49.4072 49.6066 38.3281 49.6124 24.7128C49.6147 18.1143 47.0473 11.9095 42.3837 7.24186C37.7196 2.57481 31.518 0.00271318 24.9101 0C11.2938 0 0.212791 11.0775 0.207364 24.693ZM8.00581 36.3938L7.51686 35.6176C5.46143 32.3494 4.37655 28.5727 4.3781 24.6946C4.38256 13.3777 13.5926 4.17054 24.9178 4.17054C30.4023 4.17287 35.5566 6.31085 39.4333 10.1899C43.3099 14.0694 45.443 19.2264 45.4417 24.7112C45.4366 36.0281 36.2264 45.2364 24.9101 45.2364H24.9019C21.2172 45.2345 17.6035 44.245 14.4519 42.375L13.7019 41.9302L5.93101 43.9676L8.00581 36.3936V36.3938Z"
                fill="url(#paint1_linear_21_824)"
              />
              <path
                d="M18.7361 14.3699C18.2737 13.3422 17.787 13.3214 17.3473 13.3034C16.9872 13.2879 16.5756 13.2891 16.1644 13.2891C15.7527 13.2891 15.0839 13.4439 14.5186 14.0612C13.9527 14.679 12.3582 16.172 12.3582 19.2087C12.3582 22.2455 14.57 25.1802 14.8783 25.5924C15.187 26.0038 19.1483 32.4348 25.4219 34.9088C30.6359 36.9649 31.6969 36.5559 32.8285 36.4528C33.9603 36.3501 36.4804 34.9602 36.9946 33.5189C37.5091 32.0778 37.5091 30.8426 37.3549 30.5844C37.2006 30.3273 36.789 30.1728 36.1717 29.8643C35.5543 29.5556 32.5198 28.0623 31.9541 27.8563C31.3882 27.6505 30.9768 27.5478 30.5651 28.1658C30.1535 28.7829 28.9715 30.1728 28.6113 30.5844C28.2514 30.997 27.8911 31.0484 27.274 30.7397C26.6564 30.43 24.6686 29.779 22.3103 27.6765C20.4754 26.0404 19.2366 24.0201 18.8766 23.4021C18.5165 22.785 18.838 22.4505 19.1475 22.143C19.4248 21.8664 19.7649 21.4222 20.0739 21.062C20.3816 20.7015 20.4843 20.4443 20.6901 20.0327C20.8961 19.6207 20.793 19.2602 20.639 18.9515C20.4843 18.6428 19.2849 15.5902 18.7361 14.3699Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_21_824"
                x1="2395.56"
                y1="4811.81"
                x2="2395.56"
                y2="0.862793"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1FAF38" />
                <stop offset="1" stop-color="#60D669" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_21_824"
                x1="2480.62"
                y1="4983.47"
                x2="2480.62"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F9F9F9" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <clipPath id="clip0_21_824">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div class="md:flex flex-col md:flex-row md:items-center justify-between md:mt-8 hidden">
          <div>
            <div class="mb-1.5">82 ADETOKUNBO ADEMOLA STREET</div>
            <div>101241, Victoria Island, Lagos</div>
          </div>

          <div>
            <div class="mb-1.5">0700 542 7279</div>
            <div>0700 542 7279</div>
          </div>

          <div>
            <div class="mb-1.5">Tuesday To Sunday</div>
            <div class="text-right">10 PM to 05 AM</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
