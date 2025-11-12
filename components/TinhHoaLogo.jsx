import clsx from "clsx";

const TinhHoaLogo = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      className={clsx("group", props.className)}
      aria-labelledby="tinhhoa-logo-title"
    >
      <title id="tinhhoa-logo-title">Tinh Hoa</title>
      <g>
        <mask
          id="mask0_tinhhoa"
          style={{ maskType: "alpha" }}
          width="60"
          height="60"
          x="-18"
          y="-18"
          maskUnits="userSpaceOnUse"
        >
          <g className="transition-transform duration-500 ease-in-out group-hover:translate-y-[80%]">
            <path
              fill="currentColor"
              className="animate-slide-left"
              d="M15-18C7.5-18.8 3.8-15.8 0-9V42h60V-9l-2.5 1.2A22.5 22.5 0 0 1 45-2.2c-3.8-.1-7.8-1.8-11.9-3.5-4.4-1.9-9-3.8-13.5-4-6.4-.3-9.3 1.3-14 4.5l-2.5 1.2A22.5 22.5 0 0 1 15-2.2c-3.8-.1-7.8-1.8-11.9-3.5-4.4-1.9-9-3.8-13.5-4Z"
            ></path>
          </g>
        </mask>
        <g fill="currentColor" mask="url(#mask0_tinhhoa)">
          <path
            d="M22 3.25C22 7.6875 18.6953 11.3555 14.4141 11.9219C14.1367 9.83594 13.2188 7.95312 11.8633 6.48047C13.3594 3.80859 16.2188 2 19.5 2H20.75C21.4414 2 22 2.55859 22 3.25ZM2 5.75C2 5.05859 2.55859 4.5 3.25 4.5H4.5C9.33203 4.5 13.25 8.41797 13.25 13.25V14.5V20.75C13.25 21.4414 12.6914 22 12 22C11.3086 22 10.75 21.4414 10.75 20.75V14.5C5.91797 14.5 2 10.582 2 5.75Z"
            fill="currentColor"
          />
        </g>
        <mask id="path-tinhhoa-inside" fill="#fff">
          <path d="M22 3.25C22 7.6875 18.6953 11.3555 14.4141 11.9219C14.1367 9.83594 13.2188 7.95312 11.8633 6.48047C13.3594 3.80859 16.2188 2 19.5 2H20.75C21.4414 2 22 2.55859 22 3.25ZM2 5.75C2 5.05859 2.55859 4.5 3.25 4.5H4.5C9.33203 4.5 13.25 8.41797 13.25 13.25V14.5V20.75C13.25 21.4414 12.6914 22 12 22C11.3086 22 10.75 21.4414 10.75 20.75V14.5C5.91797 14.5 2 10.582 2 5.75Z" />
        </mask>
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          d="M22 3.25C22 7.6875 18.6953 11.3555 14.4141 11.9219C14.1367 9.83594 13.2188 7.95312 11.8633 6.48047C13.3594 3.80859 16.2188 2 19.5 2H20.75C21.4414 2 22 2.55859 22 3.25ZM2 5.75C2 5.05859 2.55859 4.5 3.25 4.5H4.5C9.33203 4.5 13.25 8.41797 13.25 13.25V14.5V20.75C13.25 21.4414 12.6914 22 12 22C11.3086 22 10.75 21.4414 10.75 20.75V14.5C5.91797 14.5 2 10.582 2 5.75Z"
          mask="url(#path-tinhhoa-inside)"
        />
      </g>
    </svg>
  );
};

export default TinhHoaLogo;

